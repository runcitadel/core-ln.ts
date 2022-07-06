/**
 * lightning-stop -- Command to shutdown the Core Lightning node.
 *
 * **stop**
 *
 */

/**
 * The **stop** is a RPC command to shut off the Core Lightning node.
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
