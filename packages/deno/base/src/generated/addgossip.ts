/**
 * lightning-addgossip -- Command for injecting a gossip message (low-level)
 *
 * **addgossip** *message*
 *
 */

/**
 * The **addgossip** RPC command injects a hex-encoded gossip message into
 * the gossip daemon.  It may return an error if it is malformed, or may
 * update its internal state using the gossip message.
 *
 * Note that currently some paths will still silently reject the gossip: it
 * is best effort.
 *
 * This is particularly used by plugins which may receive channel_update
 * messages within error replies.
 */
export interface AddgossipRequest {
  message: string;
}

export interface AddgossipResponse {}
