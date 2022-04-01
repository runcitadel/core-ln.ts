/**
 * lightning-listnodes -- Command to get the list of nodes in the known network.
 *
 * **listnodes** [*id*]
 *
 */

/**
 * The **listnodes** command returns nodes the node has learned about via gossip messages, or a single one if the node *id* was specified.
 *
 * EXAMPLE JSON REQUEST
 * ------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "listnodes",
 *   "params": {
 *     "id": "02e29856dab8ddd9044c18486e4cab79ec717b490447af2d4831e290e48d57638a"
 *   }
 * }
 * ```
 */
export interface ListnodesRequest {
  id?: string;
}

export interface ListnodesResponse {
  nodes: Node[];
}

export interface Node {
  /**
   * A node_announcement has been received for this node (UNIX timestamp)
   */
  last_timestamp?: number;
  /**
   * the public key of the node
   */
  nodeid: string;
  /**
   * The fun alias this node advertized
   */
  alias?: string;
  /**
   * The favorite RGB color this node advertized"
   */
  color?: string;
  /**
   * BOLT #9 features bitmap this node advertized
   */
  features?: string;
  addresses?: {
    /**
     * Type of connection
     */
    type: "dns" | "ipv4" | "ipv6" | "torv2" | "torv3" | "websocket";
    /**
     * port number
     */
    port: string;
    /**
     * address in expected format for **type**
     */
    address?: string;
  }[];
  option_will_fund?: {
    /**
     * the fixed fee for a lease (whole number of satoshis)
     */
    lease_fee_base_msat?: bigint;
    /**
     * the proportional fee in basis points (parts per 10,000) for a lease
     */
    lease_fee_basis?: number;
    /**
     * the onchain weight you'll have to pay for a lease
     */
    funding_weight: number;
    /**
     * the maximum base routing fee this node will charge during the lease
     */
    channel_fee_max_base_msat: bigint;
    /**
     * the maximum proportional routing fee this node will charge during the lease (in thousandths, not millionths like channel_update)
     */
    channel_fee_max_proportional_thousandths: number;
    /**
     * the lease as represented in the node_announcement
     */
    compact_lease: string;
  };
}
