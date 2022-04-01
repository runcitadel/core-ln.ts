/**
 * lightning-delpay -- Command for removing a completed or failed payment
 *
 * **delpay** *payment\_hash* *status*
 *
 */

/**
 * The **delpay** RPC command deletes a payment with the given `payment_hash` if its status is either `complete` or `failed`. Deleting a `pending` payment is an error.
 *
 * - *payment_hash*: The unique identifier of a payment.
 * - *status*: Expected status of the payment.
 * Only deletes if the payment status matches.
 *
 * EXAMPLE JSON REQUEST
 * ------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "delpay",
 *   "params": {
 *     "payment_hash": "4fa2f1b001067ec06d7f95b8695b8acd9ef04c1b4d1110e3b94e1fa0687bb1e0",
 *     "status": "complete"
 *   }
 * }
 * ```
 */
export interface DelpayRequest {
  payment_hash: string;
  status: "failed" | "complete";
}

export interface DelpayResponse {
  payments: Payment[];
}

export interface Payment {
  /**
   * the amount the destination received, if known
   */
  amount_msat?: bigint;
  /**
   * the amount we actually sent, including fees
   */
  amount_sent_msat: bigint;
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
   * the error onion returned on failure, if any.
   */
  erroronion?: string;
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
   * unique ID within this (multi-part) payment
   */
  partid?: number;
  /**
   * the hash of the *payment_preimage* which will prove payment
   */
  payment_hash: string;
  /**
   * proof of payment
   */
  payment_preimage?: string;
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
