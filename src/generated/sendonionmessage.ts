/**
 * lightning-sendonionmessage -- low-level command to send an onion message
 * 
 * **sendonionmessage** *hops* \[*reply_path*\] 
 * 
 */

/**
 * The **sendonionmessage** RPC command can be used to send a message via
 * the lightning network.  These are currently used by *offers* to request
 * and receive invoices.
 * 
 * *hops* is an array of json objects: *id* as a public key of the node,
 * and either *rawtlv* containing a hexidecimal TLV to include, or any of
 * the fields *short_channel_id*, *blinding*, *enctlv*, *invoice*,
 * *invoice_request* and *invoice_error* to construct the onionmessage
 * TLV with.
 * 
 * *reply_path* is a json object, containing a pubkey *blinding*, and an
 * array *path* of objects containing *id* (a pubkey) and *enctlv* (a hex
 * value, optional for final element).
*/
export interface SendonionmessageRequest {
  hops: /* GUESSED */ string;
  reply_path?: /* GUESSED */ string;
}

export interface SendonionmessageResponse {}

