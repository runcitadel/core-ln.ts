export interface NetworkListChannelResponse {
  /** source */
  source?: string;
  /** destination */
  destination?: string;
  /** short_channel_id */
  short_channel_id?: string;
  /** public */
  public?: string;
  /** satoshis */
  satoshis?: number;
  /** amount_msat */
  amount_msat?: string;
  /** message_flags */
  message_flags?: number;
  /** channel_flags */
  channel_flags?: number;
  /** active */
  active?: string;
  /** last_update */
  last_update?: number;
  /** base_fee_millisatoshi */
  base_fee_millisatoshi?: number;
  /** fee_per_millionth */
  fee_per_millionth?: number;
  /** delay */
  delay?: number;
  /** htlc_minimum_msat */
  htlc_minimum_msat?: string;
  /** htlc_maximum_msat */
  htlc_maximum_msat?: string;
}
