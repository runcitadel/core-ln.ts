/**
 * lightning-disableoffer -- Command for removing an offer
 * 
 * **disableoffer** *offer\_id* 
 * 
 */

/**
 * The **disableoffer** RPC command disables an offer, so that no further
 * invoices will be given out (if made with lightning-offer(7)) or
 * invoices accepted  (if made with lightning-offerout(7)).
 * 
 * We currently don't support deletion of offers, so offers are not
 * forgotten entirely (there may be invoices which refer to this offer).
 * 
 * EXAMPLE JSON REQUEST
 * ------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "disableoffer",
 *   "params": {
 *     "offer_id": "713a16ccd4eb10438bdcfbc2c8276be301020dd9d489c530773ba64f3b33307d ",
 *   }
 * }
 * ```
*/
export interface DisableofferRequest {
  offer_id: string;
}

export interface DisableofferResponse {
  /**
   * the merkle hash of the offer
   */
  offer_id: /* hex */ string;
  /**
   * Whether the offer can produce invoices/payments
   */
  active: false;
  /**
   * Whether the offer is disabled after first successful use
   */
  single_use: boolean;
  /**
   * The bolt12 string representing this offer
   */
  bolt12: string;
  /**
   * The bolt12 string representing this offer, without signature
   */
  bolt12_unsigned: string;
  /**
   * Whether the offer has had an invoice paid / payment made
   */
  used: boolean;
  /**
   * The label provided when offer was created
   */
  label?: string;
}

