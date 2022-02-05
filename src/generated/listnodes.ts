/**
 * lightning-listnodes -- Command to get the list of nodes in the known network.
 * 
 * **listnodes** \[*id*\] 
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
  id?: /* GUESSED */ string;
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
}

