export interface PayRequestBody {
  /** BOLT11 invoice */
  invoice: string;
  /** Amount in milli satoshis */
  amount: number;
  /** Label for the payment */
  label: string;
  /** Annual cost of your funds being stuck (as a percentage) */
  riskfactor: number;
  /** Fraction of the amount to be paid as fee (as a percentage) */
  maxfeepercent: number;
  /** Keep retryinig to find routes for this long (seconds) */
  retry_for: number;
  /** The payment can be delayed for more than this many blocks */
  maxdelay: number;
  /** Amount for which the maxfeepercent check is skipped */
  exemptfee: number;
}

export interface PayResponse {
  /** id */
  id?: number;
  /** payment_hash */
  payment_hash?: string;
  /** destination */
  destination?: string;
  /** msatoshi */
  msatoshi?: number;
  /** amount_msat */
  amount_msat?: string;
  /** msatoshi_sent */
  msatoshi_sent?: number;
  /** amount_sent_msat */
  amount_sent_msat?: string;
  /** created_at */
  created_at?: number;
  /** status */
  status?: string;
  /** payment_preimage */
  payment_preimage?: string;
  /** bolt11 */
  bolt11?: string;
}
