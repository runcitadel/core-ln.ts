export interface ValidBolt12OfferDecodeResponse {
    /**
     * UNIX timestamp of when this offer expires
     */
    absolute_expiry?: number;
    /**
     * the amount in the *currency* adjusted by *minor_unit*, if any
     */
    amount?: number;
    /**
     * the amount in bitcoin (if specified, and no *currency*)
     */
    amount_msat?: number;
    /**
     * which blockchains this offer is for (missing implies bitcoin mainnet only)
     */
    chains?: string[];
    /**
     * ISO 4217 code of the currency (missing implies Bitcoin)
     */
    currency?: string;
    /**
     * the description of the purpose of the offer
     */
    description: string;
    /**
     * the array of feature bits for this offer
     */
    features?: string;
    /**
     * the number of decimal places to apply to amount (if currency known)
     */
    minor_unit?: number;
    /**
     * x-only public key of the offering node
     */
    node_id: string;
    /**
     * the id of this offer (merkle hash of non-signature fields)
     */
    offer_id: string;
    /**
     * Paths to the destination
     */
    paths?: ValidBolt12OfferDecodeResponsePath[];
    /**
     * the maximum quantity
     */
    quantity_max?: number;
    /**
     * the minimum quantity
     */
    quantity_min?: number;
    /**
     * how often to this offer should be used
     */
    recurrence?: Recurrence;
    /**
     * the *payment_preimage* of invoice this is a refund for
     */
    refund_for?: string;
    /**
     * present if this is a send_invoice offer
     */
    send_invoice?: boolean;
    /**
     * BIP-340 signature of the *node_id* on this offer
     */
    signature?: string;
    type:       "bolt12_offer"
    valid:      boolean;
    /**
     * the name of the vendor for this offer
     */
    vendor?: string;
    /**
     * The currency code is unknown (so no **minor_unit**)
     */
    warning_offer_unknown_currency?: string;
}

export interface ValidBolt12OfferDecodeResponsePath {
    /**
     * blinding factor for this path
     */
    blinding: string;
    /**
     * an individual path
     */
    path: PathPath[];
}

export interface PathPath {
    /**
     * encrypted TLV entry for this hop
     */
    encrypted_recipient_data: string;
    /**
     * node_id of the hop
     */
    node_id: string;
}

/**
 * how often to this offer should be used
 */
export interface Recurrence {
    /**
     * period starts at this UNIX timestamp
     */
    basetime?: number;
    /**
     * maximum period number for recurrence
     */
    limit?: number;
    /**
     * when within a period will payment be accepted (default is prior and during the period)
     */
    paywindow?: Paywindow;
    /**
     * how many *time_unit* per payment period
     */
    period: number;
    /**
     * you can start at any period (only if **basetime** present)
     */
    start_any_period?: number;
    /**
     * the BOLT12 time unit
     */
    time_unit: number;
    /**
     * the name of *time_unit* (if valid)
     */
    time_unit_name?: string;
}

/**
 * when within a period will payment be accepted (default is prior and during the period)
 */
export interface Paywindow {
    /**
     * amount should be scaled if payed after period start
     */
    proportional_amount?: boolean;
    /**
     * seconds after to period start
     */
    seconds_after: number;
    /**
     * seconds prior to period start
     */
    seconds_before: number;
}

