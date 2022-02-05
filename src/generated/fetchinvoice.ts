/**
 * lightning-fetchinvoice -- Command for fetch an invoice for an offer
 * 
 * **fetchinvoice** *offer* \[*msatoshi*\] \[*quantity*\] \[*recurrence_counter*\] \[*recurrence_start*\] \[*recurrence_label*\] \[*timeout*\] \[*payer_note*\] 
 * 
 */

/**
 * The **fetchinvoice** RPC command contacts the issuer of an *offer* to get
 * an actual invoice that can be paid.  It highlights any changes between the
 * offer and the returned invoice.
 * 
 * If **fetchinvoice-noconnect** is not specified in the configuation, it
 * will connect to the destination in the (currently common!) case where it
 * cannot find a route which supports `option_onion_messages`.
 * 
 * The offer must not contain *send_invoice*; see lightning-sendinvoice(7).
 * 
 * *msatoshi* is required if the *offer* does not specify
 * an amount at all, otherwise it is not allowed.
 * 
 * *quantity* is is required if the *offer* specifies
 * *quantity_min* or *quantity_max*, otherwise it is not allowed.
 * 
 * *recurrence_counter* is required if the *offer*
 * specifies *recurrence*, otherwise it is not allowed.
 * *recurrence_counter* should first be set to 0, and incremented for
 * each successive invoice in a given series.
 * 
 * *recurrence_start* is required if the *offer*
 * specifies *recurrence_base* with *start_any_period* set, otherwise it
 * is not allowed.  It indicates what period number to start at.
 * 
 * *recurrence_label* is required if *recurrence_counter* is set, and
 * otherwise is not allowed.  It must be the same as prior fetchinvoice
 * calls for the same recurrence, as it is used to link them together.
 * 
 * *timeout* is an optional timeout; if we don't get a reply before this
 * we fail (default, 60 seconds).
 * 
 * *payer_note* is an optional payer note to include in the fetched invoice.
*/
export interface FetchinvoiceRequest {
  offer: string;
  msatoshi?: string | number;
  quantity?: string  | number;
  recurrence_counter?: string  | number;
  recurrence_start?: string  | number;
  recurrence_label?: string;
  timeout?: string  | number;
  payer_note?: string;
}

export interface FetchinvoiceResponse {
  /**
   * The BOLT12 invoice we fetched
   */
  invoice: string;
  /**
   * Summary of changes from offer
   */
  changes: {
    /**
     * extra characters appended to the *description* field.
     */
    description_appended?: string;
    /**
     * a completely replaced *description* field
     */
    description?: string;
    /**
     * The *vendor* from the offer, which is missing in the invoice
     */
    vendor_removed?: string;
    /**
     * a completely replaced *vendor* field
     */
    vendor?: string;
    /**
     * the amount, if different from the offer amount multiplied by any *quantity* (or the offer had no amount, or was not in BTC).
     */
    msat?: /* msat */ number;
  };
  /**
   * Only for recurring invoices if the next period is under the *recurrence_limit*
   */
  next_period?: {
    /**
     * the index of the next period to fetchinvoice
     */
    counter: /* u64 */ number;
    /**
     * UNIX timestamp that the next period starts
     */
    starttime: /* u64 */ number;
    /**
     * UNIX timestamp that the next period ends
     */
    endtime: /* u64 */ number;
    /**
     * UNIX timestamp of the earliest time that the next invoice can be fetched
     */
    paywindow_start: /* u64 */ number;
    /**
     * UNIX timestamp of the latest time that the next invoice can be fetched
     */
    paywindow_end: /* u64 */ number;
  };
}

