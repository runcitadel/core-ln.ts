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
     * The addresses we announce to the world
     */
    address?: Address[];
    /**
     * The fun alias this node will advertize
     */
    alias: string;
    /**
     * The addresses we are listening on
     */
    binding?: Binding[];
    /**
     * The highest block height we've learned
     */
    blockheight: number;
    /**
     * The favorite RGB color this node will advertize
     */
    color: string;
    /**
     * Total routing fees collected by this node
     */
    fees_collected_msat: number;
    /**
     * The public key unique to this node
     */
    id: string;
    /**
     * Identifies where you can find the configuration and other related files
     */
    "lightning-dir": string;
    /**
     * represents the type of network on the node are working (e.g: `bitcoin`, `testnet`, or
     * `regtest`)
     */
    network: string;
    /**
     * The total count of channels in normal state
     */
    num_active_channels: number;
    /**
     * The total count of channels waiting for opening or closing transactions to be mined
     */
    num_inactive_channels: number;
    /**
     * The total count of peers, connected or with channels
     */
    num_peers: number;
    /**
     * The total count of channels being opened
     */
    num_pending_channels: number;
    /**
     * Identifies what bugs you are running into
     */
    version: string;
    /**
     * Bitcoind is not up-to-date with network.
     */
    warning_bitcoind_sync?: string;
    /**
     * Lightningd is still loading latest blocks from bitcoind.
     */
    warning_lightningd_sync?: string;
}

export interface Address {
    /**
     * port number
     */
    port: number;
    /**
     * Type of connection
     */
    type: AddressType;
}

/**
 * Type of connection
 */
export enum AddressType {
    DNS = "dns",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6",
    Torv2 = "torv2",
    Torv3 = "torv3",
    Websocket = "websocket",
}

export interface Binding {
    /**
     * address in expected format for **type**
     */
    address?: string;
    /**
     * port number
     */
    port?: number;
    /**
     * socket filename (only if **type** is "local socket")
     */
    socket?: string;
    /**
     * Type of connection
     */
    type: BindingType;
}

/**
 * Type of connection
 */
export enum BindingType {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6",
    LocalSocket = "local socket",
    Torv2 = "torv2",
    Torv3 = "torv3",
}

