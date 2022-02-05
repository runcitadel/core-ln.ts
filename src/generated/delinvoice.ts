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

export interface DelinvoiceResponse {
    /**
     * the amount required to pay this invoice
     */
    amount_msat?: number;
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

