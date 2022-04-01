/**
 * lightning-stop -- Command to shutdown the c-lightning node.
 *
 * **stop**
 *
 */

/**
 * The **stop** is a RPC command to shut off the c-lightning node.
 *
 * EXAMPLE JSON REQUEST
 * ------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "stop",
 *   "params": {}
 * }
 * ```
 */
export interface StopRequest {}

export enum StopResponse {
  ShutdownComplete = "Shutdown complete",
}
