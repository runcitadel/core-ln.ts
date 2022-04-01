export interface ChannelListChannelsResponse {
  /** Pub key */
  id?: string;
  /** Peer connection status (true or false) */
  connected?: string;
  /** Channel connection status */
  state?: string;
  /** Channel ID */
  short_channel_id?: string;
  /** Channel ID */
  channel_id?: string;
  /** Channel funding transaction */
  funding_txid?: string;
  /** Private channel flag (true or false) */
  private?: string;
  /** msatoshi_to_us */
  msatoshi_to_us?: string;
  /** msatoshi_total */
  msatoshi_total?: string;
  /** msatoshi_to_them */
  msatoshi_to_them?: string;
  /** their_channel_reserve_satoshis */
  their_channel_reserve_satoshis?: string;
  /** our_channel_reserve_satoshis */
  our_channel_reserve_satoshis?: string;
  /** spendable_msatoshi */
  spendable_msatoshi?: string;
  /** funding_allocation_msat */
  funding_allocation_msat?: number;
  /** Flag indicating if this peer initiated the channel (0,1) */
  direction?: number;
  /** Alias of the node */
  alias?: string;
}
