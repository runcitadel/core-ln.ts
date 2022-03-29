export interface WithdrawRequestBody {
  /** Any Bitcoin accepted type, including bech32 */
  address: string;
  /** Amount to be withdrawn. The string "all" can be used to specify withdrawal of all available funds */
  satoshis: string;
  /** urgent, normal or slow */
  feeRate: string;
  /** minimum number of confirmations that used outputs should have */
  minConf: number;
  /** Specifies the utxos to be used to fund the channel, as an array of "txid:vout" */
  utxos: string;
}

export interface WithdrawResponse {
  /** tx */
  tx?: string;
  /** txid */
  txid?: string;
}
