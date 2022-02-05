/**
 * lightning-listforwards -- Command showing all htlcs and their information
 * 
 * **listforwards** \[*status*\] \[*in_channel*\] \[*out_channel*\] 
 * 
 */

/**
 * The **listforwards** RPC command displays all htlcs that have been
 * attempted to be forwarded by the c-lightning node.
 * 
 * If *status* is specified, then only the forwards with the given status are returned.
 * *status* can be either *offered* or *settled* or *failed* or *local_failed*
 * 
 * If *in_channel* or *out_channel* is specified, then only the matching forwards
 * on the given in/out channel are returned.
*/
export interface ListforwardsRequest {
  status?: /* GUESSED */ string;
  in_channel?: /* GUESSED */ string;
  out_channel?: /* GUESSED */ string;
}

export interface ListforwardsResponse {
  forwards: ({
    [k: string]: unknown;
  } & {
    [k: string]: unknown;
  } & {
    [k: string]: unknown;
  })[];
}

