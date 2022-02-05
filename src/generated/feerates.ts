/**
 * lightning-feerates -- Command for querying recommended onchain feerates
 * 
 * **feerates** *style* 
 * 
 */

/**
 * The **feerates** command returns the feerates that C-lightning will use.
 * The feerates will be based on the recommended feerates from the backend.
 * The backend may fail to provide estimates, but if it was able to provide
 * estimates in the past, C-lightning will continue to use those for a while.
 * C-lightning will also smoothen feerate estimations from the backend.
 * 
 * *style* is either of the two strings:
 * 
 * * *perkw* - provide feerate in units of satoshis per 1000 weight.
 * * *perkb* - provide feerate in units of satoshis per 1000 virtual bytes.
 * 
 * Bitcoin transactions have non-witness and witness bytes:
 * 
 * * Non-witness bytes count as 4 weight, 1 virtual byte.
 *   All bytes other than SegWit witness count as non-witness bytes.
 * * Witness bytes count as 1 weight, 0.25 virtual bytes.
 * 
 * Thus, all *perkb* feerates will be exactly 4 times *perkw* feerates.
 * 
 * To compute the fee for a transaction, multiply its weight or virtual bytes
 * by the appropriate *perkw* or *perkw* feerate
 * returned by this command,
 * then divide by 1000.
 * 
 * There is currently no way to change these feerates from the RPC.
 * If you need custom control over onchain feerates,
 * you will need to provide your own plugin
 * that replaces the `bcli` plugin backend.
 * For commands like lightning-withdraw(7) or lightning-fundchannel(7) you
 * can provide a preferred feerate directly as a parameter,
 * which will override the recommended feerates returned by **feerates**.
*/
export interface FeeratesRequest {
  style: "perkw" | "perkb";
}

export interface FeeratesResponse {
  /**
   * Some fee estimates are missing
   */
  warning_missing_feerates?: string;
  /**
   * If *style* parameter was perkb
   */
  perkb?: {
    /**
     * The smallest feerate that you can use, usually the minimum relayed feerate of the backend
     */
    min_acceptable: /* u32 */ number;
    /**
     * The largest feerate we will accept from remote negotiations.  If a peer attempts to set the feerate higher than this we will unilaterally close the channel (or simply forget it if it's not open yet).
     */
    max_acceptable: /* u32 */ number;
    /**
     * Default feerate for lightning-fundchannel(7) and lightning-withdraw(7)
     */
    opening?: /* u32 */ number;
    /**
     * Feerate to aim for in cooperative shutdown.  Note that since mutual close is a **negotiation**, the actual feerate used in mutual close will be somewhere between this and the corresponding mutual close feerate of the peer.
     */
    mutual_close?: /* u32 */ number;
    /**
     * Feerate for commitment_transaction in a live channel which we originally funded
     */
    unilateral_close?: /* u32 */ number;
    /**
     * Feerate for returning unilateral close funds to our wallet
     */
    delayed_to_us?: /* u32 */ number;
    /**
     * Feerate for returning unilateral close HTLC outputs to our wallet
     */
    htlc_resolution?: /* u32 */ number;
    /**
     * Feerate to start at when penalizing a cheat attempt
     */
    penalty?: /* u32 */ number;
  };
  /**
   * If *style* parameter was perkw
   */
  perkw?: {
    /**
     * The smallest feerate that you can use, usually the minimum relayed feerate of the backend
     */
    min_acceptable: /* u32 */ number;
    /**
     * The largest feerate we will accept from remote negotiations.  If a peer attempts to set the feerate higher than this we will unilaterally close the channel (or simply forget it if it's not open yet).
     */
    max_acceptable: /* u32 */ number;
    /**
     * Default feerate for lightning-fundchannel(7) and lightning-withdraw(7)
     */
    opening?: /* u32 */ number;
    /**
     * Feerate to aim for in cooperative shutdown.  Note that since mutual close is a **negotiation**, the actual feerate used in mutual close will be somewhere between this and the corresponding mutual close feerate of the peer.
     */
    mutual_close?: /* u32 */ number;
    /**
     * Feerate for commitment_transaction in a live channel which we originally funded
     */
    unilateral_close?: /* u32 */ number;
    /**
     * Feerate for returning unilateral close funds to our wallet
     */
    delayed_to_us?: /* u32 */ number;
    /**
     * Feerate for returning unilateral close HTLC outputs to our wallet
     */
    htlc_resolution?: /* u32 */ number;
    /**
     * Feerate to start at when penalizing a cheat attempt
     */
    penalty?: /* u32 */ number;
  };
  onchain_fee_estimates?: {
    /**
     * Estimated cost of typical channel open
     */
    opening_channel_satoshis: /* u64 */ number;
    /**
     * Estimated cost of typical channel close
     */
    mutual_close_satoshis: /* u64 */ number;
    /**
     * Estimated cost of typical unilateral close (without HTLCs)
     */
    unilateral_close_satoshis: /* u64 */ number;
    /**
     * Estimated cost of typical HTLC timeout transaction
     */
    htlc_timeout_satoshis: /* u64 */ number;
    /**
     * Estimated cost of typical HTLC fulfillment transaction
     */
    htlc_success_satoshis: /* u64 */ number;
  };
}

