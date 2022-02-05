/**
 * lightning-listfunds -- Command showing all funds currently managed by the c-lightning node
 * 
 * **listfunds** \[*spent*\] 
 * 
 */

/**
 * The **listfunds** RPC command displays all funds available, either in
 * unspent outputs (UTXOs) in the internal wallet or funds locked in
 * currently open channels.
 * 
 * *spent* is a boolean: if true, then the *outputs* will include spent outputs
 * in addition to the unspent ones. Default is false.
*/
export interface ListfundsRequest {
  spent?: /* GUESSED */ string;
}

export interface ListfundsResponse {
  outputs: ({
    [k: string]: unknown;
  } & {
    [k: string]: unknown;
  })[];
  channels: ({
    [k: string]: unknown;
  } & {
    [k: string]: unknown;
  })[];
}

