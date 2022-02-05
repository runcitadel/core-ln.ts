/**
 * lightning-waitsendpay -- Command for sending a payment via a route
 * 
 * **waitsendpay** *payment\_hash* \[*timeout*\] \[*partid*\] 
 * 
 */

/**
 * The **waitsendpay** RPC command polls or waits for the status of an
 * outgoing payment that was initiated by a previous **sendpay**
 * invocation.
 * 
 * The *partid* argument must match that of the **sendpay** command.
 * 
 * Optionally the client may provide a *timeout*, an integer in seconds,
 * for this RPC command to return. If the *timeout* is provided and the
 * given amount of time passes without the payment definitely succeeding or
 * definitely failing, this command returns with a 200 error code (payment
 * still in progress). If *timeout* is not provided this call will wait
 * indefinitely.
 * 
 * Indicating a *timeout* of 0 effectively makes this call a pollable query
 * of the status of the payment.
 * 
 * If the payment completed with success, this command returns with
 * success. Otherwise, if the payment completed with failure, this command
 * returns an error.
*/
export interface WaitsendpayRequest {
  payment_hash: /* GUESSED */ string;
  timeout?: /* GUESSED */ string;
  partid?: /* GUESSED */ string;
}

export interface WaitsendpayResponse {
    /**
     * The amount delivered to destination (if known)
     */
    amount_msat?: number;
    /**
     * The amount sent
     */
    amount_sent_msat: number;
    /**
     * the bolt11 string (if pay supplied one)
     */
    bolt11?: string;
    /**
     * the bolt12 string (if supplied for pay: **experimental-offers** only).
     */
    bolt12?: string;
    /**
     * the UNIX timestamp showing when this payment was initiated
     */
    created_at: number;
    /**
     * the final destination of the payment if known
     */
    destination?: string;
    /**
     * Grouping key to disambiguate multiple attempts to pay an invoice or the same payment_hash
     */
    groupid?: number;
    /**
     * unique ID for this payment attempt
     */
    id: number;
    /**
     * the label, if given to sendpay
     */
    label?: string;
    /**
     * the *partid*, if given to sendpay
     */
    partid?: number;
    /**
     * the hash of the *payment_preimage* which will prove payment
     */
    payment_hash: string;
    /**
     * status of the payment
     */
    status: Status;
}

/**
 * status of the payment
 */
export enum Status {
    Complete = "complete",
}

