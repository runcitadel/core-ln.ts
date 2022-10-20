export interface ValidBolt12InvoiceDecodeResponse {
    /**
     * the amount in bitcoin
     */
    amount_msat: number;
    /**
     * which blockchain this invoice is for (missing implies bitcoin mainnet only)
     */
    chain?: string;
    /**
     * the UNIX timestamp of invoice creation
     */
    created_at: number;
    /**
     * the description of the purpose of the offer
     */
    description: string;
    /**
     * onchain addresses
     */
    fallbacks?: Fallback[];
    /**
     * the array of feature bits for this offer
     */
    features?: string;
    /**
     * the number of blocks required by destination
     */
    min_final_cltv_expiry: number;
    /**
     * x-only public key of the offering node
     */
    node_id: string;
    /**
     * the id of this offer (merkle hash of non-signature fields)
     */
    offer_id?: string;
    /**
     * Paths to the destination
     */
    paths?: ValidBolt12InvoiceDecodeResponsePath[];
    /**
     * the payer-provided blob to derive payer_key
     */
    payer_info?: string;
    /**
     * the transient key which identifies the payer
     */
    payer_key?: string;
    /**
     * the hash of the *payment_preimage*
     */
    payment_hash: string;
    /**
     * the quantity ordered
     */
    quantity?: number;
    /**
     * the UNIX timestamp of the first recurrence period start
     */
    recurrence_basetime?: number;
    /**
     * the 0-based counter for a recurring payment
     */
    recurrence_counter?: number;
    /**
     * the optional start period for a recurring payment
     */
    recurrence_start?: number;
    /**
     * the *payment_preimage* of invoice this is a refund for
     */
    refund_for?: string;
    /**
     * the payer key signature to get a refund
     */
    refund_signature?: string;
    /**
     * the number of seconds after *created_at* when this expires
     */
    relative_expiry: number;
    /**
     * present if this offer was a send_invoice offer
     */
    send_invoice?: boolean;
    /**
     * BIP-340 signature of the *node_id* on this offer
     */
    signature: string;
    type:      "bolt12_invoice"
    valid:     boolean;
    /**
     * the name of the vendor for this offer
     */
    vendor?: string;
}

export interface Fallback {
    /**
     * bech32 segwit address
     */
    address?: string;
    /**
     * Raw encoded segwit address
     */
    hex: string;
    /**
     * Segwit address version
     */
    version: number;
}

export interface ValidBolt12InvoiceDecodeResponsePath {
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

