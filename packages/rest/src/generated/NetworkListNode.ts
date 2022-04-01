export interface NetworkListNodeResponse {
  /** nodeid */
  nodeid?: string;
  /** alias */
  alias?: string;
  /** color */
  color?: string;
  /** last_timestamp */
  last_timestamp?: number;
  /** globalfeatures */
  globalfeatures?: string;
  /** features */
  features?: string;
  /** address */
  address?: {
    /** type */
    type?: string;
    /** address */
    address?: string;
    /** port */
    port?: string;
  };
}
