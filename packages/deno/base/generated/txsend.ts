/**
 * lightning-txsend -- Command to sign and send transaction from txprepare
 *
 * **txsend** *txid*
 *
 */

/**
 * The **txsend** RPC command signs and broadcasts a transaction created by
 * **txprepare**.
 */
export interface TxsendRequest {
  txid: /* GUESSED */ string;
}

export interface TxsendResponse {
  /**
   * the completed PSBT representing the signed transaction
   */
  psbt: string;
  /**
   * the fully signed transaction
   */
  tx: string;
  /**
   * the transaction id of *tx*
   */
  txid: string;
}
