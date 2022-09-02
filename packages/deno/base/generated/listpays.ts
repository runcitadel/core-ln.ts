/**
 * lightning-listpays -- Command for querying payment status
 *
 * **listpays** [*bolt11*] [*payment_hash*] [*status*]
 *
 */

/**
 * The **listpay** RPC command gets the status of all *pay* commands, or a
 * single one if either *bolt11* or *payment_hash* was specified.
 * It is possible filter the payments also by *status*.
 */
export interface ListpaysRequest {
  bolt11?: string;
  payment_hash?: string;
  status?: Status;
}

export interface ListpaysResponse {
  pays: Pay[];
}

export type Pay = {
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
   * the description matching the bolt11 description hash (if pay supplied one)
   */
  description?: string;
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
} & ({
  /**
   * status of the payment
   */
   status: Status.Pending;
   /**
    * the amount the destination received, if known
    */
   amount_msat: number;
   /**
    * the amount we actually sent, including fees
    */
   amount_sent_msat: string;
} | {
  /**
   * status of the payment
   */
   status: Status.Complete;
   /**
    * the amount the destination received, if known
    */
   amount_msat: number;
   /**
    * the amount we actually sent, including fees
    */
   amount_sent_msat: string;
   /**
    * proof of payment
    */
   preimage: string;
   /** 
    * the number of parts for a successful payment (only if more than one).
   */
   number_of_parts: number;
} | {
  /**
   * status of the payment
   */
  status: Status.Failed;
  /** the onion message returned */
  erroronion: string;
})

/**
 * status of the payment
 */
export enum Status {
  Complete = "complete",
  Failed = "failed",
  Pending = "pending",
}
