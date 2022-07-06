/**
 * lightning-fundchannel_cancel -- Command for completing channel establishment
 *
 * **fundchannel_cancel** *id*
 *
 */

/**
 * `fundchannel_cancel` is a lower level RPC command. It allows channel opener
 * to cancel a channel before funding broadcast with a connected peer.
 *
 * *id* is the node id of the remote peer with which to cancel.
 *
 * Note that the funding transaction MUST NOT be broadcast before
 * `fundchannel_cancel`. Broadcasting transaction before `fundchannel_cancel`
 * WILL lead to unrecoverable loss of funds.
 *
 * If `fundchannel_cancel` is called after `fundchannel_complete`, the remote
 * peer may disconnect when command succeeds. In this case, user need to connect
 * to remote peer again before opening channel.
 */
export interface FundchannelCancelRequest {
  id: string;
}

export interface FundchannelCancelResponse {
  /**
   * A message indicating it was cancelled by RPC
   */
  cancelled: string;
}
