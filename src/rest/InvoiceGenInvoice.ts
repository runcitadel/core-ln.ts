export interface InvoiceGenInvoiceRequestBody {
  /** Amount in milli satoshis */
  amount: number;
  /** Unique label for the invoice */
  label: string;
  /** Description for the invoice */
  description: string;
  /** Expiry time period for the invoice (seconds) */
  expiry: number;
  /** Include routing hints for private channels (true or 1) */
  private: string;
}

export interface InvoiceGenInvoiceResponse {
  /** payment_hash */
  payment_hash?: string;
  /** expires_at */
  expires_at?: number;
  /** bolt11 */
  bolt11?: string;
}
