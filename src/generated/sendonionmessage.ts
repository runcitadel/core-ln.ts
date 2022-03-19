/**
 * lightning-sendonionmessage -- low-level command to send an onion message
 * 
 * **sendonionmessage** *first_id* *blinding* *hops* 
 * 
 */

/**
 * The **sendonionmessage** RPC command can be used to send a message via
 * the lightning network.  These are currently used by *offers* to request
 * and receive invoices.
 * 
 * *hops* is an array of json objects: *id* as a public key of the node,
 * and *tlv* contains a hexidecimal TLV to include.
*/
export interface SendonionmessageRequest {
  first_id: string;
  blinding: string;
  hops:{ id: string; tlv: string; }[];
}

export interface SendonionmessageResponse {
}

