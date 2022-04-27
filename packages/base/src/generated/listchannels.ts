/**
 * lightning-listchannels -- Command to query active lightning channels in the entire network
 *
 * **listchannels** [*short_channel_id*] [*source*] [*destination*]
 *
 */

/**
 * The **listchannels** RPC command returns data on channels that are known
 * to the node. Because channels may be bidirectional, up to 2 objects will
 * be returned for each channel (one for each direction).
 *
 * If *short_channel_id* is a short channel id, then only known channels with a
 * matching *short_channel_id* are returned.  Otherwise, it must be null.
 *
 * If *source* is a node id, then only channels leading from that node id
 * are returned.
 *
 * If *destination* is a node id, then only channels leading to that node id
 * are returned.
 *
 * Only one of *short_channel_id*, *source* or *destination* can be supplied.
 * If nothing is supplied, data on all lightning channels known to this
 * node, are returned. These can be local channels or public channels
 * broadcast on the gossip network.
 */
export interface ListchannelsRequest {
  short_channel_id?: /* GUESSED */ string;
  source?: /* GUESSED */ string;
  destination?: /* GUESSED */ string;
}

export interface ListchannelsResponse {
  channels: Channel[];
}

export interface Channel {
  /**
   * true unless source has disabled it, or it's a local channel and the peer is disconnected
   * or it's still opening or closing
   */
  active: boolean;
  /**
   * the total capacity of this channel (always a whole number of satoshis)
   */
  amount_msat: bigint;
  /**
   * Base fee changed by *source* to use this channel
   */
  base_fee_millisatoshi: number;
  /**
   * as defined by BOLT #7
   */
  channel_flags: number;
  /**
   * The number of blocks delay required by *source* to use this channel
   */
  delay: number;
  /**
   * the destination node
   */
  destination: string;
  /**
   * BOLT #9 features bitmap for this channel
   */
  features: string;
  /**
   * Proportional fee changed by *source* to use this channel, in parts-per-million
   */
  fee_per_millionth: number;
  /**
   * The largest payment *source* will allow via this channel
   */
  htlc_maximum_msat?: bigint;
  /**
   * The smallest payment *source* will allow via this channel
   */
  htlc_minimum_msat: bigint;
  /**
   * UNIX timestamp on the last channel_update from *source*
   */
  last_update: number;
  /**
   * as defined by BOLT #7
   */
  message_flags: number;
  /**
   * true if this is announced (otherwise it must be our channel)
   */
  public: boolean;
  /**
   * short channel id of channel
   */
  short_channel_id: string;
  /**
   * the source node
   */
  source: string;
}
