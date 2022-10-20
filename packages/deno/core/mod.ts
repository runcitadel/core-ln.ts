import ApiClient, {
  transform,
} from "https://deno.land/x/core_ln_base@v0.3.4/mod.ts";

/**
 * An API client for Core Lightning over an unix socket
 *
 * Doesn't require a Core Lightning plugin, but doesn't work in web apps
 */export default class SocketApiClient extends ApiClient {
  #connection: Deno.UnixConn | null = null;
  #connectionPromise: Promise<Deno.UnixConn> | null;
  #requests = 0;
  constructor(
    private _socketPath: string
  ) {
    super();
    this.#connectionPromise = Deno.connect({
      transport: "unix",
      path: _socketPath,
    });
  }

  async _connectClient() {
    if (this.#connectionPromise) {
      this.#connection = await this.#connectionPromise;
    } else {
      this.#connection = await Deno.connect({
        transport: "unix",
        path: this._socketPath,
      });
    }
  }

  async disconnectClient() {
    await this.#connection?.close();
    this.#connection = null;
  }

  async call<ReturnType extends unknown = unknown>(method: string, params: unknown, bufferSize = 32 * 1024): Promise<ReturnType> {
    this.#requests++;
    if (!this.#connection) {
      await this._connectClient();
    }
    const id = this.#requests;
    await this.#connection!.write(
      new TextEncoder().encode(
        JSON.stringify({
          jsonrpc: "2.0",
          id,
          method,
          params,
        }) + "\r\n",
      ),
    );
    const buffer = new Uint8Array(bufferSize);
    const read = await this.#connection!.read(buffer);
    const content = buffer.slice(0, read!);
    const data = JSON.parse(new TextDecoder().decode(content!));
    if (data.id !== id) {
      throw new Error("Response id does not match request ID!");
    }
    return transform(data.result);
  }
}

export * from "https://deno.land/x/core_ln_base@v0.3.4/mod.ts";
