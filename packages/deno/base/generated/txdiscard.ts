/**
 * lightning-txdiscard -- Abandon a transaction from txprepare, release inputs
 *
 * **txdiscard** *txid*
 *
 */

/**
 * The **txdiscard** RPC command releases inputs which were reserved for
 * use of the *txid* from lightning-txprepare(7).
 */
export interface TxdiscardRequest {
  txid: /* GUESSED */ string;
}

export interface TxdiscardResponse {
  /**
   * the transaction id of *unsigned_tx*
   */
  txid: string;
  /**
   * the unsigned transaction
   */
  unsigned_tx: string;
}
