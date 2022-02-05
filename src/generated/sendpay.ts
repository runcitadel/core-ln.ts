/**
 * lightning-sendpay -- Low-level command for sending a payment via a route
 * 
 * **sendpay** *route* *payment\_hash* \[*label*\] \[*msatoshi*\] \[*bolt11*\] \[*payment_secret*\] \[*partid*\] 
 * 
 */

/**
 * The **sendpay** RPC command attempts to send funds associated with the
 * given *payment_hash*, along a route to the final destination in the
 * route.
 * 
 * Generally, a client would call lightning-getroute(7) to resolve a route,
 * then use **sendpay** to send it. If it fails, it would call
 * lightning-getroute(7) again to retry.
 * 
 * The response will occur when the payment is on its way to the
 * destination. The **sendpay** RPC command does not wait for definite
 * success or definite failure of the payment. Instead, use the
 * **waitsendpay** RPC command to poll or wait for definite success or
 * definite failure.
 * 
 * The *label* and *bolt11* parameters, if provided, will be returned in
 * *waitsendpay* and *listsendpays* results.
 * 
 * The *msatoshi* amount must be provided if *partid* is non-zero, otherwise
 * it must be equal to the final
 * amount to the destination. By default it is in millisatoshi precision; it can be a whole number, or a whole number
 * ending in *msat* or *sat*, or a number with three decimal places ending
 * in *sat*, or a number with 1 to 11 decimal places ending in *btc*.
 * 
 * The *payment_secret* is the value that the final recipient requires to
 * accept the payment, as defined by the `payment_data` field in BOLT 4
 * and the `s` field in the BOLT 11 invoice format.  It is required if
 * *partid* is non-zero.
 * 
 * The *partid* value, if provided and non-zero, allows for multiple parallel
 * partial payments with the same *payment_hash*.  The *msatoshi* amount
 * (which must be provided) for each **sendpay** with matching
 * *payment_hash* must be equal, and **sendpay** will fail if there are
 * already *msatoshi* worth of payments pending.
 * 
 * Once a payment has succeeded, calls to **sendpay** with the same
 * *payment_hash* but a different *msatoshi* or destination will fail;
 * this prevents accidental multiple payments. Calls to **sendpay** with
 * the same *payment_hash*, *msatoshi*, and destination as a previous
 * successful payment (even if a different route or *partid*) will return immediately
 * with success.
*/
export interface SendpayRequest {
  route: /* GUESSED */ string;
  payment_hash: /* GUESSED */ string;
  label?: /* GUESSED */ string;
  msatoshi?: /* GUESSED */ string;
  bolt11?: /* GUESSED */ string;
  payment_secret?: /* GUESSED */ string;
  partid?: /* GUESSED */ string;
}

export type SendpayResponse = {
  [k: string]: unknown;
} & {
  /**
   * unique ID for this payment attempt
   */
  id: /* u64 */ number;
  /**
   * Grouping key to disambiguate multiple attempts to pay an invoice or the same payment_hash
   */
  groupid?: /* u64 */ number;
  /**
   * the hash of the *payment_preimage* which will prove payment
   */
  payment_hash: /* hex */ string;
  /**
   * status of the payment (could be complete if already sent previously)
   */
  status: "pending" | "complete";
  msatoshi?: {
    [k: string]: unknown;
  };
  /**
   * The amount delivered to destination (if known)
   */
  amount_msat?: /* msat */ number;
  /**
   * the final destination of the payment if known
   */
  destination?: /* pubkey */ string;
  /**
   * the UNIX timestamp showing when this payment was initiated
   */
  created_at: /* u64 */ number;
  msatoshi_sent?: {
    [k: string]: unknown;
  };
  /**
   * The amount sent
   */
  amount_sent_msat: /* msat */ number;
  /**
   * the *label*, if given to sendpay
   */
  label?: string;
  /**
   * the *partid*, if given to sendpay
   */
  partid?: /* u64 */ number;
  /**
   * the bolt11 string (if supplied)
   */
  bolt11?: string;
  /**
   * the bolt12 string (if supplied: **experimental-offers** only).
   */
  bolt12?: string;
  [k: string]: unknown;
};

