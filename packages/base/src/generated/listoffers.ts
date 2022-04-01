/**
 * lightning-listoffers -- Command for listing offers
 * 
 * **listoffers** [*offer_id*] [*active_only*] 
 * 
 */

/**
 * The **listoffers** RPC command list all offers, or with `offer_id`,
 * only the offer with that offer_id (if it exists).  If `active_only` is
 * set and is true, only offers with `active` true are returned.
 * 
 * EXAMPLE JSON REQUEST
 * ------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "listoffers",
 *   "params": {
 * 	"active_only": false
 *   }
 * }
 * ```
*/
export interface ListoffersRequest {
  offer_id?: /* GUESSED */ string;
  active_only?: /* GUESSED */ string;
}

export interface ListoffersResponse {
    offers: Offer[];
}

export interface Offer {
    /**
     * whether this can still be used
     */
    active: boolean;
    /**
     * the bolt12 encoding of the offer
     */
    bolt12: string;
    /**
     * the bolt12 encoding of the offer, without signature
     */
    bolt12_unsigned: string;
    /**
     * the (optional) user-specified label
     */
    label?: string;
    /**
     * the id of this offer (merkle hash of non-signature fields)
     */
    offer_id: string;
    /**
     * whether this expires as soon as it's paid
     */
    single_use: boolean;
    /**
     * True if an associated invoice has been paid
     */
    used: boolean;
}

