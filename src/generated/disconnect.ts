/**
 * lightning-disconnect -- Command for disconnecting from another lightning node
 * 
 * **disconnect** *id* \[*force*\] 
 * 
 */

/**
 * The disconnect RPC command closes an existing connection to a peer,
 * identified by *id*, in the Lightning Network, as long as it doesn't have
 * an active channel. If *force* is set then it will disconnect even with
 * an active channel.
 * 
 * The *id* can be discovered in the output of the listpeers command, which
 * returns a set of peers:
 * 
 *     {
 *          "peers": [
 *               {
 *                    "id": "0563aea81...",
 *                    "connected": true,
 *                    ...
 *               }
 *          ]
 *     }
 * 
 * Passing the *id* attribute of a peer to *disconnect* will terminate the
 * connection.
*/
export interface DisconnectRequest {
  id: string;
  force?: boolean;
}

export interface DisconnectResponse {}

