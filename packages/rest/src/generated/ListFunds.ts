export interface ListFundsResponse {
  /** outputs */
  outputs?: {
    /** txid */
    txid?: string;
    /** output */
    output?: number;
    /** value */
    value?: number;
    /** amount_msat */
    amount_msat?: string;
    /** address */
    address?: string;
    /** status */
    status?: string;
    /** blockheight */
    blockheight?: number;
  };
  /** channels */
  channels?: {
    /** peer_id */
    peer_id?: string;
    /** connected */
    connected?: string;
    /** state */
    state?: string;
    /** short_channel_id */
    short_channel_id?: string;
    /** channel_sat */
    channel_sat?: number;
    /** our_amount_msat */
    our_amount_msat?: string;
    /** channel_total_sat */
    channel_total_sat?: number;
    /** amount_msat */
    amount_msat?: string;
    /** funding_txid */
    funding_txid?: string;
    /** funding_output */
    funding_output?: number;
  };
}
