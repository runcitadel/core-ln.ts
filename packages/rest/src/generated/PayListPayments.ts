export interface PayListPaymentsRequestQuery {
  /** BOLT11 invoice */
  invoice: string;
}

export interface PayListPaymentsResponse {
  /** payments */
  payments?: {
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
    /** memo */
    memo?: string;
  };
}
