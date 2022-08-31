/**
 * lightning-bkpr-listincome -- Command for listing all income impacting events
 *
 * **bkpr-listincome** [*consolidate_fees*] [*start_time*] [*end_time*]
 *
 */

/**
 * The **bkpr-listincome** RPC command is a list of all income impacting events that the bookkeeper plugin has recorded for this node.
 *
 * If **consolidate_fees** is true, we emit a single, consolidated event for
 * any onchain-fees for a txid and account. Otherwise, events for every update to
 * the onchain fee calculation for this account and txid will be printed. Defaults to true. Note that this means that the events emitted are non-stable,
 * i.e. calling **listincome** twice may result in different onchain fee events
 * being emitted, depending on how much information we've logged for that
 * transaction.
 *
 * The **start_time** is a UNIX timestamp (in seconds) that filters events after the provided timestamp. Defaults to zero.
 *
 * The **end_time** is a UNIX timestamp (in seconds) that filters events up to and at the provided timestamp. Defaults to max-int.
 */
export interface BkprListincomeRequest {
  consolidate_fees?: /* GUESSED */ string;
  start_time?: /* GUESSED */ string;
  end_time?: /* GUESSED */ string;
}

export interface BkprListincomeResponse {
  income_events: IncomeEvent[];
}

export interface IncomeEvent {
  /**
   * The account name. If the account is a channel, the channel_id
   */
  account: string;
  /**
   * Amount earned (income)
   */
  credit_msat: number;
  /**
   * human-readable bech32 part for this coin type
   */
  currency: string;
  /**
   * Amount spent (expenses)
   */
  debit_msat: number;
  /**
   * More information about this event. If a `invoice` type, typically the bolt11/bolt12
   * description
   */
  description?: string;
  /**
   * The txid:outnum for this event, if applicable
   */
  outpoint?: string;
  /**
   * lightning payment identifier. For an htlc, this will be the preimage.
   */
  payment_id?: string;
  /**
   * Type of income event
   */
  tag: string;
  /**
   * Timestamp this event was recorded by the node. For consolidated events such as
   * onchain_fees, the most recent timestamp
   */
  timestamp: number;
  /**
   * The txid of the transaction that created this event, if applicable
   */
  txid?: string;
}
