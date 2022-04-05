/**
 * lightning-utxopsbt -- Command to populate PSBT inputs from given UTXOs
 *
 * **utxopsbt** *satoshi* *feerate* *startweight* *utxos* [*reserve*] [*reservedok*] [*locktime*] [*min_witness_weight*] [*excess_as_change*]
 *
 */

/**
 * *utxopsbt* is a low-level RPC command which creates a PSBT using unreserved
 * inputs in the wallet, optionally reserving them as well.
 *
 * It deliberately mirrors the parameters and output of
 * lightning-fundpsbt(7) except instead of an optional *minconf*
 * parameter to select unreserved outputs from the wallet, it takes a
 * compulsory list of outputs to use.
 *
 * *utxos* must be an array of "txid:vout", each of which must be
 * reserved or available: the total amount must be sufficient to pay for
 * the resulting transaction plus *startweight* at the given *feerate*,
 * with at least *satoshi* left over (unless *satoshi* is **all**, which
 * is equivalent to setting it to zero).
 *
 * If *reserve* if not zero, then *reserveinputs* is called (successfully, with
 * *exclusive* true) on the returned PSBT for this number of blocks (default
 * 72 blocks if unspecified).
 *
 * Unless *reservedok* is set to true (default is false) it will also fail
 * if any of the *utxos* are already reserved.
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
 */
export interface UtxopsbtRequest {
  satoshi: /* GUESSED */ string;
  feerate: /* GUESSED */ string;
  startweight: /* GUESSED */ string;
  utxos: /* GUESSED */ string;
  reserve?: /* GUESSED */ string;
  reservedok?: /* GUESSED */ string;
  locktime?: /* GUESSED */ string;
  min_witness_weight?: /* GUESSED */ string;
  excess_as_change?: /* GUESSED */ string;
}

export interface UtxopsbtResponse {
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
  excess_msat: bigint;
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
