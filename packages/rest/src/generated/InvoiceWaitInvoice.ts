export interface InvoiceWaitInvoiceResponse {
  /** unique label supplied at invoice creation */
  label?: string;
  /** description used in the invoice */
  description?: string;
  /** the hash of the payment_preimage which will prove payment (always 64 characters) */
  payment_hash?: string;
  /** Whether it's paid or expired (one of "paid", "expired") */
  status?: string;
  /** UNIX timestamp of when it will become / became unpayable */
  expires_at?: string;
  /** the amount required to pay this invoice */
  amount_msat?: string;
  /** the BOLT11 string (always present unless bolt12 is) */
  bolt11?: string;
  /** the BOLT12 string (always present unless bolt11 is) */
  bolt12?: string;
  /** If status is "paid", unique incrementing index for this payment */
  pay_index?: string;
  /** If status is "paid", the amount actually received */
  amount_received_msat?: string;
  /** If status is "paid", UNIX timestamp of when it was paid */
  paid_at?: string;
  /** If status is "paid", proof of payment (always 64 characters) */
  payment_preimage?: string;
}
