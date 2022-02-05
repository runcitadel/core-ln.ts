/**
 * lightning-listtransactions -- Command to get the list of transactions that was stored in the wallet.
 * 
 * **listtransactions** 
 * 
 */

/**
 * The **listtransactions** command returns transactions tracked in the wallet. This includes deposits, withdrawals and transactions related to channels. A transaction may have multiple types, e.g., a transaction may both be a close and a deposit if it closes the channel and returns funds to the wallet.
 * 
 * EXAMPLE JSON REQUEST
 * ------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "listtransactions",
 *   "params": {}
 * }
 * ```
*/
export interface ListtransactionsRequest {
}

export interface ListtransactionsResponse {
  transactions: {
    /**
     * the transaction id
     */
    hash: /* txid */ string;
    /**
     * the raw transaction
     */
    rawtx: /* hex */ string;
    /**
     * the block height of this tx
     */
    blockheight: /* u32 */ number;
    /**
     * the transaction number within the block
     */
    txindex: /* u32 */ number;
    type?: (
      | "theirs"
      | "deposit"
      | "withdraw"
      | "channel_funding"
      | "channel_mutual_close"
      | "channel_unilateral_close"
      | "channel_sweep"
      | "channel_htlc_success"
      | "channel_htlc_timeout"
      | "channel_penalty"
      | "channel_unilateral_cheat"
    )[];
    /**
     * the channel this transaction is associated with (*EXPERIMENTAL_FEATURES* only)
     */
    channel?: /* short_channel_id */ string;
    /**
     * The nLocktime for this tx
     */
    locktime: /* u32 */ number;
    /**
     * The nVersion for this tx
     */
    version: /* u32 */ number;
    /**
     * Each input, in order
     */
    inputs: {
      /**
       * the transaction id spent
       */
      txid: /* txid */ string;
      /**
       * the output spent
       */
      index: /* u32 */ number;
      /**
       * the nSequence value
       */
      sequence: /* u32 */ number;
      /**
       * the purpose of this input (*EXPERIMENTAL_FEATURES* only)
       */
      type?:
        | "theirs"
        | "deposit"
        | "withdraw"
        | "channel_funding"
        | "channel_mutual_close"
        | "channel_unilateral_close"
        | "channel_sweep"
        | "channel_htlc_success"
        | "channel_htlc_timeout"
        | "channel_penalty"
        | "channel_unilateral_cheat";
      /**
       * the channel this input is associated with (*EXPERIMENTAL_FEATURES* only)
       */
      channel?: /* short_channel_id */ string;
    }[];
    /**
     * Each output, in order
     */
    outputs: {
      /**
       * the 0-based output number
       */
      index: /* u32 */ number;
      satoshis?: {
        [k: string]: unknown;
      };
      /**
       * the amount of the output
       */
      msat: /* msat */ number;
      /**
       * the scriptPubKey
       */
      scriptPubKey: /* hex */ string;
      /**
       * the purpose of this output (*EXPERIMENTAL_FEATURES* only)
       */
      type?:
        | "theirs"
        | "deposit"
        | "withdraw"
        | "channel_funding"
        | "channel_mutual_close"
        | "channel_unilateral_close"
        | "channel_sweep"
        | "channel_htlc_success"
        | "channel_htlc_timeout"
        | "channel_penalty"
        | "channel_unilateral_cheat";
      /**
       * the channel this output is associated with (*EXPERIMENTAL_FEATURES* only)
       */
      channel?: /* short_channel_id */ string;
    }[];
  }[];
}

