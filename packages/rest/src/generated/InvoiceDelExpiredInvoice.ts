export interface InvoiceDelExpiredInvoiceRequestQuery {
  /** Removes all invoices that have expired on or before maxexpiry */
  maxexpiry: number;
}

export interface InvoiceDelExpiredInvoiceResponse {}
