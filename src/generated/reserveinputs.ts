/**
 * lightning-reserveinputs -- Construct a transaction and reserve the UTXOs it spends
 * 
 * **reserveinputs** *psbt* \[*exclusive*\] \[*reserve*\] 
 * 
 */

/**
 * The **reserveinputs** RPC command places (or increases) reservations on any
 * inputs specified in *psbt* which are known to lightningd.  It will fail
 * with an error if any of the inputs are known to be spent, and ignore inputs
 * which are unknown.
 * 
 * Normally the command will fail (with no reservations made) if an input
 * is already reserved.  If *exclusive* is set to *False*, then existing
 * reservations are simply extended, rather than causing failure.
 * 
 * By default, reservations are for the next 72 blocks (approximately 6
 * hours), but this can be changed by setting *reserve*.
*/
export interface ReserveinputsRequest {
  psbt: /* GUESSED */ string;
  exclusive?: /* GUESSED */ string;
  reserve?: /* GUESSED */ string;
}

export interface ReserveinputsResponse {
    reservations: Reservation[];
}

export interface Reservation {
    /**
     * whether the input is now reserved
     */
    reserved: boolean;
    /**
     * what blockheight the reservation will expire
     */
    reserved_to_block: number;
    /**
     * the transaction id
     */
    txid: string;
    /**
     * the output number which was reserved
     */
    vout: number;
    /**
     * whether the input was already reserved
     */
    was_reserved: boolean;
}

