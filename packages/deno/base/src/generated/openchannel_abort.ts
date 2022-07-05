/**
 * lightning-openchannel_abort -- Command to abort a channel to a peer
 *
 * **openchannel_abort** *channel_id*
 *
 */

/**
 * `openchannel_init` is a low level RPC command which initiates a channel
 * open with a specified peer. It uses the openchannel protocol
 * which allows for interactive transaction construction.
 *
 * *channel_id* is id of this channel.
 *
 */
export interface OpenchannelAbortRequest {
  channel_id: /* GUESSED */ string;
}

export interface OpenchannelAbortResponse {
  /**
   * whether this is completely canceled (there may be remaining in-flight transactions)
   */
  channel_canceled: boolean;
  /**
   * the channel id of the aborted channel
   */
  channel_id: string;
  /**
   * usually "Abort requested", but if it happened to fail at the same time it could be
   * different
   */
  reason: string;
}
