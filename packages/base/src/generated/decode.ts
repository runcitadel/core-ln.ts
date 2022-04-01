/**
 * lightning-decode -- Command for decoding an invoice string (low-level)
 *
 * **decode** *string*
 *
 */

/**
 * The **decode** RPC command checks and parses a *bolt11* or *bolt12*
 * string (optionally prefixed by `lightning:` or `LIGHTNING:`) as
 * specified by the BOLT 11 and BOLT 12 specifications.  It may decode
 * other formats in future.
 */
export interface DecodeRequest {
  string: string;
}

export type DecodeResponse =
  | { type: string; valid: false }
  | {
      type: "bolt12 offer";
      valid: true;
      /**
       * the id of this offer (merkle hash of non-signature fields)
       */
      offer_id: /* hex */ string;
      /**
       * x-only public key of the offering node
       */
      node_id: /* point32 */ string;
      /**
       * BIP-340 signature of the *node_id* on this offer
       */
      signature?: /* bip340sig */ string;
      /**
       * which blockchains this offer is for (missing implies bitcoin mainnet only)
       */
      chains?: /* hex */ string[];
      /**
       * ISO 4217 code of the currency (missing implies Bitcoin)
       */
      currency?: string;
      /**
       * the number of decimal places to apply to amount (if currency known)
       */
      minor_unit?: /* u32 */ number;
      /**
       * The currency code is unknown (so no **minor_unit**)
       */
      warning_offer_unknown_currency?: string;
      /**
       * the amount in the *currency* adjusted by *minor_unit*, if any
       */
      amount?: /* u64 */ number;
      /**
       * the amount in bitcoin (if specified, and no *currency*)
       */
      amount_msat?: /* msat */ bigint;
      /**
       * present if this is a send_invoice offer
       */
      send_invoice?: true;
      /**
       * the *payment_preimage* of invoice this is a refund for
       */
      refund_for?: /* hex */ string;
      /**
       * the description of the purpose of the offer
       */
      description: string;
      /**
       * the name of the vendor for this offer
       */
      vendor?: string;
      /**
       * the array of feature bits for this offer
       */
      features?: /* hex */ string;
      /**
       * UNIX timestamp of when this offer expires
       */
      absolute_expiry?: /* u64 */ number;
      /**
       * Paths to the destination
       */
      paths?: {
        /**
         * blinding factor for this path
         */
        blinding: /* pubkey */ string;
        /**
         * an individual path
         */
        path: {
          /**
           * node_id of the hop
           */
          node_id: /* pubkey */ string;
          /**
           * encrypted TLV entry for this hop
           */
          encrypted_recipient_data: /* hex */ string;
        }[];
      }[];
      /**
       * the minimum quantity
       */
      quantity_min?: /* u64 */ number;
      /**
       * the maximum quantity
       */
      quantity_max?: /* u64 */ number;
      /**
       * how often to this offer should be used
       */
      recurrence?: {
        /**
         * the BOLT12 time unit
         */
        time_unit: /* u32 */ number;
        /**
         * the name of *time_unit* (if valid)
         */
        time_unit_name?: string;
        /**
         * how many *time_unit* per payment period
         */
        period: /* u32 */ number;
        /**
         * period starts at this UNIX timestamp
         */
        basetime?: /* u64 */ number;
        /**
         * you can start at any period (only if **basetime** present)
         */
        start_any_period?: /* u64 */ number;
        /**
         * maximum period number for recurrence
         */
        limit?: /* u32 */ number;
        /**
         * when within a period will payment be accepted (default is prior and during the period)
         */
        paywindow?: {
          /**
           * seconds prior to period start
           */
          seconds_before: /* u32 */ number;
          /**
           * seconds after to period start
           */
          seconds_after: /* u32 */ number;
          /**
           * amount should be scaled if payed after period start
           */
          proportional_amount?: true;
        };
      };
    }
  | {
      type: "bolt12 invoice";
      valid: true;
      /**
       * the id of this offer (merkle hash of non-signature fields)
       */
      offer_id?: /* hex */ string;
      /**
       * x-only public key of the offering node
       */
      node_id: /* point32 */ string;
      /**
       * BIP-340 signature of the *node_id* on this offer
       */
      signature: /* bip340sig */ string;
      /**
       * which blockchain this invoice is for (missing implies bitcoin mainnet only)
       */
      chain?: /* hex */ string;
      /**
       * the amount in bitcoin
       */
      amount_msat: /* msat */ bigint;
      /**
       * present if this offer was a send_invoice offer
       */
      send_invoice?: true;
      /**
       * the *payment_preimage* of invoice this is a refund for
       */
      refund_for?: /* hex */ string;
      /**
       * the description of the purpose of the offer
       */
      description: string;
      /**
       * the name of the vendor for this offer
       */
      vendor?: string;
      /**
       * the array of feature bits for this offer
       */
      features?: /* hex */ string;
      /**
       * Paths to the destination
       */
      paths?: {
        /**
         * blinding factor for this path
         */
        blinding: /* pubkey */ string;
        /**
         * an individual path
         */
        path: {
          /**
           * node_id of the hop
           */
          node_id: /* pubkey */ string;
          /**
           * encrypted TLV entry for this hop
           */
          encrypted_recipient_data: /* hex */ string;
        }[];
      }[];
      /**
       * the quantity ordered
       */
      quantity?: /* u64 */ number;
      /**
       * the 0-based counter for a recurring payment
       */
      recurrence_counter?: /* u32 */ number;
      /**
       * the optional start period for a recurring payment
       */
      recurrence_start?: /* u32 */ number;
      /**
       * the UNIX timestamp of the first recurrence period start
       */
      recurrence_basetime?: /* u32 */ number;
      /**
       * the transient key which identifies the payer
       */
      payer_key?: /* point32 */ string;
      /**
       * the payer-provided blob to derive payer_key
       */
      payer_info?: /* hex */ string;
      /**
       * the UNIX timestamp of invoice creation
       */
      created_at: /* u64 */ number;
      /**
       * the hash of the *payment_preimage*
       */
      payment_hash: /* hex */ string;
      /**
       * the number of seconds after *created_at* when this expires
       */
      relative_expiry: /* u32 */ number;
      /**
       * the number of blocks required by destination
       */
      min_final_cltv_expiry: /* u32 */ number;
      /**
       * onchain addresses
       */
      fallbacks?: {
        /**
         * Segwit address version
         */
        version: /* u8 */ number;
        /**
         * Raw encoded segwit address
         */
        hex: /* hex */ string;
        /**
         * bech32 segwit address
         */
        address?: string;
      }[];
      /**
       * the payer key signature to get a refund
       */
      refund_signature?: /* bip340sig */ string;
    }
  | {
      type: "bolt12 invoice_request";
      valid: true;
      /**
       * the id of the offer this is requesting (merkle hash of non-signature fields)
       */
      offer_id: /* hex */ string;
      /**
       * which blockchain this invoice_request is for (missing implies bitcoin mainnet only)
       */
      chain?: /* hex */ string;
      /**
       * the amount in bitcoin
       */
      amount_msat?: /* msat */ bigint;
      /**
       * the array of feature bits for this offer
       */
      features?: /* hex */ string;
      /**
       * the quantity ordered
       */
      quantity?: /* u64 */ number;
      /**
       * the 0-based counter for a recurring payment
       */
      recurrence_counter?: /* u32 */ number;
      /**
       * the optional start period for a recurring payment
       */
      recurrence_start?: /* u32 */ number;
      /**
       * the transient key which identifies the payer
       */
      payer_key: /* point32 */ string;
      /**
       * the payer-provided blob to derive payer_key
       */
      payer_info?: /* hex */ string;
      /**
       * the payer key signature
       */
      recurrence_signature?: /* bip340sig */ string;
    }
  | {
      type: "bolt11 invoice";
      valid: true;
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
      amount_msat?: /* msat */ bigint;
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
    };
