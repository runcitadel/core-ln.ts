/**
 * lightning-fundpsbt -- Command to populate PSBT inputs from the wallet
 *
 * **fundpsbt** *satoshi* *feerate* *startweight* [*minconf*] [*reserve*] [*locktime*] [*min_witness_weight*] [*excess_as_change*]
 *
 */

/**
 * `fundpsbt` is a low-level RPC command which creates a PSBT using unreserved
 * inputs in the wallet, optionally reserving them as well.
 *
 * *satoshi* is the minimum satoshi value of the output(s) needed (or the
 * string "all" meaning use all unreserved inputs).  If a value, it can
 * be a whole number, a whole number ending in *sat*, a whole number
 * ending in *000msat*, or a number with 1 to 8 decimal places ending in
 * *btc*.
 *
 * *feerate* can be one of the feerates listed in lightning-feerates(7),
 * or one of the strings *urgent* (aim for next block), *normal* (next 4
 * blocks or so) or *slow* (next 100 blocks or so) to use lightningd's
 * internal estimates.  It can also be a *feerate* is a number, with an
 * optional suffix: *perkw* means the number is interpreted as
 * satoshi-per-kilosipa (weight), and *perkb* means it is interpreted
 * bitcoind-style as satoshi-per-kilobyte. Omitting the suffix is
 * equivalent to *perkb*.
 *
 * *startweight* is the weight of the transaction before *fundpsbt* has
 * added any inputs.
 *
 * *minconf* specifies the minimum number of confirmations that used
 * outputs should have. Default is 1.
 *
 * If *reserve* if not zero, then *reserveinputs* is called (successfully, with
 * *exclusive* true) on the returned PSBT for this number of blocks (default
 * 72 blocks if unspecified).
 *
 * *locktime* is an optional locktime: if not set, it is set to a recent
 * block height.
 *
 * *min_witness_weight* is an optional minimum weight to use for a UTXO's
 * witness. If the actual witness weight is greater than the provided minimum,
 * the actual witness weight will be used.
 *
 * *excess_as_change* is an optional boolean to flag to add a change output
 * for the excess sats.
 *
 * EXAMPLE USAGE
 * -------------
 *
 * Let's assume the caller is trying to produce a 100,000 satoshi output.
 *
 * First, the caller estimates the weight of the core (typically 42) and
 * known outputs of the transaction (typically (9 + scriptlen) * 4).  For
 * a simple P2WPKH it's a 22 byte scriptpubkey, so that's 124 weight.
 *
 * It calls "*fundpsbt* 100000sat slow 166", which succeeds, and returns
 * the *psbt* and *feerate_per_kw* it used, the *estimated_final_weight*
 * and any *excess_msat*.
 *
 * If *excess_msat* is greater than the cost of adding a change output,
 * the caller adds a change output randomly to position 0 or 1 in the
 * PSBT.  Say *feerate_per_kw* is 253, and the change output is a P2WPKH
 * (weight 124), the cost is around 31 sats.  With the dust limit disallowing
 * payments below 546 satoshis, we would only create a change output
 * if *excess_msat* was greater or equal to 31 + 546.
 */
export interface FundpsbtRequest {
  satoshi: /* GUESSED */ string;
  feerate: /* GUESSED */ string;
  startweight: /* GUESSED */ string;
  minconf?: /* GUESSED */ string;
  reserve?: /* GUESSED */ string;
  locktime?: /* GUESSED */ string;
  min_witness_weight?: /* GUESSED */ string;
  excess_as_change?: /* GUESSED */ string;
}

export interface FundpsbtResponse {
  /**
   * The 0-based output number where change was placed (only if parameter *excess_as_change*
   * was true and there was sufficient funds)
   */
  change_outnum?: number;
  /**
   * The estimated weight of the transaction once fully signed
   */
  estimated_final_weight: number;
  /**
   * The amount above *satoshi* which is available.  This could be zero, or dust; it will be
   * zero if *change_outnum* is also returned
   */
  excess_msat: number;
  /**
   * The feerate used to create the PSBT, in satoshis-per-kiloweight
   */
  feerate_per_kw: number;
  /**
   * Unsigned PSBT which fulfills the parameters given
   */
  psbt: string;
  /**
   * If *reserve* was true or a non-zero number, just as per lightning-reserveinputs(7)
   */
  reservations?: Reservation[];
}

export interface Reservation {
  /**
   * Whether this output is now reserved
   */
  reserved: boolean;
  /**
   * The blockheight the reservation will expire
   */
  reserved_to_block: number;
  /**
   * The txid of the transaction
   */
  txid: string;
  /**
   * The 0-based output number
   */
  vout: number;
  /**
   * Whether this output was previously reserved
   */
  was_reserved: boolean;
}
