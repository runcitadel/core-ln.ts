/**
 * lightning-listpeers -- Command returning data on connected lightning nodes
 *
 * **listpeers** [*id*] [*level*]
 */

/**
 * The **listpeers** RPC command returns data on nodes that are connected
 * or are not connected but have open channels with this node.
 *
 * Once a connection to another lightning node has been established, using
 * the **connect** command, data on the node can be returned using
 * **listpeers** and the *id* that was used with the **connect** command.
 *
 * If no *id* is supplied, then data on all lightning nodes that are
 * connected, or not connected but have open channels with this node, are
 * returned.
 *
 * Supplying *id* will filter the results to only return data on a node
 * with a matching *id*, if one exists.
 *
 * Supplying *level* will show log entries related to that peer at the
 * given log level. Valid log levels are "io", "debug", "info", and
 * "unusual".
 *
 * If a channel is open with a node and the connection has been lost, then
 * the node will still appear in the output of the command and the value of
 * the *connected* attribute of the node will be "false".
 *
 * The channel will remain open for a set blocktime, after which if the
 * connection has not been re-established, the channel will close and the
 * node will no longer appear in the command output.
 */
export interface ListpeersRequest {
  id?: /* GUESSED */ string;
  level?: /* GUESSED */ string;
}

export interface ListpeersResponse {
  peers: Peer[];
}

export type Peer = {
  channels: Channel[];
  /**
   * True if the peer is currently connected
   */
  connected: false;
  /**
   * the public key of the peer
   */
  id: string;
  /**
   * if *level* is specified, logs for this peer
   */
  log?: Log[];
} | {
  channels: Channel[];
  /**
   * True if the peer is currently connected
   */
  connected: true;
  /**
   * the public key of the peer
   */
  id: string;
  /**
   * if *level* is specified, logs for this peer
   */
  log?: Log[];
  netaddr: [string];
  /** The public IPv4/6 address the peer sees us from, e.g. 1.2.3.4:1234 */
  remote_addr: string;
  /** bitmap of BOLT #9 features from peer's INIT message */
  features: string;
}

export interface Channel {
  alias?: Alias;
  /**
   * The full channel_id
   */
  channel_id?: string;
  /**
   * scriptPubkey which we have to close to if we mutual close
   */
  close_to?: string;
  /**
   * Who initiated the channel close
   */
  closer?: Closer;
  /**
   * minimum amount for an output on the channel transactions
   */
  dust_limit_msat?: number;
  features: Feature[];
  /**
   * amount we charge to use the channel
   */
  fee_base_msat?: number;
  /**
   * amount we charge to use the channel in parts-per-million
   */
  fee_proportional_millionths?: number;
  /**
   * Feerates for the current tx
   */
  feerate?: Feerate;
  funding?: Funding;
  /**
   * The 0-based output number of the funding transaction which opens the channel
   */
  funding_outnum?: number;
  /**
   * ID of the funding transaction
   */
  funding_txid?: string;
  /**
   * current HTLCs in this channel
   */
  htlcs?: Htlc[];
  /**
   * Total amount of successful incoming payment attempts
   */
  in_fulfilled_msat?: number;
  /**
   * Total amount of incoming payment attempts
   */
  in_offered_msat?: number;
  /**
   * Number of successful incoming payment attempts
   */
  in_payments_fulfilled?: number;
  /**
   * Number of incoming payment attempts
   */
  in_payments_offered?: number;
  /**
   * Current candidate funding transactions (only for dual-funding)
   */
  inflight?: Inflight[];
  /**
   * For inflight opens, the first feerate used to initiate the channel open
   */
  initial_feerate?: string;
  /**
   * For inflight opens, the most recent feerate used on the channel open
   */
  last_feerate?: string;
  /**
   * Maximum number of incoming HTLC we will accept at once
   */
  max_accepted_htlcs?: number;
  /**
   * most amount owed to us ever
   */
  max_to_us_msat?: number;
  /**
   * max amount accept in a single payment
   */
  max_total_htlc_in_msat?: number;
  /**
   * the maximum amount HTLC we will send
   */
  maximum_htlc_out_msat?: number;
  /**
   * least amount owed to us ever
   */
  min_to_us_msat?: number;
  /**
   * the minimum amount HTLC we accept
   */
  minimum_htlc_in_msat?: number;
  /**
   * the minimum amount HTLC we will send
   */
  minimum_htlc_out_msat?: number;
  /**
   * For inflight opens, the next feerate step we'll use for the channel open
   */
  next_fee_step?: number;
  /**
   * For inflight opens, the next feerate we'll use for the channel open
   */
  next_feerate?: string;
  /**
   * Who initiated the channel
   */
  opener: Closer;
  /**
   * minimum they insist we keep in channel
   */
  our_reserve_msat?: number;
  /**
   * the number of blocks before we can take our funds if we unilateral close
   */
  our_to_self_delay?: number;
  /**
   * Total amount of successful outgoing payment attempts
   */
  out_fulfilled_msat?: number;
  /**
   * Total amount of outgoing payment attempts
   */
  out_offered_msat?: number;
  /**
   * Number of successful outgoing payment attempts
   */
  out_payments_fulfilled?: number;
  /**
   * Number of outgoing payment attempts
   */
  out_payments_offered?: number;
  /**
   * The current subdaemon controlling this connection
   */
  owner?: string;
  /**
   * if False, we will not announce this channel
   */
  private?: boolean;
  /**
   * total peer could send through channel
   */
  receivable_msat?: number;
  /**
   * The txid we would use if we went onchain now
   */
  scratch_txid?: string;
  /**
   * The short_channel_id (once locked in)
   */
  short_channel_id?: string;
  /**
   * total we could send through channel
   */
  spendable_msat?: number;
  /**
   * the channel state, in particular "CHANNELD_NORMAL" means the channel can be used normally
   */
  state: State;
  /**
   * Prior state changes
   */
  state_changes?: StateChange[];
  status?: string[];
  /**
   * minimum we insist they keep in channel
   */
  their_reserve_msat?: number;
  /**
   * the number of blocks before they can take their funds if they unilateral close
   */
  their_to_self_delay?: number;
  /**
   * how much of channel is owed to us
   */
  to_us_msat?: number;
  /**
   * total amount in the channel
   */
  total_msat?: number;
}

