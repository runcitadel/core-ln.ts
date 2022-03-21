export interface ChannelListForwardsFilterRequestQuery {
  /** if true offset is from the end, else from the start */
  reverse: boolean;
  /** amount of forwards you want to skip from the list, from start if reverse is false, from end if reverse is true. */
  offset: number;
  /** maximum range after the offset you want to forward. */
  maxLen: number;
}

export interface ChannelListForwardsFilterResponse {
  /** starting index of the subarray */
  firstIndexOffset?: number;
  /** last index of the subarray */
  lastIndexOffset?: number;
  /** forwarded htlcs */
  listForwards?: {
    /** the channel that received the HTLC */
    in_channel?: string;
    /** the value of the incoming HTLC */
    in_msat?: string;
    /** still ongoing, completed, failed locally, or failed after forwarding */
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
  };
}
