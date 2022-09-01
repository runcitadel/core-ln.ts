/**
 * lightning-emergencyrecover -- Command for recovering channels from the emergency.recovery file in the lightning directory
 *
 * **emergencyrecover**
 *
 */

/**
 * The **emergencyrecover** RPC command fetches data from the emergency.recover
 * file and tries to reconnect to the peer and force him to close the channel.
 * The data in this file has enough information to reconnect and sweep the funds.
 *
 * This recovery method is not spontaneous and it depends on the peer, so it should
 * be used as a last resort to recover the funds stored in a channel in case of severe
 * data loss.
 */
export interface EmergencyrecoverRequest {}

export interface EmergencyrecoverResponse {
  stubs: string[];
}
