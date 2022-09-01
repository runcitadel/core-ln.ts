/**
 * lightning-bkpr-channelsapy -- Command to list stats on channel earnings
 *
 * **bkpr-channelsapy** [*start_time*] [*end_time*]
 *
 */

/**
 * The **bkpr-channelsapy** RPC command lists stats on routing income, leasing income,
 * and various calculated APYs for channel routed funds.
 *
 * The **start_time** is a UNIX timestamp (in seconds) that filters events after the provided timestamp. Defaults to zero.
 *
 * The **end_time** is a UNIX timestamp (in seconds) that filters events up to and at the provided timestamp. Defaults to max-int.
 *
 */
export interface BkprChannelsapyRequest {
  start_time?: string | number;
  end_time?: string | number;
}

export interface BkprChannelsapyResponse {
  channels_apy: ChannelsApy[];
}

export interface ChannelsApy {
  /**
   * The account name. If the account is a channel, the channel_id. The 'net' entry is the
   * rollup of all channel accounts
   */
  account: string;
  /**
   * Fees earned on inbound routed payments / total start balance for the length of time this
   * channel has been open amortized to a year (APY)
   */
  apy_in: string;
  /**
   * Fees earned on inbound routed payments / our start balance for the length of time this
   * channel has been open amortized to a year (APY)
   */
  apy_in_initial?: string;
  /**
   * Lease fees earned over total amount leased for the lease term, amortized to a year (APY).
   * Only appears if channel was leased out by us
   */
  apy_lease?: string;
  /**
   * Fees earned on outbound routed payments / total start balance for the length of time this
   * channel has been open amortized to a year (APY)
   */
  apy_out: string;
  /**
   * Fees earned on outbound routed payments / our start balance for the length of time this
   * channel has been open amortized to a year (APY)
   */
  apy_out_initial?: string;
  /**
   * Total fees earned on routed payments / total start balance for the length of time this
   * channel has been open amortized to a year (APY)
   */
  apy_total: string;
  /**
   * Total fees earned on routed payments / our start balance for the length of time this
   * channel has been open amortized to a year (APY)
   */
  apy_total_initial?: string;
  /**
   * Total starting balance at funding
   */
  channel_start_balance_msat: number;
  /**
   * Fees earned on routed inbound
   */
  fees_in_msat?: number;
  /**
   * Fees earned on routed outbound
   */
  fees_out_msat: number;
  /**
   * Sats earned for leasing outbound (liquidity ads)
   */
  lease_fee_earned_msat: number;
  /**
   * Sats paid for leasing inbound (liquidity ads)
   */
  lease_fee_paid_msat: number;
  /**
   * Starting balance in channel at funding. Note that if our start ballance is zero, any
   * _initial field will be omitted (can't divide by zero)
   */
  our_start_balance_msat: number;
  /**
   * Sats pushed in from peer at open
   */
  pushed_in_msat: number;
  /**
   * Sats pushed to peer at open
   */
  pushed_out_msat: number;
  /**
   * Sats routed (inbound)
   */
  routed_in_msat: number;
  /**
   * Sats routed (outbound)
   */
  routed_out_msat: number;
  /**
   * Sats routed inbound / total start balance
   */
  utilization_in: string;
  /**
   * Sats routed inbound / our start balance
   */
  utilization_in_initial?: string;
  /**
   * Sats routed outbound / total start balance
   */
  utilization_out: string;
  /**
   * Sats routed outbound / our start balance
   */
  utilization_out_initial?: string;
}
