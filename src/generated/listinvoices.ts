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
export interface ListinvoicesRequest {
  label?: /* GUESSED */ string;
  invstring?: /* GUESSED */ string;
  payment_hash?: /* GUESSED */ string;
  offer_id?: /* GUESSED */ string;
}

export interface ListinvoicesResponse {
    invoices: Invoice[];
}

export interface Invoice {
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
     * description used in the invoice
     */
    description: string;
    /**
     * UNIX timestamp of when it will become / became unpayable
     */
    expires_at: number;
    /**
     * unique label supplied at invoice creation
     */
    label: string;
    /**
     * the *id* of our offer which created this invoice (**experimental-offers** only).
     */
    local_offer_id?: string;
    /**
     * the optional *payer_note* from invoice_request which created this invoice
     * (**experimental-offers** only).
     */
    payer_note?: string;
    /**
     * the hash of the *payment_preimage* which will prove payment
     */
    payment_hash: string;
    /**
     * Whether it's paid, unpaid or unpayable
     */
    status: Status;
}

/**
 * Whether it's paid, unpaid or unpayable
 */
export enum Status {
    Expired = "expired",
    Paid = "paid",
    Unpaid = "unpaid",
}

