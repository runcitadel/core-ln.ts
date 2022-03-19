/**
 * lightning-pay -- Command for sending a payment to a BOLT11 invoice
 * 
 * **pay** *bolt11* [*msatoshi*] [*label*] [*riskfactor*] [*maxfeepercent*] [*retry\_for*] [*maxdelay*] [*exemptfee*] [*exclude*] 
 * 
 */

/**
 * The **pay** RPC command attempts to find a route to the given
 * destination, and send the funds it asks for. If the *bolt11* does not
 * contain an amount, *msatoshi* is required, otherwise if it is specified
 * it must be *null*. *msatoshi* is in millisatoshi precision; it can be a
 * whole number, or a whole number with suffix *msat* or *sat*, or a three
 * decimal point number with suffix *sat*, or an 1 to 11 decimal point
 * number suffixed by *btc*.
 * 
 * (Note: if **experimental-offers** is enabled, *bolt11* can actually be
 * a bolt12 invoice, such as one received from lightningd-fetchinvoice(7)).
 * 
 * The *label* field is used to attach a label to payments, and is returned
 * in lightning-listpays(7) and lightning-listsendpays(7). The *riskfactor*
 * is described in detail in lightning-getroute(7), and defaults to 10. The
 * *maxfeepercent* limits the money paid in fees, and defaults to 0.5. The
 * `maxfeepercent` is a percentage of the amount that is to be paid. The `exemptfee`
 * option can be used for tiny payments which would be dominated by the fee
 * leveraged by forwarding nodes. Setting `exemptfee` allows the
 * `maxfeepercent` check to be skipped on fees that are smaller than
 * `exemptfee` (default: 5000 millisatoshi).
 * 
 * The response will occur when the payment fails or succeeds. Once a
 * payment has succeeded, calls to **pay** with the same *bolt11* will
 * succeed immediately.
 * 
 * Until *retry_for* seconds passes (default: 60), the command will keep
 * finding routes and retrying the payment. However, a payment may be
 * delayed for up to `maxdelay` blocks by another node; clients should be
 * prepared for this worst case.
 * 
 * *exclude* is a JSON array of short-channel-id/direction (e.g. [
 * "564334x877x1/0", "564195x1292x0/1" ]) or node-id which should be excluded
 * from consideration for routing. The default is not to exclude any channels
 * or nodes.
 * 
 * When using *lightning-cli*, you may skip optional parameters by using
 * *null*. Alternatively, use **-k** option to provide parameters by name.
 * 
 * RANDOMIZATION
 * -------------
 * 
 * To protect user privacy, the payment algorithm performs some
 * randomization.
 * 
 * 1: Route Randomization
 * 
 * Route randomization means the payment algorithm does not always use the
 * lowest-fee or shortest route. This prevents some highly-connected node
 * from learning all of the user payments by reducing their fees below the
 * network average.
 * 
 * 2: Shadow Route
 * 
 * Shadow route means the payment algorithm will virtually extend the route
 * by adding delays and fees along it, making it appear to intermediate nodes
 * that the route is longer than it actually is. This prevents intermediate
 * nodes from reliably guessing their distance from the payee.
 * 
 * Route randomization will never exceed *maxfeepercent* of the payment.
 * Route randomization and shadow routing will not take routes that would
 * exceed *maxdelay*.
*/
export interface PayRequest {
  bolt11: /* GUESSED */ string;
  msatoshi?: /* GUESSED */ string;
  label?: /* GUESSED */ string;
  riskfactor?: /* GUESSED */ string;
  maxfeepercent?: /* GUESSED */ string;
  retry_for?: /* GUESSED */ string;
  maxdelay?: /* GUESSED */ string;
  exemptfee?: /* GUESSED */ string;
  exclude?: /* GUESSED */ string;
}

export interface PayResponse {
    /**
     * Amount the recipient received
     */
    amount_msat: bigint;
    /**
     * Total amount we sent (including fees)
     */
    amount_sent_msat: bigint;
    /**
     * the UNIX timestamp showing when this payment was initiated
     */
    created_at: number;
    /**
     * the final destination of the payment
     */
    destination?: string;
    /**
     * how many attempts this took
     */
    parts: number;
    /**
     * the hash of the *payment_preimage* which will prove payment
     */
    payment_hash: string;
    /**
     * the proof of payment: SHA256 of this **payment_hash**
     */
    payment_preimage: string;
    /**
     * status of payment
     */
    status: Status;
    /**
     * Not all parts of a multi-part payment have completed
     */
    warning_partial_completion?: string;
}

/**
 * status of payment
 */
export enum Status {
    Complete = "complete",
}

