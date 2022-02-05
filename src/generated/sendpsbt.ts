/**
 * lightning-sendpsbt -- Command to finalize, extract and send a partially signed bitcoin transaction (PSBT).
 * 
 * **sendpsbt** *psbt* \[*reserve*\] 
 * 
 */

/**
 * The **sendpsbt** is a low-level RPC command which sends a fully-signed PSBT.
 * 
 * - *psbt*: A string that represents psbt value.
 * - *reserve*: an optional number of blocks to increase reservation of any of our inputs by; default is 72.
 * 
 * EXAMPLE JSON REQUEST
 * --------------------
 * 
 * ```json
 * {
 *   "id": 82,
 *   "method": "sendpsbt",
 *   "params": {
 *     "psbt": "some_psbt"
 *   }
 * }
 * ```
*/
export interface SendpsbtRequest {
  psbt: /* GUESSED */ string;
  reserve?: /* GUESSED */ string;
}

export interface SendpsbtResponse {
    /**
     * The raw transaction which was sent
     */
    tx: string;
    /**
     * The txid of the **tx**
     */
    txid: string;
}

