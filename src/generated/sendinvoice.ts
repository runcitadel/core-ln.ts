/**
 * lightning-sendinvoice -- Command for send an invoice for an offer
 * 
 * **sendinvoice** *offer* *label* [*msatoshi*] [*timeout*] [*quantity*] 
 * 
 */

/**
 * The **sendinvoice** RPC command creates and sends an invoice to the
 * issuer of an *offer* for it to pay: the offer must contain
 * *send_invoice*; see lightning-fetchinvoice(7).
 * 
 * If **fetchinvoice-noconnect** is not specified in the configuation, it
 * will connect to the destination in the (currently common!) case where it
 * cannot find a route which supports `option_onion_messages`.
 * 
 * *offer* is the bolt12 offer string beginning with "lno1".
 * 
 * *label* is the unique label to use for this invoice.
 * 
 * *msatoshi* is optional: it is required if the *offer* does not specify
 * an amount at all, or specifies it in a different currency.  Otherwise
 * you may set it (e.g. to provide a tip), and if not it defaults to the
 * amount contained in the offer (multiplied by *quantity* if any).
 * 
 * *timeout* is how many seconds to wait for the offering node to pay the
 * invoice or return an error, default 90 seconds.  This will also be the
 * timeout on the invoice that is sent.
 * 
 * *quantity* is optional: it is required if the *offer* specifies
 * *quantity_min* or *quantity_max*, otherwise it is not allowed.
*/
export interface SendinvoiceRequest {
  offer: /* GUESSED */ string;
  label: /* GUESSED */ string;
  msatoshi?: /* GUESSED */ string;
  timeout?: /* GUESSED */ string;
  quantity?: /* GUESSED */ string;
}

export interface SendinvoiceResponse {
    /**
     * the amount required to pay this invoice
     */
    amount_msat?: bigint;
    /**
     * the BOLT12 string
     */
    bolt12?: string;
    /**
     * description used in the invoice
     */
    description: string;
    /**
     * UNIX timestamp of when it will become / became unpayable
     */
    expires_at: number;
    /**
     * unique label supplied at invoice creation
     */
    label: string;
    /**
     * the hash of the *payment_preimage* which will prove payment
     */
    payment_hash: string;
    /**
     * Whether it's paid, unpaid or unpayable
     */
    status: Status;
}

/**
 * Whether it's paid, unpaid or unpayable
 */
export enum Status {
    Expired = "expired",
    Paid = "paid",
    Unpaid = "unpaid",
}

