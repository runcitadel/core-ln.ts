/**
 * lightning-multiwithdraw -- Command for withdrawing to multiple addresses
 *
 * **multiwithdraw** *outputs*  [*feerate*] [*minconf*] [*utxos*]
 *
 */

/**
 * The **multiwithdraw** RPC command sends funds from Core Lightning's internal
 * wallet to the addresses specified in *outputs*,
 * which is an array containing objects of the form `{address: amount}`.
 * The `amount` may be the string *"all"*, indicating that all onchain funds
 * be sent to the specified address.
 * Otherwise, it is in satoshi precision;
 * it can be
 * a whole number,
 * a whole number ending in *sat*,
 * a whole number ending in *000msat*,
 * or a number with 1 to 8 decimal places ending in *btc*.
 *
 * *feerate* is an optional feerate to use. It can be one of the strings
 * *urgent* (aim for next block), *normal* (next 4 blocks or so) or *slow*
 * (next 100 blocks or so) to use lightningd's internal estimates: *normal*
 * is the default.
 *
 * Otherwise, *feerate* is a number, with an optional suffix: *perkw* means
 * the number is interpreted as satoshi-per-kilosipa (weight), and *perkb*
 * means it is interpreted bitcoind-style as satoshi-per-kilobyte. Omitting
 * the suffix is equivalent to *perkb*.
 *
 * *minconf* specifies the minimum number of confirmations that used
 * outputs should have. Default is 1.
 *
 * *utxos* specifies the utxos to be used to be withdrawn from, as an array
 * of "txid:vout". These must be drawn from the node's available UTXO set.
 */
export interface MultiwithdrawRequest {
  outputs: /* GUESSED */ string;
  feerate?: /* GUESSED */ string;
  minconf?: /* GUESSED */ string;
  utxos?: /* GUESSED */ string;
}

export interface MultiwithdrawResponse {
  /**
   * The raw transaction which was sent
   */
  tx: string;
  /**
   * The txid of the **tx**
   */
  txid: string;
}
