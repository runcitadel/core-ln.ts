export interface PayKeysendRequestBody {
  /** 33 byte, hex-encoded, pubkey of the node */
  pubkey: string;
  /** Amount in milli satoshis */
  amount: number;
  /** Label for the payment */
  label: string;
  /** Fraction of the amount to be paid as fee (as a percentage) */
  maxfeepercent: number;
  /** Keep retryinig to find routes for this long (seconds) */
  retry_for: number;
  /** The payment can be delayed for more than this many blocks */
  maxdelay: number;
  /** Amount for which the maxfeepercent check is skipped */
  exemptfee: number;
}

export interface PayKeysendResponse {
  /** destination */
  destination?: string;
  /** payment_hash */
  payment_hash?: string;
  /** created_at */
  created_at?: number;
  /** parts */
  parts?: number;
  /** msatoshi */
  msatoshi?: number;
  /** amount_msat */
  amount_msat?: string;
  /** msatoshi_sent */
  msatoshi_sent?: number;
  /** amount_sent_msat */
  amount_sent_msat?: string;
  /** payment_preimage */
  payment_preimage?: string;
  /** status */
  status?: string;
}
