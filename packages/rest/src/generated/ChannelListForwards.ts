export interface ChannelListForwardsRequestQuery {
  /** status can be either "offered" or "settled" or "failed" or "local_failed" */
  status: string;
}

export interface ChannelListForwardsResponse {
  /** in_channel */
  in_channel?: string;
  /** in_msat */
  in_msat?: string;
  /** one of "offered", "settled", "local_failed", "failed" */
  status?: string;
  /** the UNIX timestamp when this was received */
  received_time?: string;
  /** the channel that the HTLC was forwarded to */
  out_channel?: string;
  /** payment hash sought by HTLC (always 64 characters) */
  payment_hash?: string;
  /** If out_channel is present, the amount this paid in fees */
  fee_msat?: string;
  /** If out_channel is present, the amount we sent out the out_channel */
  out_msat?: string;
  /** If status is "settled" or "failed", the UNIX timestamp when this was resolved */
  resolved_time?: string;
  /** If status is "local_failed" or "failed", the numeric onion code returned */
  failcode?: string;
  /** If status is "local_failed" or "failed", the name of the onion code returned */
  failreason?: string;
}
