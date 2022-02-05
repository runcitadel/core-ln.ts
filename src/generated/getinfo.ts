/**
 * lightning-getinfo -- Command to receive all information about the c-lightning node.
 * 
 * **getinfo** 
 * 
 */

/**
 * The **getinfo** gives a summary of the current running node.
 * 
 * 
 * EXAMPLE JSON REQUEST
 * ------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "getinfo",
 *   "params": {}
 * }
 * ```
*/
export interface GetinfoRequest {
}

export interface GetinfoResponse {
  /**
   * The public key unique to this node
   */
  id: /* pubkey */ string;
  /**
   * The fun alias this node will advertize
   */
  alias: string;
  /**
   * The favorite RGB color this node will advertize
   */
  color: /* hex */ string;
  /**
   * The total count of peers, connected or with channels
   */
  num_peers: /* u32 */ number;
  /**
   * The total count of channels being opened
   */
  num_pending_channels: /* u32 */ number;
  /**
   * The total count of channels in normal state
   */
  num_active_channels: /* u32 */ number;
  /**
   * The total count of channels waiting for opening or closing transactions to be mined
   */
  num_inactive_channels: /* u32 */ number;
  /**
   * Identifies what bugs you are running into
   */
  version: string;
  /**
   * Identifies where you can find the configuration and other related files
   */
  "lightning-dir": string;
  /**
   * The highest block height we've learned
   */
  blockheight: /* u32 */ number;
  /**
   * represents the type of network on the node are working (e.g: `bitcoin`, `testnet`, or `regtest`)
   */
  network: string;
  msatoshi_fees_collected?: /* u64 */ number;
  /**
   * Total routing fees collected by this node
   */
  fees_collected_msat: /* msat */ number;
  /**
   * The addresses we announce to the world
   */
  address?: {
    /**
     * Type of connection
     */
    type: "dns" | "ipv4" | "ipv6" | "torv2" | "torv3" | "websocket";
    /**
     * port number
     */
    port: /* u16 */ number;
    [k: string]: unknown;
  }[];
  /**
   * The addresses we are listening on
   */
  binding?: {
    /**
     * Type of connection
     */
    type: "local socket" | "ipv4" | "ipv6" | "torv2" | "torv3";
    /**
     * address in expected format for **type**
     */
    address?: string;
    /**
     * port number
     */
    port?: /* u16 */ number;
    /**
     * socket filename (only if **type** is "local socket")
     */
    socket?: string;
  }[];
  /**
   * Bitcoind is not up-to-date with network.
   */
  warning_bitcoind_sync?: string;
  /**
   * Lightningd is still loading latest blocks from bitcoind.
   */
  warning_lightningd_sync?: string;
}

