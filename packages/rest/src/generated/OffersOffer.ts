export interface OffersOfferRequestBody {
  /** Specify the amount as 'any' or '<amount>sats'. E.g. '75sats' */
  amount: string;
  /** Description of the offer, to be included on the invoice */
  description: string;
  /** Reflects who is issuing this offer */
  vendor: string;
  /** Internal-use name for the offer, which can be any UTF-8 string */
  label: string;
  /** The presence of quantity_min or quantity_max indicates that the invoice can specify more than one of the items within this (inclusive) range */
  quantity_min: number;
  /** The presence of quantity_min or quantity_max indicates that the invoice can specify more than one of the items within this (inclusive) range */
  quantity_max: number;
  /** The time the offer is valid until, in seconds since the first day of 1970 UTC */
  absolute_expiry: string;
  /** Means invoice  is  expected at regular intervals. The argument is a positive number followed by one of "seconds", "minutes", "hours", "days", "weeks", "months" or "years" e.g. "2weeks". */
  recurrence: string;
  /** Time in seconds since the first day of 1970 UTC. This indicates when the first period begins. The "@" prefix means that the invoice must start by paying the first period e.g. "@1609459200" */
  recurrence_base: string;
  /** Optional argument of form start of a period in which an invoice and payment is valid */
  recurrence_paywindow: string;
  /** Optional argument to indicate the maximum period which exists for recurrence e.g. "12" means there are 13 periods of recurrence */
  recurrence_limit: string;
  /** Indicates that the offer is only valid once */
  single_use: boolean;
}

export interface OffersOfferResponse {
  /** The hash of the offer */
  offer_id?: string;
  /** true if the offer is active */
  active?: string;
  /** true if single use was specified for the offer */
  single_use?: boolean;
  /** The bolt12 offer, starting with "lno1" */
  bolt12?: string;
  /** The bolt12 encoding of the offer, without a signature */
  bolt12_unsigned?: string;
  /** true if an associated invoice has been paid */
  used?: boolean;
  /** false if the offer already existed */
  created?: boolean;
  /** the (optional) user-specified label */
  label?: string;
}
