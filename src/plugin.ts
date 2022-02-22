import EventEmitter from "events";
import path from "path";
import RpcClient from "./generated/main.js";

export interface InitParams {
    configuration: {
        "lightning-dir": string;
        "rpc-file": string;
    };
    options: Record<string, unknown>;
}

type JSONRpcPayload = {
    jsonrpc: "2.0";
    id: string | number;
    method: string;
    params?: unknown;
};

export class RpcMethod {
    public main: (params: unknown) => unknown;
    constructor(
    public name: string,
    public usage: string,
    public description = "No description provided.",
    public longDescription = "No detailed description provided"
    ) {
        this.main = () => {
            return {};
        };
    }
}

class Notification extends EventEmitter {}

export default class Plugin {
    dynamic: boolean;
    notifications: Record<string, Notification> = {};
    rpc: RpcClient | null = null;
    methods: RpcMethod[] = [];
    options: Record<string, {
        default: unknown;
        description: string;
        type: string;
        value: unknown;
    }> = {};
    hooks: Record<string, (params: unknown) => Promise<unknown>> = {};
    private _compatMode: boolean;
    constructor(params: { dynamic?: boolean; compatMode?: boolean } | boolean) {
        this._compatMode = false;
        // Plugins are dynamic by default
        this.dynamic = true;
        // Backward compat
        // TODO: Make sure nobody relies on it anymore
        if (typeof params === "boolean") {
            this.dynamic = params;
        } else if (params) {
            // Plugins are dynamic by default
            this.dynamic = params.dynamic || true;
            this._compatMode = params.compatMode || false;
        }
    }

    // Beware with writing on stdout
    // https://nodejs.org/api/process.html#process_a_note_on_process_i_o
    protected async _write(content: string): Promise<void> {
    // We append \n\n, not that is still mandatory but it's way more
    // readable to a human debugger
        content += "\n";
        if (!process.stdout.write(content)) {
            return new Promise((resolve, reject) => {
                process.stdout.once("drain", () => {
                    resolve();
                });
                process.stdout.once("error", () => {
                    reject();
                });
            });
        }
        return Promise.resolve();
    }

    // The getmanifest call, all about us
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected _getmanifest(params?: unknown) {
        const opts = [];
        for (const name in this.options) {
            opts.push({
                name: name,
                type: this.options[name].type,
                default: this.options[name].default,
                description: this.options[name].description,
            });
        }
        const notifs = [];
        for (const name in this.notifications) {
            notifs.push(name);
        }
        const hooks = [];
        for (const name in this.hooks) {
            hooks.push(name);
        }
        return {
            options: opts,
            rpcmethods: this.methods.map(function (method) {
                return {
                    name: method.name,
                    usage: method.usage,
                    description: method.description,
                    long_description: method.longDescription,
                };
            }),
            subscriptions: notifs,
            hooks: hooks,
            dynamic: this.dynamic,
        };
    }

    // We are almost done Lightningd sends this once it receives our manifest.
    protected _init(params: InitParams) {
        const socketPath = path.join(
            params.configuration["lightning-dir"],
            params.configuration["rpc-file"]
        );
        this.rpc = new RpcClient(socketPath, !this._compatMode);
        for (const opt in params.options) {
            this.options[opt].value = params.options[opt];
        }
        //this.startup = params.configuration["startup"];
        this.onInit(params);
        // It's not interpreted by lightningd for now.
        return {};
    }

    protected async _writeJsonrpcNotification(method: string, params: unknown) {
        const payload = {
            jsonrpc: "2.0",
            method: method,
            params: params,
        };
        const notif = JSON.stringify(payload);
        await this._write(notif);
    }

    protected async _writeJsonrpcResponse(
        result: unknown,
        id: string | number,
        isError = false
    ) {
        const payload: {
      jsonrpc: "2.0";
      id: string | number;
      result?: unknown;
      error?: unknown;
    } = {
        jsonrpc: "2.0",
        id: id,
    };
        if (isError) payload.error = result;
        else payload.result = result;
        const response = JSON.stringify(payload);
        await this._write(response);
    }

