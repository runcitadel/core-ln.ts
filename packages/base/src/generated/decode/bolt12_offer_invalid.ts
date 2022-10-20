export interface InvalidBolt12OfferDecodeResponse {
    absolute_expiry?: any;
    amount?:          any;
    amount_msat?:     any;
    chains?:          any;
    currency?:        any;
    description?:     any;
    features?:        any;
    minor_unit?:      any;
    node_id?:         any;
    offer_id?:        any;
    paths?:           any;
    quantity_max?:    any;
    quantity_min?:    any;
    recurrence?:      any;
    refund_for?:      any;
    send_invoice?:    any;
    signature?:       any;
    type:             "bolt12_offer"
    valid:            boolean;
    vendor?:          any;
    /**
     * No **description**
     */
    warning_offer_missing_description?: string;
    warning_offer_unknown_currency?:    any;
}