export interface Alias {
  /**
   * An alias assigned by this node to this channel, used for outgoing payments
   */
  local?: string;
  /**
   * An alias assigned by the remote node to this channel, usable in routehints and invoices
   */
  remote?: string;
}

/**
 * Who initiated the channel close
 *
 * Who initiated the channel
 */
export enum Closer {
  Local = "local",
  Remote = "remote",
}

/**
 * BOLT #9 features which apply to this channel
 */
export enum Feature {
  OptionAnchorOutputs = "option_anchor_outputs",
  OptionStaticRemotekey = "option_static_remotekey",
  OptionZeroconf = "option_zeroconf",
}

/**
 * Feerates for the current tx
 */
export interface Feerate {
  /**
   * Feerate per 1000 virtual bytes
   */
  perkb: number;
  /**
   * Feerate per 1000 weight (i.e kSipa)
   */
  perkw: number;
}

export interface Funding {
  /**
   * Amount we paid peer at open
   */
  fee_paid_msat?: number;
  /**
   * Amount we were paid by peer at open
   */
  fee_rcvd_msat?: number;
  /**
   * Amount of channel we funded
   */
  local_funds_msat: number;
  /**
   * Amount of channel we funded (deprecated)
   */
  local_msat?: number;
  /**
   * Amount pushed from opener to peer
   */
  pushed_msat?: number;
  /**
   * Amount of channel they funded
   */
  remote_funds_msat: number;
  /**
   * Amount of channel they funded (deprecated)
   */
  remote_msat?: number;
}

export type Htlc = {
  /**
   * Amount send/received for this HTLC
   */
  amount_msat: number;
  /**
   * Whether it came from peer, or is going to peer
   */
  direction: Direction.Out;
  /**
   * Block this HTLC expires at
   */
  expiry: number;
  /**
   * Unique ID for this htlc on this channel in this direction
   */
  id: number;
  /**
   * if this is too small to enforce onchain
   */
  local_trimmed?: boolean;
  /**
   * the hash of the payment_preimage which will prove payment
   */
  payment_hash: string;
  /**
   * set if this HTLC is currently waiting on a hook (and shows what plugin)
   */
  status?: string;
  /**
   * Status of the HTLC
   */
  state: OutState;
} | {
  /**
   * Amount send/received for this HTLC
   */
  amount_msat: number;
  /**
   * Whether it came from peer, or is going to peer
   */
  direction: Direction.In;
  /**
   * Block this HTLC expires at
   */
  expiry: number;
  /**
   * Unique ID for this htlc on this channel in this direction
   */
  id: number;
  /**
   * if this is too small to enforce onchain
   */
  local_trimmed?: boolean;
  /**
   * the hash of the payment_preimage which will prove payment
   */
  payment_hash: string;
  /**
   * set if this HTLC is currently waiting on a hook (and shows what plugin)
   */
  status?: string;
  state: OutState;
};

