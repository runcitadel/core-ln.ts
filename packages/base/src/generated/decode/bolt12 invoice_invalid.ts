export interface InvalidBolt12InvoiceDecodeResponse {
    amount_msat?:           any;
    chain?:                 any;
    created_at?:            any;
    description?:           any;
    fallbacks?:             Fallback[];
    features?:              any;
    min_final_cltv_expiry?: any;
    node_id?:               any;
    offer_id?:              any;
    paths?:                 any;
    payer_info?:            any;
    payer_key?:             any;
    payment_hash?:          any;
    quantity?:              any;
    recurrence_basetime?:   any;
    recurrence_counter?:    any;
    recurrence_start?:      any;
    refund_for?:            any;
    refund_signature?:      any;
    relative_expiry?:       any;
    send_invoice?:          any;
    signature?:             any;
    timestamp?:             any;
    type:                   "bolt12 invoice"
    valid:                  boolean;
    vendor?:                any;
    /**
     * Does not have exactly one payinfo for each of **paths**
     */
    warning_invoice_invalid_blinded_payinfo?: string;
    /**
     * **amount_msat* missing
     */
    warning_invoice_missing_amount?: string;
    /**
     * Has **paths** without payinfo
     */
    warning_invoice_missing_blinded_payinfo?: string;
    /**
     * Missing **created_at**
     */
    warning_invoice_missing_created_at?: string;
    /**
     * No **description**
     */
    warning_invoice_missing_description?: string;
    /**
     * Missing **payment_hash**
     */
    warning_invoice_missing_payment_hash?: string;
    /**
     * Has **recurrence_counter** without **recurrence_basetime**
     */
    warning_invoice_missing_recurrence_basetime?: string;
    /**
     * No **refund_signature**
     */
    warning_invoice_refund_missing_signature?: string;
    /**
     * **refund_signature** incorrect
     */
    warning_invoice_refund_signature_invalid?: string;
    /**
     * Missing **payer_key** for refund_signature
     */
    warning_invoice_refund_signature_missing_payer_key?: string;
}

export interface Fallback {
    address?: any;
    hex:      any;
    version:  any;
    /**
     * **version** is > 16
     */
    warning_invoice_fallbacks_version_invalid?: string;
}

