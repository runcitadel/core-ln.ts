export interface InvalidBolt12InvoiceRequestDecodeResponse {
    amount_msat?:          any;
    chain?:                any;
    features?:             any;
    offer_id?:             any;
    payer_info?:           any;
    payer_key?:            any;
    quantity?:             any;
    recurrence_counter?:   any;
    recurrence_signature?: any;
    recurrence_start?:     any;
    type:                  "bolt12_invoice_request"
    valid:                 boolean;
    /**
     * **recurrence_signature** incorrect
     */
    warning_invoice_request_invalid_recurrence_signature?: string;
    /**
     * No **offer_id**
     */
    warning_invoice_request_missing_offer_id?: string;
    /**
     * No **payer_key**
     */
    warning_invoice_request_missing_payer_key?: string;
    /**
     * No **recurrence_signature**
     */
    warning_invoice_request_missing_recurrence_signature?: string;
}

