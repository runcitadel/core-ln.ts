/**
 * lightning-sendcustommsg -- Low-level interface to send protocol messages to peers
 * 
 * **sendcustommsg** *node_id* *msg* 
 * 
 */

/**
 * The `sendcustommsg` RPC method allows the user to inject a custom message
 * into the communication with the peer with the given `node_id`. This is
 * intended as a low-level interface to implement custom protocol extensions on
 * top, not for direct use by end-users.
 * 
 * The message must be a hex encoded well-formed message, including the 2-byte
 * type prefix, but excluding the length prefix which will be added by the RPC
 * method. The messages must not use even-numbered types, since these may require
 * synchronous handling on the receiving side, and can cause the connection to be
 * dropped. The message types may also not use one of the internally handled
 * types, since that may cause issues with the internal state tracking of
 * c-lightning.
 * 
 * The node specified by `node_id` must be a peer, i.e., it must have a direct
 * connection with the node receiving the RPC call, and the connection must be
 * established. For a method to send arbitrary messages over multiple hops,
 * including hops that do not understand the custom message, see the
 * `createonion` and `sendonion` RPC methods. Messages can only be injected if
 * the connection is handled by `openingd` or `channeld`. Messages cannot be
 * injected when the peer is handled by `onchaind` or `closingd` since these do
 * not have a connection, or are synchronous daemons that do not handle
 * spontaneous messages.
 * 
 * On the reveiving end a plugin may implement the `custommsg` plugin hook and
 * get notified about incoming messages.
*/
export interface SendcustommsgRequest {
  node_id: /* GUESSED */ string;
  msg: /* GUESSED */ string;
}

export interface SendcustommsgResponse {
    /**
     * Information about where message was queued
     */
    status: string;
}

