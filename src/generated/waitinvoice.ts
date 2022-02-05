/**
 * lightning-waitinvoice -- Command for waiting for specific payment
 * 
 * **waitinvoice** *label* 
 * 
 */

/**
 * The **waitinvoice** RPC command waits until a specific invoice is paid,
 * then returns that single entry as per **listinvoice**.
*/
export interface WaitinvoiceRequest {
  label: /* GUESSED */ string;
}

export type WaitinvoiceResponse = {
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

