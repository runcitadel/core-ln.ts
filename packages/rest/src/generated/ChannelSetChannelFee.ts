export interface ChannelSetChannelFeeRequestBody {
  /** Short channel ID or channel id. It can be "all" for updating all channels */
  id: string;
  /** Optional value in msats added as base fee to any routed payment */
  base: number;
  /** Optional value that is added proportionally per-millionths to any routed payment volume in satoshi */
  ppm: number;
}

export interface ChannelSetChannelFeeResponse {
  /** base */
  base?: string;
  /** ppm */
  ppm?: string;
  /** peer_id */
  peer_id?: string;
  /** channel_id */
  channel_id?: string;
  /** short_channel_id */
  short_channel_id?: string;
}
