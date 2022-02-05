/**
 * lightning-fundchannel\_complete -- Command for completing channel establishment
 * 
 * **fundchannel\_complete** *id* *psbt* 
 * 
 */

/**
 * `fundchannel_complete` is a lower level RPC command. It allows a user to
 * complete an initiated channel establishment with a connected peer.
 * 
 * *id* is the node id of the remote peer.
 * 
 * *psbt* is the transaction to use for funding (does not need to be
 * signed but must be otherwise complete).
 * 
 * Note that the funding transaction MUST NOT be broadcast until after
 * channel establishment has been successfully completed, as the commitment
 * transactions for this channel are not secured until this command
 * successfully completes. Broadcasting transaction before can lead to
 * unrecoverable loss of funds.
*/
export interface FundchannelCompleteRequest {
  id: string;
  psbt: string;
}

export interface FundchannelCompleteResponse {
    /**
     * The channel_id of the resulting channel
     */
    channel_id: string;
    /**
     * Indication that channel is safe to use
     */
    commitments_secured: boolean;
}

