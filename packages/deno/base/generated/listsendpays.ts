/**
 * lightning-listsendpays -- Low-level command for querying sendpay status
 *
 * **listsendpays** [*bolt11*] [*payment_hash*] [*status*]
 */

/**
 * The **listsendpays** RPC command gets the status of all *sendpay*
 * commands (which is also used by the *pay* command), or with *bolt11* or
 * *payment_hash* limits results to that specific payment. You cannot
 * specify both. It is possible filter the payments also by *status*.
 *
 * Note that in future there may be more than one concurrent *sendpay*
 * command per *pay*, so this command should be used with caution.
 */
export interface ListsendpaysRequest {
  bolt11?: string;
  payment_hash?: string;
  status?: Status;
}

export interface ListsendpaysResponse {
  payments: Payment[];
}

export type Payment =
  & {
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
     * the description matching the bolt11 description hash (if pay supplied one)
     */
    description?: string;
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
     * the hash of the *payment_preimage* which will prove payment
     */
    payment_hash: string;
  }
  & ({
    /**
     * status of the payment
     */
    status: Status.Pending;
  } | {
    /**
     * status of the payment
     */
    status: Status.Complete;
    /** the proof of payment: SHA256 of this **payment_hash** */
    payment_preimage: string;
  } | {
    /**
     * status of the payment
     */
    status: Status.Failed;
    /** the onion message returned */
    erroronion: string;
  });

/**
 * status of the payment
 */
export enum Status {
  Complete = "complete",
  Failed = "failed",
  Pending = "pending",
}
