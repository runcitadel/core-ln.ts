/**
 * lightning-delexpiredinvoice -- Command for removing expired invoices
 * 
 * **delexpiredinvoice** [*maxexpirytime*] 
 * 
 */

/**
 * The **delexpiredinvoice** RPC command removes all invoices that have
 * expired on or before the given *maxexpirytime*.
 * 
 * If *maxexpirytime* is not specified then all expired invoices are
 * deleted.
*/
export interface DelexpiredinvoiceRequest {
  maxexpirytime?: number;
}

export interface DelexpiredinvoiceResponse {
}

