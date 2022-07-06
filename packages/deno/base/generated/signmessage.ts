/**
 * lightning-signmessage -- Command to create a signature from this node
 *
 * **signmessage** *message*
 *
 */

/**
 * The **signmessage** RPC command creates a digital signature of
 * *message* using this node's secret key.  A receiver who knows your
 * node's *id* and the *message* can be sure that the resulting signature could
 * only be created by something with access to this node's secret key.
 *
 * *message* must be less that 65536 characters.
 */
export interface SignmessageRequest {
  message: /* GUESSED */ string;
}

export interface SignmessageResponse {
  /**
   * The recovery id (0, 1, 2 or 3)
   */
  recid: string;
  /**
   * The signature
   */
  signature: string;
  /**
   * *signature* and *recid* encoded in a style compatible with **lnd**'s
   * [SignMessageRequest](https://api.lightning.community/#grpc-request-signmessagerequest)
   */
  zbase: string;
}
