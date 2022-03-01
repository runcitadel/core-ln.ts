import ApiClient, { transform, transformMap } from "./generated/main.js";
import { createConnection, type Socket } from "net";
// @ts-expect-error No type definition for this yet
import JSONParser from 'jsonparse';

/**
 * An API client for c-lightning over an unix socket
 * 
 * Doesn't require a c-lightning plugin, but doesn't work in web apps
 */
export default class SocketApiClient extends ApiClient {
    private _reconnectWait = 0.5;
    private _client: Socket;
    private _reqcount = 0;
    private _parser: any;
    private _reconnectTimeout: NodeJS.Timeout | null = null;
    private _clientConnectionPromise: Promise<void>;
    constructor(private _socketPath: string, private _transform = true) {
        super();
        this._reconnectWait = 0.5;
        this._reconnectTimeout = null;
        this._parser = new JSONParser();

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const _self = this;

        this._client = createConnection(_socketPath);
        this._clientConnectionPromise = new Promise(resolve => {
            this._client.on('connect', () => {
                this._reconnectWait = 1;
                resolve();
            });

            this._client.on('end', () => {
                this.increaseWaitTime();
                this.reconnect();
            });

            this._client.on('error', error => {
                this.emit('error', error);
                this.increaseWaitTime();
                this.reconnect();
            });
        });

        this._client.on('data', (data) => _self._handledata(data));

        this._parser.onValue = function(val: any) {
            if (this.stack.length) return; // top-level objects only
            _self.emit('res:' + val.id, val);
        };
    }

    increaseWaitTime() {
        if (this._reconnectWait >= 16) {
            this._reconnectWait = 16;
        } else {
            this._reconnectWait *= 2;
        }
    }

    reconnect() {
        if (this._reconnectTimeout) {
            return;
        }

        this._reconnectTimeout = setTimeout(() => {
            this._client.connect(this._socketPath);
            this._reconnectTimeout = null;
        }, this._reconnectWait * 1000);
    }

    call<ReturnType>(method: string, params: unknown): Promise<ReturnType> {
        const callInt = ++this._reqcount;
        const sendObj = {
            jsonrpc: "2.0",
            method,
            params,
            id: `${callInt}`
        };

        // Wait for the client to connect
        return this._clientConnectionPromise
            .then(() => new Promise((resolve, reject) => {
                // Send the command
                this._client.write(JSON.stringify(sendObj));

                // Wait for a response
                this.once('res:' + callInt, res => res.error == null
                    ? resolve(this._transform ? transform<ReturnType>(res.result, transformMap[method]) : res.result)
                    : reject(res.error)
                );
            }));
    }

    private _handledata(data: unknown) {
        this._parser.write(data);
    }

}