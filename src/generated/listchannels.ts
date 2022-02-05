/**
 * lightning-listchannels -- Command to query active lightning channels in the entire network
 * 
 * **listchannels** \[*short\_channel\_id*\] \[*source*\] \[*destination*\] 
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
 * Only one of *short_channgel_id*, *source* or *destination* can be supplied.
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
  channels: {
    /**
     * the source node
     */
    source: /* pubkey */ string;
    /**
     * the destination node
     */
    destination: /* pubkey */ string;
    /**
     * true if this is announced (otherwise it must be our channel)
     */
    public: boolean;
    /**
     * the total capacity of this channel (always a whole number of satoshis)
     */
    amount_msat: /* msat */ number;
    /**
     * as defined by BOLT #7
     */
    message_flags: /* u8 */ number;
    /**
     * as defined by BOLT #7
     */
    channel_flags: /* u8 */ number;
    /**
     * true unless source has disabled it, or it's a local channel and the peer is disconnected or it's still opening or closing
     */
    active: boolean;
    /**
     * UNIX timestamp on the last channel_update from *source*
     */
    last_update: /* u32 */ number;
    /**
     * Base fee changed by *source* to use this channel
     */
    base_fee_millisatoshi: /* u32 */ number;
    /**
     * Proportional fee changed by *source* to use this channel, in parts-per-million
     */
    fee_per_millionth: /* u32 */ number;
    /**
     * The number of blocks delay required by *source* to use this channel
     */
    delay: /* u32 */ number;
    /**
     * The smallest payment *source* will allow via this channel
     */
    htlc_minimum_msat: /* msat */ number;
    satoshis?: {
      [k: string]: unknown;
    };
    /**
     * The largest payment *source* will allow via this channel
     */
    htlc_maximum_msat?: /* msat */ number;
    /**
     * BOLT #9 features bitmap for this channel
     */
    features: /* hex */ string;
    [k: string]: unknown;
  }[];
}

