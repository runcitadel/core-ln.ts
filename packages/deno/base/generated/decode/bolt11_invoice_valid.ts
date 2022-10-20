export interface ValidBolt11InvoiceDecodeResponse {
    /**
     * Amount the invoice asked for
     */
    amount_msat?: number;
    /**
     * the UNIX-style timestamp of the invoice
     */
    created_at: number;
    /**
     * the BIP173 name for the currency
     */
    currency: string;
    /**
     * the description of the purpose of the purchase
     */
    description?: string;
    /**
     * the hash of the description, in place of *description*
     */
    description_hash?: string;
    /**
     * the number of seconds this is valid after *timestamp*
     */
    expiry: number;
    /**
     * Any extra fields we didn't know how to parse
     */
    extra?: Extra[];
    /**
     * onchain addresses
     */
    fallbacks?: Fallback[];
    /**
     * the features bitmap for this invoice
     */
    features?: string;
    /**
     * the minimum CLTV delay for the final node
     */
    min_final_cltv_expiry: number;
    /**
     * the public key of the recipient
     */
    payee: string;
    /**
     * the hash of the *payment_preimage*
     */
    payment_hash: string;
    /**
     * the payment_metadata to put in the payment
     */
    payment_metadata?: string;
    /**
     * the secret to hand to the payee node
     */
    payment_secret?: string;
    /**
     * Route hints to the *payee*
     */
    routes?: Array<Route[]>;
    /**
     * signature of the *payee* on this invoice
     */
    signature: string;
    type:      ValidBolt11InvoiceDecodeResponseType;
    valid:     boolean;
}

export interface Extra {
    /**
     * The bech32 data for this field
     */
    data: string;
    /**
     * The bech32 letter which identifies this field
     */
    tag: string;
}

export interface Fallback {
    /**
     * the address in appropriate format for *type*
     */
    addr?: string;
    /**
     * Raw encoded address
     */
    hex: string;
    /**
     * the address type (if known)
     */
    type: FallbackType;
}

/**
 * the address type (if known)
 */
export enum FallbackType {
    P2Pkh = "P2PKH",
    P2Sh = "P2SH",
    P2Wpkh = "P2WPKH",
    P2Wsh = "P2WSH",
}

/**
 * hops in the route
 */
export interface Route {
    /**
     * the CLTV delta across this hop
     */
    cltv_expiry_delta: number;
    /**
     * the base fee for payments
     */
    fee_base_msat: number;
    /**
     * the parts-per-million fee for payments
     */
    fee_proportional_millionths: number;
    /**
     * the public key of the node
     */
    pubkey: string;
    /**
     * a channel to the next peer
     */
    short_channel_id: string;
}

export enum ValidBolt11InvoiceDecodeResponseType {
    Bolt11Invoice = "bolt11 invoice",
}