export interface ChannelOpenChannelRequestBody {
  /** Pub key of the peer */
  id: string;
  /** Amount in satoshis */
  satoshis: string;
  /** urgent/normal/slow/<sats>perkw/<sats>perkb */
  feeRate: string;
  /** Flag to announce the channel (true, false) */
  announce: string;
  /** Minimum number of confirmations that used outputs should have */
  minConf: number;
  /** Specifies the utxos to be used to fund the channel, as an array of "txid:vout" */
  utxos: string;
  /** Amount of millisatoshis to push to the channel peer at open */
  push_msat: string;
  /** Bitcoin address to which the channel funds should be sent to on close */
  close_to: string;
  /** Amount of liquidity you'd like to lease from the peer */
  request_amt: string;
  /** Compact represenation of the peer's expected channel lease terms */
  compact_lease: string;
}

export interface ChannelOpenChannelResponse {
  /** Transaction */
  tx?: string;
  /** Transaction ID */
  txid?: string;
  /** channel_id of the newly created channel */
  channel_id?: string;
}
