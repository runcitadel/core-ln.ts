export interface OffersDisableOfferResponse {
  /** The merkle hash of the offer (always 64 characters) */
  offer_id?: string;
  /** Whether the offer can produce invoices/payments (always false) */
  active?: boolean;
  /** Whether the offer is disabled after first successful use */
  single_use?: boolean;
  /** The bolt12 string representing this offer */
  bolt12?: string;
  /** The bolt12 string representing this offer, without signature */
  bolt12_unsigned?: string;
  /** Whether the offer has had an invoice paid / payment made */
  used?: boolean;
  /** The label provided when offer was created (optional) */
  label?: string;
}
