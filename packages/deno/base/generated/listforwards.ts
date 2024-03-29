/**
 * lightning-listforwards -- Command showing all htlcs and their information
 *
 * **listforwards** [*status*] [*in_channel*] [*out_channel*]
 *
 */

/**
 * The **listforwards** RPC command displays all htlcs that have been
 * attempted to be forwarded by the Core Lightning node.
 *
 * If *status* is specified, then only the forwards with the given status are returned.
 * *status* can be either *offered* or *settled* or *failed* or *local_failed*
 *
 * If *in_channel* or *out_channel* is specified, then only the matching forwards
 * on the given in/out channel are returned.
 */
export interface ListforwardsRequest {
  status?: /* GUESSED */ string;
  in_channel?: /* GUESSED */ string;
  out_channel?: /* GUESSED */ string;
}

export interface ListforwardsResponse {
  forwards: Forward[];
}

export interface Forward {
  /**
   * the channel that received the HTLC
   */
  in_channel: string;
  /**
   * the value of the incoming HTLC
   */
  in_msat: number;
  /**
   * the channel that the HTLC (trying to) forward to
   */
  out_channel?: string;
  /**
   * payment hash sought by HTLC
   */
  payment_hash?: string;
  /**
   * the UNIX timestamp when this was received
   */
  received_time: number;
  /**
   * still ongoing, completed, failed locally, or failed after forwarding
   */
  status: Status;
  /**
   * Either a legacy onion format or a modern tlv format
   */
  style?: Style;
}

/**
 * still ongoing, completed, failed locally, or failed after forwarding
 */
export enum Status {
  Failed = "failed",
  LocalFailed = "local_failed",
  Offered = "offered",
  Settled = "settled",
}

/**
 * Either a legacy onion format or a modern tlv format
 */
export enum Style {
  Legacy = "legacy",
  TLV = "tlv",
}
