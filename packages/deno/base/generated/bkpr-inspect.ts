/**
 * lightning-bkpr-inspect -- Command to show onchain footprint of a channel
 *
 * **bkpr-inspect** *account*
 *
 */

/**
 * The **bkpr-inspect** RPC command lists all known on-chain transactions and
 * associated events for the provided account. Useful for inspecting unilateral
 * closes for a given channel account. Only valid for channel accounts.
 */
export interface BkprInspectRequest {
  account: /* GUESSED */ string;
}

export interface BkprInspectResponse {
  txs: Tx[];
}

export interface Tx {
  /**
   * Blockheight of transaction
   */
  blockheight?: number;
  /**
   * Amount paid in sats for this tx
   */
  fees_paid_msat: number;
  outputs: Output[];
  /**
   * transaction id
   */
  txid: string;
}

export interface Output {
  /**
   * Account this output affected
   */
  account: string;
  /**
   * Amount credited to account
   */
  credit_msat?: number;
  /**
   * human-readable bech32 part for this coin type
   */
  currency: string;
  /**
   * Amount debited from account
   */
  debit_msat?: number;
  /**
   * Account this output originated from
   */
  originating_account?: string;
  /**
   * Index of output
   */
  outnum: number;
  /**
   * Description of output creation event
   */
  output_tag?: string;
  /**
   * Value of the output
   */
  output_value_msat: number;
  /**
   * lightning payment identifier. For an htlc, this will be the preimage.
   */
  payment_id?: string;
  /**
   * Description of output spend event
   */
  spend_tag?: string;
  /**
   * Transaction this output was spent in
   */
  spending_txid?: string;
}
