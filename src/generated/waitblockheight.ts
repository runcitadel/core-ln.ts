/**
 * lightning-waitblockheight -- Command for waiting for blocks on the blockchain
 * 
 * **waitblockheight** *blockheight* \[*timeout*\] 
 * 
 */

/**
 * The **waitblockheight** RPC command waits until the blockchain
 * has reached the specified *blockheight*.
 * It will only wait up to *timeout* seconds (default 60).
 * 
 * If the *blockheight* is a present or past block height, then this
 * command returns immediately.
*/
export interface WaitblockheightRequest {
  blockheight: /* GUESSED */ string;
  timeout?: /* GUESSED */ string;
}

export interface WaitblockheightResponse {
    /**
     * The current block height (>= *blockheight* parameter)
     */
    blockheight: number;
}