/**
 * Whether it came from peer, or is going to peer
 */
export enum Direction {
  In = "in",
  Out = "out",
}

export interface Inflight {
  /**
   * The feerate for this funding transaction in per-1000-weight, with "kpw" appended
   */
  feerate: string;
  /**
   * The 0-based output number of the funding transaction which opens the channel
   */
  funding_outnum: number;
  /**
   * ID of the funding transaction
   */
  funding_txid: string;
  /**
   * amount we have in the channel
   */
  our_funding_msat: number;
  /**
   * The commitment transaction txid we would use if we went onchain now
   */
  scratch_txid: string;
  /**
   * total amount in the channel
   */
  total_funding_msat: number;
}

/**
 * the channel state, in particular "CHANNELD_NORMAL" means the channel can be used
 * normally
 *
 * New state
 *
 * Previous state
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

export enum OutState {
  SentAddHtlc = "SENT_ADD_HTLC",
  SentAddCommit = "SENT_ADD_COMMIT",
  RcvdAddRecovation = "RCVD_ADD_REVOCATION",
  RcvdAddAckCommit = "RCVD_ADD_ACK_COMMIT",
  SentAddAckRecovation = "SENT_ADD_ACK_REVOCATION",
  RcvdRemoveHtlc = "RCVD_REMOVE_HTLC",
  RcvdRemoveCommit = "RCVD_REMOVE_COMMIT",
  SentRemoveRevocation = "SENT_REMOVE_REVOCATION",
  SentRemoveAckCommit = "SENT_REMOVE_ACK_COMMIT",
  RcvdRemoveAckRevocation = "RCVD_REMOVE_ACK_REVOCATION",
}

export enum InState {
  RcvdAddHtlc = "RCVD_ADD_HTLC",
  RcvdAddCommit = "RCVD_ADD_COMMIT",
  SendAddRecovation = "SENT_ADD_REVOCATION",
  SentAddAckCommit = "SENT_ADD_ACK_COMMIT",
  RcvdAddAckRevocation = "RCVD_ADD_ACK_REVOCATION",
  SentRemoveHtlc = "SENT_REMOVE_HTLC",
  SentRemoveCommit = "SENT_REMOVE_COMMIT",
  RcvdRemoveRevocation = "RCVD_REMOVE_REVOCATION",
  RcvdRemoveAckCommit = "RCVD_REMOVE_ACK_COMMIT",
  SentRemoveAckRevocation = "SENT_REMOVE_ACK_REVOCATION"
}

export interface StateChange {
  /**
   * What caused the change
   */
  cause: Cause;
  /**
   * Human-readable explanation
   */
  message: string;
  /**
   * New state
   */
  new_state: State;
  /**
   * Previous state
   */
  old_state: State;
  /**
   * UTC timestamp of form YYYY-mm-ddTHH:MM:SS.%03dZ
   */
  timestamp: string;
}

/**
 * What caused the change
 */
export enum Cause {
  Local = "local",
  Onchain = "onchain",
  Protocol = "protocol",
  Remote = "remote",
  Unknown = "unknown",
  User = "user",
}

export type Log = {
  type: Type.Skipped;
  num_skipped: number;
} | {
  type: Type.Broken | Type.Unusual | Type.Info | Type.Debug;
  /** UNIX timestamp with 9 decimal places */
  time: string;
  /** The particular logbook this was found in */
  source: string;
  /** The actual log message */
  log: string;
  /** The peer this is associated with */
  node_id: string;
} | {
  type: Type.IoIn | Type.IoOut;
  /** UNIX timestamp with 9 decimal places */
  time: string;
  /** The particular logbook this was found in */
  source: string;
  /** The actual log message */
  log: string;
  /** The peer this is associated with */
  node_id: string;
  /** The IO which occurred */
  data: string;
};

export enum Type {
  Broken = "BROKEN",
  Debug = "DEBUG",
  Info = "INFO",
  IoIn = "IO_IN",
  IoOut = "IO_OUT",
  Skipped = "SKIPPED",
  Unusual = "UNUSUAL",
}
