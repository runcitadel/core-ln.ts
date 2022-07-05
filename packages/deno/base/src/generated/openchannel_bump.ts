/**
 * lightning-openchannel_bump -- Command to initiate a channel RBF
 *
 * **openchannel_bump** *channel_id* *amount* *initalpsbt* [*funding_feerate*]
 *
 */

/**
 * `openchannel_bump` is a RPC command which initiates a channel
 * RBF (Replace-By-Fee) for the specified channel. It uses the openchannel protocol
 * which allows for interactive transaction construction.
 *
 * *id* is the id of the channel to RBF.
 *
 * *amount* is the satoshi value that we will contribute to the channel.
 * This value will be _added_ to the provided PSBT in the output which is
 * encumbered by the 2-of-2 script for this channel.
 *
 * *initialpsbt* is the funded, incomplete PSBT that specifies the UTXOs and
 * change output for our channel contribution. It can be updated,
 * see `openchannel_update`; *initialpsbt* must have at least one input.
 * Must have the Non-Witness UTXO (PSBT_IN_NON_WITNESS_UTXO) set for
 * every input. An error (code 309) will be returned if this requirement
 * is not met.
 *
 * *funding_feerate* is an optional field. Sets the feerate for the
 * funding transaction. Defaults to 1/64th greater than the last
 * feerate used for this channel.
 *
 * Warning: bumping a leased channel will lose the lease.
 */
export interface OpenchannelBumpRequest {
  channel_id: /* GUESSED */ string;
  amount: /* GUESSED */ string;
  initalpsbt: /* GUESSED */ string;
  funding_feerate?: /* GUESSED */ string;
}

export interface OpenchannelBumpResponse {
  /**
   * the channel id of the channel
   */
  channel_id: string;
  /**
   * whether the *psbt* is complete
   */
  commitments_secured: boolean;
  /**
   * the serial_id of the funding output in the *psbt*
   */
  funding_serial: number;
  /**
   * the (incomplete) PSBT of the RBF transaction
   */
  psbt: string;
}
