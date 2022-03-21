export interface NetworkEstimateFeesResponse {
  /** opening */
  opening?: number;
  /** mutual_close */
  mutual_close?: number;
  /** unilateral_close */
  unilateral_close?: number;
  /** delayed_to_us */
  delayed_to_us?: number;
  /** htlc_resolution */
  htlc_resolution?: number;
  /** penalty */
  penalty?: number;
  /** min_acceptable */
  min_acceptable?: number;
  /** max_acceptable */
  max_acceptable?: number;
}
