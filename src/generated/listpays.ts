/**
 * lightning-listpays -- Command for querying payment status
 * 
 * **listpays** \[*bolt11*\] \[*payment_hash*\] \[*status*\] 
 * 
 */

/**
 * The **listpay** RPC command gets the status of all *pay* commands, or a
 * single one if either *bolt11* or *payment_hash* was specified.
 * It is possible filter the payments also by *status*.
*/
export interface ListpaysRequest {
  bolt11?: /* GUESSED */ string;
  payment_hash?: /* GUESSED */ string;
  status?: /* GUESSED */ string;
}

export interface ListpaysResponse {
  pays: ({
    [k: string]: unknown;
  } & {
    [k: string]: unknown;
  } & {
    [k: string]: unknown;
  })[];
}

