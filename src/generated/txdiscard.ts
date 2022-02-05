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
   * the unsigned transaction
   */
  unsigned_tx: /* hex */ string;
  /**
   * the transaction id of *unsigned_tx*
   */
  txid: /* txid */ string;
  [k: string]: unknown;
}

