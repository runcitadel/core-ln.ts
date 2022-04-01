export interface NetworkFeeRatesResponse {
  /** perkb */
  perkb?: {
    /** urgent */
    urgent?: number;
    /** normal */
    normal?: number;
    /** slow */
    slow?: number;
    /** min_acceptable */
    min_acceptable?: number;
    /** max_acceptable */
    max_acceptable?: number;
  };
  /** onchain_fee_estimates */
  onchain_fee_estimates?: {
    /** opening_channel_satoshis */
    opening_channel_satoshis?: number;
    /** mutual_close_satoshis */
    mutual_close_satoshis?: number;
    /** unilateral_close_satoshis */
    unilateral_close_satoshis?: number;
  };
}
