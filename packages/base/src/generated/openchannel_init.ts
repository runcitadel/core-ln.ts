/**
 * lightning-openchannel\_init -- Command to initiate a channel to a peer
 * 
 * **openchannel_init** *id* *amount* *initalpsbt* [*commitment_feerate*] [*funding_feerate*] [*announce*] [*close_to*] [*request_amt*] [*compact_lease*] 
 * 
 */

/**
 * `openchannel_init` is a low level RPC command which initiates a channel
 * open with a specified peer. It uses the openchannel protocol
 * which allows for interactive transaction construction.
 * 
 * *id* is the node id of the remote peer.
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
 * *commitment_feerate* is an optional field. Sets the feerate for
 * commitment transactions: see **fundchannel**.
 * 
 * *funding_feerate* is an optional field. Sets the feerate for the
 * funding transaction. Defaults to 'opening' feerate.
 * 
 * *announce* is an optional field. Whether or not to announce this channel.
 * 
 * *close_to* is a Bitcoin address to which the channel funds should be
 * sent on close. Only valid if both peers have negotiated
 * `option_upfront_shutdown_script`.
 * 
 * *request_amt* is an amount of liquidity you'd like to lease from the peer.
 * If peer supports `option_will_fund`, indicates to them to include this
 * much liquidity into the channel. Must also pass in *compact_lease*.
 * 
 * *compact_lease* is a compact represenation of the peer's expected
 * channel lease terms. If the peer's terms don't match this set, we will
 * fail to open the channel.
 * 
*/
export interface OpenchannelInitRequest {
  id: /* GUESSED */ string;
  amount: /* GUESSED */ string;
  initalpsbt: /* GUESSED */ string;
  commitment_feerate?: /* GUESSED */ string;
  funding_feerate?: /* GUESSED */ string;
  announce?: /* GUESSED */ string;
  close_to?: /* GUESSED */ string;
  request_amt?: /* GUESSED */ string;
  compact_lease?: /* GUESSED */ string;
}

export interface OpenchannelInitResponse {
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
     * the (incomplete) PSBT of the funding transaction
     */
    psbt: string;
}

