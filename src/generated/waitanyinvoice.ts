/**
 * lightning-waitanyinvoice -- Command for waiting for payments
 * 
 * **waitanyinvoice** \[*lastpay\_index*\] \[*timeout*\] 
 * 
 */

/**
 * The **waitanyinvoice** RPC command waits until an invoice is paid, then
 * returns a single entry as per **listinvoice**. It will not return for
 * any invoices paid prior to or including the *lastpay_index*.
 * 
 * This is usually called iteratively: once with no arguments, then
 * repeatedly with the returned *pay_index* entry. This ensures that no
 * paid invoice is missed.
 * 
 * The *pay_index* is a monotonically-increasing number assigned to an
 * invoice when it gets paid. The first valid *pay_index* is 1; specifying
 * *lastpay_index* of 0 equivalent to not specifying a *lastpay_index*.
 * Negative *lastpay_index* is invalid.
 * 
 * If *timeout* is specified, wait at most that number of seconds, which
 * must be an integer.
 * If the specified *timeout* is reached, this command will return with an
 * error.
 * You can specify this to 0 so that **waitanyinvoice** will return
 * immediately with an error if no pending invoice is available yet.
 * If unspecified, this command will wait indefinitely.
*/
export interface WaitanyinvoiceRequest {
  lastpay_index?: /* GUESSED */ string;
  timeout?: /* GUESSED */ string;
}

export type WaitanyinvoiceResponse = {
  [k: string]: unknown;
} & {
  /**
   * unique label supplied at invoice creation
   */
  label: string;
  /**
   * description used in the invoice
   */
  description: string;
  /**
   * the hash of the *payment_preimage* which will prove payment
   */
  payment_hash: /* hex */ string;
  /**
   * Whether it's paid or expired
   */
  status: "paid" | "expired";
  /**
   * UNIX timestamp of when it will become / became unpayable
   */
  expires_at: /* u64 */ number;
  msatoshi?: {
    [k: string]: unknown;
  };
  /**
   * the amount required to pay this invoice
   */
  amount_msat?: /* msat */ number;
  /**
   * the BOLT11 string (always present unless *bolt12* is)
   */
  bolt11?: string;
  /**
   * the BOLT12 string (always present unless *bolt11* is)
   */
  bolt12?: string;
  [k: string]: unknown;
};

