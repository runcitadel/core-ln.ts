/**
 * lightning-listpays -- Command for querying payment status
 * 
 * **listpays** \[*bolt11*\] \[*payment_hash*\] \[*status*\] 
 * 
 */

/**
 * The **listpay** RPC command gets the status of all *pay* commands, or a
 * single one if either *bolt11* or *payment_hash* was specified.
 * It is possible filter the payments also by *status*.
*/
export interface ListpaysRequest {
  bolt11?: /* GUESSED */ string;
  payment_hash?: /* GUESSED */ string;
  status?: /* GUESSED */ string;
}

export interface ListpaysResponse {
    pays: Pay[];
}

export interface Pay {
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
     * the label, if given to sendpay
     */
    label?: string;
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
    Failed = "failed",
    Pending = "pending",
}

