export interface RpcRequestBody {
  /** The method to execute */
  method: string;
  /** Comma separated array or a json with key-value pairs for optional params */
  params: any;
}

export interface RpcResponse {}
