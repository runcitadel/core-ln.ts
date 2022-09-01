/**
 * lightning-staticbackup -- Command for deriving getting SCB of all the existing channels
 *
 * **staticbackup**
 *
 */

/**
 * The **staticbackup** RPC command returns an object with SCB of all the channels in an array.
 *
 */
export interface StaticbackupRequest {}

export interface StaticbackupResponse {
  scb: string[];
}
