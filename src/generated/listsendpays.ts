/**
 * lightning-listsendpays -- Low-level command for querying sendpay status
 * 
 * **listsendpays** \[*bolt11*\] \[*payment\_hash*\] \[*status*\] 
 * 
 */

/**
 * The **listsendpays** RPC command gets the status of all *sendpay*
 * commands (which is also used by the *pay* command), or with *bolt11* or
 * *payment_hash* limits results to that specific payment. You cannot
 * specify both. It is possible filter the payments also by *status*.
 * 
 * Note that in future there may be more than one concurrent *sendpay*
 * command per *pay*, so this command should be used with caution.
*/
export interface ListsendpaysRequest {
  bolt11?: /* GUESSED */ string;
  payment_hash?: /* GUESSED */ string;
  status?: /* GUESSED */ string;
}

export interface ListsendpaysResponse {
  payments: ({
    [k: string]: unknown;
  } & {
    [k: string]: unknown;
  } & {
    [k: string]: unknown;
  })[];
}

