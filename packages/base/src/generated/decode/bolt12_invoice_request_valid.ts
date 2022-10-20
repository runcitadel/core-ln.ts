export interface ValidBolt12InvoiceRequestDecodeResponse {
    /**
     * the amount in bitcoin
     */
    amount_msat?: number;
    /**
     * which blockchain this invoice_request is for (missing implies bitcoin mainnet only)
     */
    chain?: string;
    /**
     * the array of feature bits for this offer
     */
    features?: string;
    /**
     * the id of the offer this is requesting (merkle hash of non-signature fields)
     */
    offer_id: string;
    /**
     * the payer-provided blob to derive payer_key
     */
    payer_info?: string;
    /**
     * the transient key which identifies the payer
     */
    payer_key: string;
    /**
     * the quantity ordered
     */
    quantity?: number;
    /**
     * the 0-based counter for a recurring payment
     */
    recurrence_counter?: number;
    /**
     * the payer key signature
     */
    recurrence_signature?: string;
    /**
     * the optional start period for a recurring payment
     */
    recurrence_start?: number;
    type:              "bolt12_invoice_request"
    valid:             boolean;
}

