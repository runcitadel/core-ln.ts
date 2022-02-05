/**
 * lightning-openchannel\_signed -- Command to conclude a channel open
 * 
 * **openchannel_signed** *channel_id* *signed_psbt* 
 * 
 */

/**
 * `openchannel_signed` is a low level RPC command which concludes a channel
 * open with the specified peer. It uses the v2 openchannel protocol, which
 * allows for interactive transaction construction.
 * 
 * This command should be called after `openchannel_update` returns
 * *commitments_secured* `true`.
 * 
 * This command will broadcast the finalized funding transaction,
 * if we receive valid signatures from the peer.
 * 
 * *channel_id* is the id of the channel.
 * 
 * *signed_psbt* is the PSBT returned from `openchannel_update` (where
 * *commitments_secured* was true) with partial signatures or finalized
 * witness stacks included for every input that we contributed to the
 * PSBT.
*/
export interface OpenchannelSignedRequest {
  channel_id: /* GUESSED */ string;
  signed_psbt: /* GUESSED */ string;
}

export interface OpenchannelSignedResponse {
  /**
   * the channel id of the channel
   */
  channel_id: /* hex */ string;
  /**
   * the funding transaction
   */
  tx: /* hex */ string;
  /**
   * The txid of the **tx**
   */
  txid: /* txid */ string;
}

