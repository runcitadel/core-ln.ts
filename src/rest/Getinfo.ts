export interface GetinfoResponse {
  /** id */
  id?: string;
  /** alias */
  alias?: string;
  /** color */
  color?: string;
  /** num_peers */
  num_peers?: string;
  /** num_pending_channels */
  num_pending_channels?: string;
  /** num_active_channels */
  num_active_channels?: string;
  /** num_inactive_channels */
  num_inactive_channels?: string;
  /** address */
  address?: {
    /** type */
    type?: string;
    /** address */
    address?: string;
    /** port */
    port?: string;
  };
  /** binding */
  binding?: {
    /** type */
    type?: string;
    /** address */
    address?: string;
    /** port */
    port?: string;
  };
  /** version */
  version?: string;
  /** blockheight */
  blockheight?: string;
  /** network */
  network?: string;
  /** msatoshi_fees_collected */
  msatoshi_fees_collected?: string;
  /** fees_collected_msat */
  fees_collected_msat?: string;
  /** api_version */
  api_version?: string;
}
