/**
 * lightning-unreserveinputs -- Release reserved UTXOs
 * 
 * **unreserveinputs** *psbt* \[*reserve*\] 
 * 
 */

/**
 * The **unreserveinputs** RPC command releases (or reduces reservation)
 * on UTXOs which were previously marked as reserved, generally by
 * lightning-reserveinputs(7).
 * 
 * The inputs to unreserve are the inputs specified in the passed-in *psbt*.
 * 
 * If *reserve* is specified, it is the number of blocks to decrease
 * reservation by; default is 72.
*/
export interface UnreserveinputsRequest {
  psbt: string;
  reserve?: /* GUESSED */ string;
}

export interface UnreserveinputsResponse {
  reservations: {
    [k: string]: unknown;
  }[];
}

