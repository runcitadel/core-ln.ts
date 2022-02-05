/**
 * lightning-signpsbt -- Command to sign a wallet's inputs on a provided bitcoin transaction (PSBT).
 * 
 * **signpsbt** *psbt* \[*signonly*\] 
 * 
 */

/**
 * **signpsbt** is a low-level RPC command which signs a PSBT as defined by
 * BIP-174.
 * 
 * - *psbt*: A string that represents the PSBT value.
 * - *signonly*: An optional array of input numbers to sign.
 * 
 * By default, all known inputs are signed, and others ignored: with
 * *signonly*, only those inputs are signed, and an error is returned if
 * one of them cannot be signed.
 * 
 * Note that the command will fail if there are no inputs to sign, or
 * if the inputs to be signed were not previously reserved.
 * 
 * 
 * EXAMPLE JSON REQUEST
 * --------------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "signpsbt",
 *   "params": {
 *     "psbt": "some_psbt"
 *   }
 * }
 * ```
*/
export interface SignpsbtRequest {
  psbt: /* GUESSED */ string;
  signonly?: /* GUESSED */ string;
}

export interface SignpsbtResponse {
    /**
     * The fully signed PSBT
     */
    signed_psbt: string;
}

