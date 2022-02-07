/**
 * lightning-withdraw -- Command for withdrawing funds from the internal wallet
 * 
 * **withdraw** *destination* *satoshi* \[*feerate*\] \[*minconf*\] \[*utxos*\] 
 * 
 */

/**
 * The **withdraw** RPC command sends funds from c-lightning's internal
 * wallet to the address specified in *destination*.
 * 
 * The address can be of any Bitcoin accepted type, including bech32.
 * 
 * *satoshi* is the amount to be withdrawn from the internal wallet
 * (expressed, as name suggests, in satoshi). The string *all* can be used
 * to specify withdrawal of all available funds. Otherwise, it is in
 * satoshi precision; it can be a whole number, a whole number ending in
 * *sat*, a whole number ending in *000msat*, or a number with 1 to 8
 * decimal places ending in *btc*.
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
export interface WithdrawRequest {
  destination: string;
  satoshi: number | string;
  feerate?: number | string;
  minconf?: number | string;
  utxos?: string[];
}

export interface WithdrawResponse {
    /**
     * the PSBT representing the unsigned transaction
     */
    psbt: string;
    /**
     * the fully signed bitcoin transaction
     */
    tx: string;
    /**
     * the transaction id of *tx*
     */
    txid: string;
}

