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
    channels: Channel[];
    outputs:  Output[];
}

export interface Channel {
    /**
     * total channel value
     */
    amount_msat: bigint;
    /**
     * whether the channel peer is connected
     */
    connected: boolean;
    /**
     * the 0-based index of the output in the funding transaction
     */
    funding_output: number;
    /**
     * funding transaction id
     */
    funding_txid: string;
    /**
     * available satoshis on our node’s end of the channel
     */
    our_amount_msat: bigint;
    /**
     * the peer with which the channel is opened
     */
    peer_id: string;
    /**
     * the channel state, in particular "CHANNELD_NORMAL" means the channel can be used normally
     */
    state: State;
}

/**
 * the channel state, in particular "CHANNELD_NORMAL" means the channel can be used normally
 */
export enum State {
    AwaitingUnilateral = "AWAITING_UNILATERAL",
    ChanneldAwaitingLockin = "CHANNELD_AWAITING_LOCKIN",
    ChanneldNormal = "CHANNELD_NORMAL",
    ChanneldShuttingDown = "CHANNELD_SHUTTING_DOWN",
    ClosingdComplete = "CLOSINGD_COMPLETE",
    ClosingdSigexchange = "CLOSINGD_SIGEXCHANGE",
    DualopendAwaitingLockin = "DUALOPEND_AWAITING_LOCKIN",
    DualopendOpenInit = "DUALOPEND_OPEN_INIT",
    FundingSpendSeen = "FUNDING_SPEND_SEEN",
    Onchain = "ONCHAIN",
    Openingd = "OPENINGD",
}

export interface Output {
    /**
     * the bitcoin address of the output
     */
    address?: string;
    /**
     * the amount of the output
     */
    amount_msat: bigint;
    /**
     * the index within *txid*
     */
    output: number;
    /**
     * the redeemscript, only if it's p2sh-wrapped
     */
    redeemscript?: string;
    /**
     * the scriptPubkey of the output
     */
    scriptpubkey: string;
    status:       Status;
    /**
     * the ID of the spendable transaction
     */
    txid:     string;
    reserved?: boolean;
    /**
     * Block height where reservation will expire
     */
    reserved_to_block?: number;
    /**
     * Block height where it was confirmed
     */
    blockheight?: number;
}

export enum Status {
    Confirmed = "confirmed",
    Spent = "spent",
    Unconfirmed = "unconfirmed",
}

