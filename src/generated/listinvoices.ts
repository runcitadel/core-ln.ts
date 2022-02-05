/**
 * lightning-listinvoices -- Command for querying invoice status
 *
 * **listinvoices** \[*label*\] \[*invstring*\] \[*payment_hash*\] \[*offer_id*\]
 *
 */

/**
 * The **listinvoices** RPC command gets the status of a specific invoice,
 * if it exists, or the status of all invoices if given no argument.
 *
 * A specific invoice can be queried by providing either the `label`
 * provided when creating the invoice, the `invstring` string representing
 * the invoice, the `payment_hash` of the invoice, or the local `offer_id`
 * this invoice was issued for. Only one of the query parameters can be used at once.
 */
export type ListinvoicesRequest = {
  label?: string;
} | {
  invstring?: string;
} | {
  payment_hash?: string;
} | {
  offer_id?: string;
}

export interface ListinvoicesResponse {
  invoices: {
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
    payment_hash: string;
    /**
     * Whether it's paid, unpaid or unpayable
     */
    status: "unpaid" | "paid" | "expired";
    /**
     * UNIX timestamp of when it will become / became unpayable
     */
    expires_at: number;
    msatoshi?: number;
    /**
     * the amount required to pay this invoice
     */
    amount_msat?: number;
    /**
     * the BOLT11 string (always present unless *bolt12* is)
     */
    bolt11?: string;
    /**
     * the BOLT12 string (always present unless *bolt11* is)
     */
    bolt12?: string;
    /**
     * the *id* of our offer which created this invoice (**experimental-offers** only).
     */
    local_offer_id?: string;
    /**
     * the optional *payer_note* from invoice_request which created this invoice (**experimental-offers** only).
     */
    payer_note?: string;
    /**
     * Unique incrementing index for this payment
     */
    pay_index?: number;
    msatoshi_received?: number;
    /**
     * the amount actually received (could be slightly greater than *amount_msat*, since clients may overpay)
     */
    amount_received_msat?: number;
    /**
     * UNIX timestamp of when it was paid
     */
    paid_at?: number;
    /**
     * proof of payment
     */
    payment_preimage?: string;
    [k: string]: unknown;
  }[];
}
