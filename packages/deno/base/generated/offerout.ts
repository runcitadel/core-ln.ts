/**
 * lightning-offerout -- Command for offering payments
 *
 * **offerout** *amount* *description* [*issuer*] [*label*] [*absolute_expiry*] [*refund_for*]
 *
 */

/**
 * The **offerout** RPC command creates an offer, which is a request to
 * send an invoice for us to pay (technically, this is referred to as a
 * `send_invoice` offer to distinguish a normal lightningd-offer(7)
 * offer).  It automatically enables the accepting and payment of
 * corresponding invoice message (we will only pay once, however!).
 *
 * Note that it creates two variants of the offer: a signed and an
 * unsigned one (which is smaller).  Wallets should accept both: the
 * current specification allows either.
 *
 * The *amount* parameter can be the string "any", which creates an offer
 * that can be paid with any amount (e.g. a donation).  Otherwise it can
 * be a positive value in millisatoshi precision; it can be a whole
 * number, or a whole number ending in *msat* or *sat*, or a number with
 * three decimal places ending in *sat*, or a number with 1 to 11 decimal
 * places ending in *btc*.
 *
 * The *description* is a short description of purpose of the offer,
 * e.g. *withdrawl from ATM*. This value is encoded into the resulting offer and is
 * viewable by anyone you expose this offer to. It must be UTF-8, and
 * cannot use *u* JSON escape codes.
 *
 * The *issuer* is another (optional) field exposed in the offer, and
 * reflects who is issuing this offer (i.e. you) if appropriate.
 *
 * The *label* field is an internal-use name for the offer, which can
 * be any UTF-8 string.
 *
 * The *absolute_expiry* is optionally the time the offer is valid until,
 * in seconds since the first day of 1970 UTC.  If not set, the offer
 * remains valid (though it can be deactivated by the issuer of course).
 * This is encoded in the offer.
 *
 * *refund_for* is a previous (paid) invoice of ours.  The
 * payment_preimage of this is encoded in the offer, and redemption
 * requires that the invoice we receive contains a valid signature using
 * that previous `payer_key`.
 */
export interface OfferoutRequest {
  amount: /* GUESSED */ string;
  description: /* GUESSED */ string;
  issuer?: /* GUESSED */ string;
  label?: /* GUESSED */ string;
  absolute_expiry?: /* GUESSED */ string;
  refund_for?: /* GUESSED */ string;
}

export interface OfferoutResponse {
  /**
   * whether this will pay a matching incoming invoice
   */
  active: boolean;
  /**
   * the bolt12 encoding of the offer
   */
  bolt12: string;
  /**
   * the bolt12 encoding of the offer, without a signature
   */
  bolt12_unsigned: string;
  /**
   * false if the offer already existed
   */
  created: boolean;
  /**
   * the (optional) user-specified label
   */
  label?: string;
  /**
   * the id of this offer (merkle hash of non-signature fields)
   */
  offer_id: string;
  /**
   * whether this expires as soon as it's paid out
   */
  single_use: boolean;
  /**
   * True if an incoming invoice has been paid
   */
  used: boolean;
}
