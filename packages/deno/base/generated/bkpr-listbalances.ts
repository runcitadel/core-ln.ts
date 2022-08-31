/**
 * lightning-bkpr-listbalances -- Command for listing current channel + wallet balances
 *
 * **bkpr-listbalances**
 *
 */

/**
 * The **bkpr-listbalances** RPC command is a list of all current and historical account balances. An account is either the on-chain *wallet* or a channel balance.
 * Any funds sent to an *external* account will not be accounted for here.
 *
 * Note that any channel that was recorded will be listed. Closed channel balances
 * will be 0msat.
 */
export interface BkprListbalancesRequest {}

export interface BkprListbalancesResponse {
  accounts: Account[];
}

export interface Account {
  /**
   * The account name. If the account is a channel, the channel_id
   */
  account: string;
  balances: Balance[];
}

export interface Balance {
  /**
   * Current account balance
   */
  balance_msat: number;
  /**
   * coin type, same as HRP for bech32
   */
  coin_type: string;
}
