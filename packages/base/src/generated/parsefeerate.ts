/**
 * lightning-parsefeerate -- Command for parsing a feerate string to a feerate
 *
 * **parsefeerate** *feerate_str*
 *
 */

/**
 * The **parsefeerate** command returns the current feerate for any valid
 * *feerate_str*. This is useful for finding the current feerate that a
 * **fundpsbt** or **utxopsbt** command might use.
 */
export interface ParsefeerateRequest {
  feerate_str: /* GUESSED */ string;
}

export interface ParsefeerateResponse {
  /**
   * Value of *feerate_str* in kilosipa
   */
  perkw?: number;
}
