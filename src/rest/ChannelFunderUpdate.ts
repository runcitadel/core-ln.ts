export interface ChannelFunderUpdateRequestBody {
  /** How much capital to commit to a v2 open channel request. e.g. match/available/fixed */
  policy: string;
  /** The policy_mod is the number or 'modification' to apply to the policy */
  policy_mod: string;
  /** will only contribute funds to option_will_fund requests which pay to lease funds. Default to false */
  leases_only: boolean;
  /** Min funding sats that we require in order to activate our contribution policy to the v2 open. Defaults to 10k sats */
  min_their_funding_msat: string;
  /** Any channel open above this will not be funded */
  max_their_funding_msat: string;
  /** Min amount that we will contribute to a channel open. Defaults to 10k sats */
  per_channel_min_msat: string;
  /** Max amount that we will contribute to a channel open */
  per_channel_max_msat: string;
  /** Amount of sats to leave available in the node wallet. Defaults to zero sats. */
  reserve_tank_msat: string;
  /** Percentage to fuzz the resulting contribution amount by. Valid values are 0 to 100. Default 0 */
  fuzz_percent: string;
  /** Percentage of v2 channel open requests to apply our policy to. Valid values are 0 to 100. Default 100 */
  fund_probability: string;
  /** Flat fee for a channel lease. Defaults to 2k sats */
  lease_fee_base_msat: string;
  /** Basis fee that's calculated as 1/10k of the total requested funds the peer is asking for. Defaults to 65 bp */
  lease_fee_basis: string;
  /** used to calculate the fee the peer will compensate your node for its contributing inputs to the funding transaction. Default is 2 inputs + 1 P2WPKH output */
  funding_weight: string;
  /** Commitment to a max base fee that your node will charge for routing payments. Default is 5k sats */
  channel_fee_max_base_msat: string;
  /** Commitment to a max fee rate that your node will charge for routing payments. Default is 100k ppm */
  channel_fee_max_proportional_thousandths: string;
  /** Compact description of the channel lease params */
  compact_lease: string;
}

export interface ChannelFunderUpdateResponse {
  /** Summary of the current funding policy */
  summary?: string;
  /** policy */
  policy?: string;
  /** policy_mod */
  policy_mod?: string;
  /** leases_only */
  leases_only?: string;
  /** min_their_funding_msat */
  min_their_funding_msat?: string;
  /** max_their_funding_msat */
  max_their_funding_msat?: string;
  /** per_channel_min_msat */
  per_channel_min_msat?: string;
  /** per_channel_max_msat */
  per_channel_max_msat?: string;
  /** reserve_tank_msat */
  reserve_tank_msat?: string;
  /** fuzz_percent */
  fuzz_percent?: string;
  /** fund_probability */
  fund_probability?: string;
  /** lease_fee_base_msat */
  lease_fee_base_msat?: string;
  /** lease_fee_basis */
  lease_fee_basis?: string;
  /** funding_weight */
  funding_weight?: string;
  /** channel_fee_max_base_msat */
  channel_fee_max_base_msat?: string;
  /** channel_fee_max_proportional_thousandths */
  channel_fee_max_proportional_thousandths?: string;
  /** compact_lease */
  compact_lease?: string;
}
