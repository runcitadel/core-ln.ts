export interface PayListPaysRequestQuery {
  /** BOLT11 invoice */
  invoice: string;
}

export interface PayListPaysResponse {
  /** pays */
  pays?: {
    /** bolt11 */
    bolt11?: string;
    /** status */
    status?: string;
    /** preimage */
    payment_preimage?: string;
    /** amount_sent_msat */
    amount_sent_msat?: string;
  };
}
