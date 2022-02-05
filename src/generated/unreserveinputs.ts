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
  psbt: /* GUESSED */ string;
  reserve?: /* GUESSED */ string;
}

export interface UnreserveinputsResponse {
    reservations: Reservation[];
}

export interface Reservation {
    /**
     * whether the input is now reserved (may still be `true` if it was reserved for a long time)
     */
    reserved: boolean;
    /**
     * the transaction id
     */
    txid: string;
    /**
     * the output number which was reserved
     */
    vout: number;
    /**
     * whether the input was already reserved (usually `true`)
     */
    was_reserved: boolean;
}

