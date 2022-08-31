/**
 * lightning-recoverchannel -- Command for recovering channels bundeled in an array in the form of *Static Backup*
 *
 * **recoverchannel** *scb*
 *
 */

/**
 * The **recoverchannel** RPC command tries to force the peer (with whom you
 * already had a channel) to close the channel and sweeps on-chain fund. This
 * method is not spontaneous and depends on the peer, so use it in case of
 * severe data loss.
 *
 * The *scb* parameter is an array containing minimum required info to
 * reconnect and sweep funds. You can get the scb for already stored channels
 * by using the RPC command 'staticbackup'
 *
 */
export interface RecoverchannelRequest {
  scb: /* GUESSED */ string;
}

export interface RecoverchannelResponse {
  stubs: string[];
}
