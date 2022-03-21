export interface ChannelListOffersRequestQuery {
  /** List offer with only the offer with offer_id (if it exists) */
  offer_id: string;
  /** If specified, only active offers are returned */
  active_only: string;
}

export interface ChannelListOffersResponse {
  /** The hash of the offer */
  offer_id?: string;
  /** true if the offer is active */
  active?: boolean;
  /** true if single use was specified for the offer */
  single_use?: boolean;
  /** The bolt12 offer, starting with "lno1" */
  bolt12?: string;
  /** The bolt12 encoding of the offer, without signature */
  bolt12_unsigned?: string;
  /** true if an associated invoice has been paid */
  used?: boolean;
  /** The optional user specified label */
  label?: string;
}
