/**
 * lightning-ping -- Command to check if a node is up.
 * 
 * **ping** *id* \[*len*\] \[*pongbytes*\] 
 * 
 */

/**
 * The **ping** command checks if the node with *id* is ready to talk. 
 * It currently only works for peers we have a channel with.
 * 
 * It accepts the following parameters:
 * 
 * - *id*: A string that represents the node id;
 * - *len*: A integer that represents the length of the ping (default 128);
 * - *pongbytes*: An integer that represents the length of the reply (default 128).
 *   A value of 65532 to 65535 means "don't reply".
 * 
 * EXAMPLE JSON REQUEST
 * ------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "ping",
 *   "params": {
 *     "len": 128,
 *     "pongbytes": 128
 *   }
 * }
 * ```
*/
export interface PingRequest {
  id: /* GUESSED */ string;
  len?: /* GUESSED */ string;
  pongbytes?: /* GUESSED */ string;
}

export interface PingResponse {
  /**
   * the answer length of the reply message (including header: 0 means no reply expected)
   */
  totlen: /* u16 */ number;
}

