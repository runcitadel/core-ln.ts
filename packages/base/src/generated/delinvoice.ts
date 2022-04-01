/**
 * lightning-delinvoice -- Command for removing an invoice (or just its description)
 *
 * **delinvoice** *label* *status* [*desconly*]
 *
 */

/**
 * The **delinvoice** RPC command removes an invoice with *status* as given
 * in **listinvoices**, or with *desconly* set, removes its description.
 *
 * The caller should be particularly aware of the error case caused by the
 * *status* changing just before this command is invoked!
 *
 * If *desconly* is set, the invoice is not deleted, but has its
 * description removed (this can save space with very large descriptions,
 * as would be used with lightning-invoice(7) *deschashonly*.
 */
export interface DelinvoiceRequest {
  label: string;
  status: "paid" | "expired" | "unpaid";
  desconly?: boolean;
}

export interface DelinvoiceResponse {
  /**
   * the amount required to pay this invoice
   */
  amount_msat?: bigint;
  /**
   * BOLT11 string
   */
  bolt11?: string;
  /**
   * BOLT12 string
   */
  bolt12?: string;
  /**
   * description used in the invoice
   */
  description?: string;
  /**
   * UNIX timestamp when invoice expires (or expired)
   */
  expires_at: number;
  /**
   * Unique label given at creation time
   */
  label: string;
  /**
   * the hash of the *payment_preimage* which will prove payment
   */
  payment_hash: string;
  /**
   * State of invoice
   */
  status: Status;
}

/**
 * State of invoice
 */
export enum Status {
  Expired = "expired",
  Paid = "paid",
  Unpaid = "unpaid",
}
