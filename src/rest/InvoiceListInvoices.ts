export interface InvoiceListInvoicesRequestQuery {
  /** Invoice label */
  label: string;
}

export interface InvoiceListInvoicesResponse {
  /** invoices */
  invoices?: {
    /** label */
    label?: string;
    /** bolt11 */
    bolt11?: string;
    /** payment_hash */
    payment_hash?: string;
    /** msatoshi */
    msatoshi?: number;
    /** amount_msat */
    amount_msat?: string;
    /** status */
    status?: string;
    /** pay_index */
    pay_index?: number;
    /** msatoshi_received */
    msatoshi_received?: number;
    /** amount_received_msat */
    amount_received_msat?: string;
    /** paid_at */
    paid_at?: number;
    /** description */
    description?: string;
    /** expires_at */
    expires_at?: number;
  };
}
