/**
 * lightning-connect -- Command for connecting to another lightning node
 * 
 * **connect** *id* [*host*] [*port*] 
 * 
 */

/**
 * The **connect** RPC command establishes a new connection with another
 * node in the Lightning Network.
 * 
 * *id* represents the target node's public key. As a convenience, *id* may
 * be of the form *id@host* or *id@host:port*. In this case, the *host* and
 * *port* parameters must be omitted.
 * 
 * *host* is the peer's hostname or IP address.
 * 
 * If not specified, the *port* defaults to 9735.
 * 
 * If *host* is not specified (or doesn't work), the connection will be attempted to an IP
 * belonging to *id* obtained through gossip with other already connected
 * peers.
 * This can fail if your C-lightning node is a fresh install that has not
 * connected to any peers yet (your node has no gossip yet),
 * or if the target *id* is a fresh install that has no channels yet
 * (nobody will gossip about a node until it has one published channel).
 * 
 * If *host* begins with a *\/* it is interpreted as a local path, and the
 * connection will be made to that local socket (see **bind-addr** in
 * lightningd-config(5)).
 * 
 * Connecting to a node is just the first step in opening a channel with
 * another node. Once the peer is connected a channel can be opened with
 * lightning-fundchannel(7).
*/
export type ConnectRequest = {
    id: string;
  } | {
    id: string;
    host: string;
    port: number;
  }

export interface ConnectResponse {
    /**
     * Address information (mainly useful if **direction** is *out*)
     */
    address: Address;
    /**
     * Whether they initiated connection or we did
     */
    direction: Direction;
    /**
     * BOLT 9 features bitmap offered by peer
     */
    features: string;
    /**
     * the peer we connected to
     */
    id: string;
}

/**
 * Address information (mainly useful if **direction** is *out*)
 */
export interface Address {
    /**
     * Type of connection (*torv2* / *torv3* only if **direction** is *out*)
     */
    type: Type;
}

/**
 * Type of connection (*torv2* / *torv3* only if **direction** is *out*)
 */
export enum Type {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6",
    LocalSocket = "local socket",
    Torv2 = "torv2",
    Torv3 = "torv3",
}

/**
 * Whether they initiated connection or we did
 */
export enum Direction {
    In = "in",
    Out = "out",
}

