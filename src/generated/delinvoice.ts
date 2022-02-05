/**
 * lightning-delinvoice -- Command for removing an invoice
 * 
 * **delinvoice** *label* *status* 
 * 
 */

/**
 * The **delinvoice** RPC command removes an invoice with *status* as given
 * in **listinvoices**.
 * 
 * The caller should be particularly aware of the error case caused by the
 * *status* changing just before this command is invoked!
*/
export interface DelinvoiceRequest {
  label: string;
  status: "paid" | "expired" | "unpaid";
}

export type DelinvoiceResponse = {
  [k: string]: unknown;
} & {
  /**
   * Unique label given at creation time
   */
  label: string;
  /**
   * BOLT11 string
   */
  bolt11?: string;
  /**
   * BOLT12 string
   */
  bolt12?: string;
  msatoshi?: {
    [k: string]: unknown;
  };
  /**
   * the amount required to pay this invoice
   */
  amount_msat?: /* msat */ number;
  /**
   * description used in the invoice
   */
  description?: string;
  /**
   * the hash of the *payment_preimage* which will prove payment
   */
  payment_hash: /* hex */ string;
  /**
   * State of invoice
   */
  status: "paid" | "expired" | "unpaid";
  /**
   * UNIX timestamp when invoice expires (or expired)
   */
  expires_at: /* u64 */ number;
  [k: string]: unknown;
};

