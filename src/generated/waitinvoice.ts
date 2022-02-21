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

export interface WaitinvoiceResponse {
    /**
     * the amount required to pay this invoice
     */
    amount_msat?: bigint;
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
     * the hash of the *payment_preimage* which will prove payment
     */
    payment_hash: string;
    /**
     * Whether it's paid or expired
     */
    status: Status;
}

/**
 * Whether it's paid or expired
 */
export enum Status {
    Expired = "expired",
    Paid = "paid",
}