    // Add a fresh JSONRPC method accessible from lightningd
    addMethod(
        name: string,
        callback: (params: unknown) => unknown,
        usage: string,
        description: string,
        longDescription: string
    ) {
        if (!name || !callback) {
            throw new Error(
                "You need to pass at least a name and a callback to register a method"
            );
        }
        const method = new RpcMethod(name, usage, description, longDescription);
        method.main = callback;
        this.methods.push(method);
    }

    // Add a startup option to lightningd
    addOption(name: string, defaultValue: unknown, description: string, type: string) {
        if (!name || defaultValue === null || !description) {
            throw new Error(
                "You need to pass at least a name, default value and description for the option"
            );
        }
        this.options[name] = {
            default: defaultValue,
            description: description,
            type: type || "string",
            value: defaultValue,
        };
    }

    // A hook is a notification which needs a response from our (plugin) side
    addHook(name: string, callback: () => Promise<unknown>) {
        this.hooks[name] = callback;
    }

    // Notifications are emitted as events
    subscribe(name: string) {
        this.notifications[name] = new Notification();
    }

    // To be overriden to do something special at startup
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onInit: (params: unknown) => unknown = () => {};

    // Send logs to lightningd's log
    log(message: string, level = "info") {
        if (!message || typeof message !== "string") {
            throw new Error(
                "You need to specify a string to write on lightningd's logs."
            );
        }
        message.split("\n").forEach((line) => {
            if (line) {
                void this._writeJsonrpcNotification("log", { level: level, message: line });
            }
        });
    }

    // Read from stdin and do what master (not Satoshi, lightningd!!) tells until
    // we die
    protected async _mainLoop() {
        let chunk;
        let msg: JSONRpcPayload;
        while ((chunk = process.stdin.read())) {
            // Ok so process.stdin.read() can actually return a chunk with multiple
            // lines.
            // FIXME: don't rely on lightningd's \n\n!
            const lines = chunk.split("\n\n");
            for (const i in lines) {
                if (!lines[i]) continue;
                try {
                    msg = JSON.parse(lines[i]);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (e: any) {
                    this.log(e.message, "error");
                    throw e;
                }
                // JSONRPC2 sanity checks
                if (!msg || !msg.method || msg.jsonrpc !== "2.0") {
                    this.log("Got bad JSONRPC2", "error");
                    throw new Error("Bad JSONRPC(2)!");
                }
                if (!msg.id && msg.method in this.notifications) {
                    this.notifications[msg.method].emit(msg.method, msg.params);
                }
                if (msg.method === "getmanifest") {
                    await this._writeJsonrpcResponse(
                        this._getmanifest(msg.params),
                        msg.id
                    );
                    continue;
                }
                if (msg.method === "init") {
                    await this._writeJsonrpcResponse(this._init(msg.params as InitParams), msg.id);
                    continue;
                }
                if (msg.method in this.hooks) {
                    void Promise.resolve(this.hooks[msg.method](msg.params)).then(
                        async (response) => {
                            await this._writeJsonrpcResponse(response, msg.id);
                        }
                    );
                    continue;
                }
                this.methods.forEach(async (m) => {
                    if (m.name === msg.method) {
                        try {
                            const response = await m.main(msg.params);
                            await this._writeJsonrpcResponse(response, msg.id);
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        } catch (error: any) {
                            await this._writeJsonrpcResponse(
                                { code: -32603, message: error.message },
                                msg.id,
                                true
                            );
                        }
                    }
                });
            }
        }
    }

    // Start plugining
    start() {
        process.stdin.setEncoding("utf8");
        process.stdin.on("readable", () => {
            void this._mainLoop();
        });
    }
}
