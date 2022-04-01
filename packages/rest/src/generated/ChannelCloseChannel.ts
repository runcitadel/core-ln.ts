export interface ChannelCloseChannelRequestQuery {
  /** Unit is Seconds. For non-zero values, close command will unilaterally close the channel when that number of seconds is reached */
  unilateralTimeout: number;
  /** The destination can be of any Bitcoin accepted type address, including bech32. */
  dest: string;
  /** The fee negotiation step parameter controls how closing fee negotiation is performed. */
  feeNegotiationStep: string;
}

export interface ChannelCloseChannelResponse {
  /** Transaction */
  tx?: string;
  /** Transaction ID */
  txid?: string;
  /** type */
  type?: string;
}
