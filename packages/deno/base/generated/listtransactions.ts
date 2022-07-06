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
export interface ListtransactionsRequest {}

export interface ListtransactionsResponse {
  transactions: Transaction[];
}

export interface Transaction {
  /**
   * the block height of this tx
   */
  blockheight: number;
  /**
   * the channel this transaction is associated with (*EXPERIMENTAL_FEATURES* only)
   */
  channel?: string;
  /**
   * the transaction id
   */
  hash: string;
  /**
   * Each input, in order
   */
  inputs: Input[];
  /**
   * The nLocktime for this tx
   */
  locktime: number;
  /**
   * Each output, in order
   */
  outputs: Output[];
  /**
   * the raw transaction
   */
  rawtx: string;
  /**
   * the transaction number within the block
   */
  txindex: number;
  type?: Type[];
  /**
   * The nVersion for this tx
   */
  version: number;
}

export interface Input {
  /**
   * the channel this input is associated with (*EXPERIMENTAL_FEATURES* only)
   */
  channel?: string;
  /**
   * the output spent
   */
  index: number;
  /**
   * the nSequence value
   */
  sequence: number;
  /**
   * the transaction id spent
   */
  txid: string;
  /**
   * the purpose of this input (*EXPERIMENTAL_FEATURES* only)
   */
  type?: Type;
}

/**
 * the purpose of this input (*EXPERIMENTAL_FEATURES* only)
 *
 * the purpose of this output (*EXPERIMENTAL_FEATURES* only)
 *
 * Reason we care about this transaction (*EXPERIMENTAL_FEATURES* only)
 */
export enum Type {
  ChannelFunding = "channel_funding",
  ChannelHtlcSuccess = "channel_htlc_success",
  ChannelHtlcTimeout = "channel_htlc_timeout",
  ChannelMutualClose = "channel_mutual_close",
  ChannelPenalty = "channel_penalty",
  ChannelSweep = "channel_sweep",
  ChannelUnilateralCheat = "channel_unilateral_cheat",
  ChannelUnilateralClose = "channel_unilateral_close",
  Deposit = "deposit",
  Theirs = "theirs",
  Withdraw = "withdraw",
}

export interface Output {
  /**
   * the channel this output is associated with (*EXPERIMENTAL_FEATURES* only)
   */
  channel?: string;
  /**
   * the 0-based output number
   */
  index: number;
  /**
   * the amount of the output
   */
  msat: bigint;
  /**
   * the scriptPubKey
   */
  scriptPubKey: string;
  /**
   * the purpose of this output (*EXPERIMENTAL_FEATURES* only)
   */
  type?: Type;
}
