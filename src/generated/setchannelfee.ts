/**
 * lightning-setchannelfee -- Command for setting specific routing fees on a lightning channel
 * 
 * **setchannelfee** *id* \[*base*\] \[*ppm*\] \[*enforcedelay*\] 
 * 
 */

/**
 * The **setchannelfee** RPC command sets channel specific routing fees as
 * defined in BOLT #7. The channel has to be in normal or awaiting state.
 * This can be checked by **listpeers** reporting a *state* of
 * CHANNELD_NORMAL or CHANNELD_AWAITING_LOCKIN for the channel.
 * 
 * *id* is required and should contain a scid (short channel ID), channel
 * id or peerid (pubkey) of the channel to be modified. If *id* is set to
 * "all", the fees for all channels are updated that are in state
 * CHANNELD_NORMAL or CHANNELD_AWAITING_LOCKIN.
 * 
 * *base* is an optional value in millisatoshi that is added as base fee to
 * any routed payment. If the parameter is left out, the global config
 * value fee-base will be used again. It can be a whole number, or a whole
 * number ending in *msat* or *sat*, or a number with three decimal places
 * ending in *sat*, or a number with 1 to 11 decimal places ending in
 * *btc*.
 * 
 * *ppm* is an optional value that is added proportionally per-millionths
 * to any routed payment volume in satoshi. For example, if ppm is 1,000
 * and 1,000,000 satoshi is being routed through the channel, an
 * proportional fee of 1,000 satoshi is added, resulting in a 0.1% fee. If
 * the parameter is left out, the global config value will be used again.
 * 
 * *enforcedelay* is the number of seconds to delay before enforcing the
 * new fees (default 600, which is ten minutes).  This gives the network
 * a chance to catch up with the new rates and avoids rejecting HTLCs
 * before they do.  This only has an effect if rates are increased (we
 * always allow users to overpay fees), only applies to a single rate
 * increase per channel (we don't remember an arbitrary number of prior
 * feerates) and if the node is restarted the updated fees are enforced
 * immediately.
*/
export interface SetchannelfeeRequest {
  id: /* GUESSED */ string;
  base?: /* GUESSED */ string;
  ppm?: /* GUESSED */ string;
  enforcedelay?: /* GUESSED */ string;
}

export interface SetchannelfeeResponse {
    /**
     * The fee_base_msat value
     */
    base: number;
    /**
     * channel(s) whose rate is now set
     */
    channels: Channel[];
    /**
     * The fee_proportional_millionths value
     */
    ppm: number;
}

export interface Channel {
    /**
     * The channel_id of the channel
     */
    channel_id: string;
    /**
     * The node_id of the peer
     */
    peer_id: string;
    /**
     * the short_channel_id (if locked in)
     */
    short_channel_id?: string;
}

