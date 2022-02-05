/**
 * lightning-decodepay -- Command for decoding a bolt11 string (low-level)
 * 
 * **decodepay** *bolt11* \[*description*\] 
 * 
 */

/**
 * The **decodepay** RPC command checks and parses a *bolt11* string as
 * specified by the BOLT 11 specification.
*/
export interface DecodepayRequest {
  bolt11: string;
  description?: string;
}

export interface DecodepayResponse {
  /**
   * the BIP173 name for the currency
   */
  currency: string;
  /**
   * the UNIX-style timestamp of the invoice
   */
  created_at: /* u64 */ number;
  /**
   * the number of seconds this is valid after *timestamp*
   */
  expiry: /* u64 */ number;
  /**
   * the public key of the recipient
   */
  payee: /* pubkey */ string;
  msatoshi?: /* u64 */ number;
  /**
   * Amount the invoice asked for
   */
  amount_msat?: /* msat */ number;
  /**
   * the hash of the *payment_preimage*
   */
  payment_hash: /* hex */ string;
  /**
   * signature of the *payee* on this invoice
   */
  signature: /* signature */ string;
  /**
   * the description of the purpose of the purchase
   */
  description?: string;
  /**
   * the hash of the description, in place of *description*
   */
  description_hash?: /* hex */ string;
  /**
   * the minimum CLTV delay for the final node
   */
  min_final_cltv_expiry: /* u32 */ number;
  /**
   * the secret to hand to the payee node
   */
  payment_secret?: /* hex */ string;
  /**
   * the features bitmap for this invoice
   */
  features?: /* hex */ string;
  /**
   * onchain addresses
   */
  fallbacks?: {
    /**
     * the address type (if known)
     */
    type: "P2PKH" | "P2SH" | "P2WPKH" | "P2WSH";
    /**
     * the address in appropriate format for *type*
     */
    addr?: string;
    /**
     * Raw encoded address
     */
    hex: /* hex */ string;
  }[];
  /**
   * Route hints to the *payee*
   */
  routes?: {
    /**
     * the public key of the node
     */
    pubkey: /* pubkey */ string;
    /**
     * a channel to the next peer
     */
    short_channel_id: /* short_channel_id */ string;
    /**
     * the base fee for payments
     */
    fee_base_msat: /* u32 */ number;
    /**
     * the parts-per-million fee for payments
     */
    fee_proportional_millionths: /* u32 */ number;
    /**
     * the CLTV delta across this hop
     */
    cltv_expiry_delta: /* u32 */ number;
  }[][];
  /**
   * Any extra fields we didn't know how to parse
   */
  extra?: {
    /**
     * The bech32 letter which identifies this field
     */
    tag: string;
    /**
     * The bech32 data for this field
     */
    data: string;
  }[];
}

