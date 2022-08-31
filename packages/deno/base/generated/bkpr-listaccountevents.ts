/**
 * lightning-bkpr-listaccountevents -- Command for listing recorded bookkeeping events
 *
 * **bkpr-listaccountevents** [*account*]
 *
 */

/**
 * The **bkpr-listaccountevents** RPC command is a list of all bookkeeping events that have been recorded for this node.
 *
 * If the optional parameter **account** is set, we only emit events for the
 * specified account, if exists.
 *
 * Note that the type **onchain_fees** that are emitted are of opposite credit/debit than as they appear in **listincome**, as **listincome** shows all events from the perspective of the node, whereas **listaccountevents** just dumps the event data as we've got it. Onchain fees are updated/recorded as we get more information about input and output spends -- the total onchain fees that were recorded for a transaction for an account can be found by summing all onchain fee events and taking the difference between the **credit_msat** and **debit_msat** for these events. We do this so that successive calls to **listaccountevents** always
 * produce the same list of events -- no previously emitted event will be
 * subsequently updated, rather we add a new event to the list.
 *
 */
export interface BkprListaccounteventsRequest {
  account?: /* GUESSED */ string;
}

export interface BkprListaccounteventsResponse {
  events: Event[];
}

export interface Event {
  /**
   * The account name. If the account is a channel, the channel_id
   */
  account: string;
  /**
   * Amount credited
   */
  credit_msat: number;
  /**
   * human-readable bech32 part for this coin type
   */
  currency: string;
  /**
   * Amount debited
   */
  debit_msat: number;
  /**
   * Description of movement
   */
  tag: string;
  /**
   * Timestamp this event was recorded by the node. For consolidated events such as
   * onchain_fees, the most recent timestamp
   */
  timestamp: number;
  /**
   * Coin movement type
   */
  type: Type;
}

/**
 * Coin movement type
 */
export enum Type {
  Chain = "chain",
  Channel = "channel",
  OnchainFee = "onchain_fee",
}
