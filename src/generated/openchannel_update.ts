/**
 * lightning-openchannel\_update -- Command to update a collab channel open
 * 
 * **openchannel_update** *channel_id* *psbt* 
 * 
 */

/**
 * `openchannel_update` is a low level RPC command which continues an open
 * channel, as specified by *channel_id*. An updated  *psbt* is passed in; any
 * changes from the PSBT last returned (either from `openchannel_init` or
 * a previous call to `openchannel_update`) will be communicated to the peer.
 * 
 * Must be called after `openchannel_init` and before `openchannel_signed`.
 * 
 * Must be called until *commitments_secured* is returned as true, at which point
 * `openchannel_signed` should be called with a signed version of the PSBT
 * returned by the last call to `openchannel_update`.
 * 
 * *channel_id* is the id of the channel.
 * 
 * *psbt* is the updated PSBT to be sent to the peer. May be identical to
 * the PSBT last returned by either `openchannel_init` or `openchannel_update`.
*/
export interface OpenchannelUpdateRequest {
  channel_id: /* GUESSED */ string;
  psbt: /* GUESSED */ string;
}

export interface OpenchannelUpdateResponse {
  /**
   * the channel id of the channel
   */
  channel_id: /* hex */ string;
  /**
   * the PSBT of the funding transaction
   */
  psbt: string;
  /**
   * whether the *psbt* is complete (if true, sign *psbt* and call `openchannel_signed` to complete the channel open)
   */
  commitments_secured: boolean;
  /**
   * The index of the funding output in the psbt
   */
  funding_outnum: /* u32 */ number;
  /**
   * scriptPubkey which we have to close to if we mutual close
   */
  close_to?: /* hex */ string;
}

