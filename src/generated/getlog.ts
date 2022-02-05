/**
 * lightning-getlog -- Command to show logs.
 * 
 * **getlog** \[*level*\] 
 * 
 */

/**
 * The **getlog** the RPC command to show logs, with optional log *level*.
 * 
 * - *level*: A string that represents the log level (*broken*, *unusual*, *info*, *debug*, or *io*).  The default is *info*.
 * 
 * EXAMPLE JSON REQUEST
 * --------------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "getlog",
 *   "params": {
 *     "level": "debug"
 *   }
 * }
 * ```
*/
export interface GetlogRequest {
  level?: /* GUESSED */ string;
}

export interface GetlogResponse {
  /**
   * UNIX timestamp with 9 decimal places, when logging was initialized
   */
  created_at: string;
  /**
   * The number of bytes used by logging records
   */
  bytes_used: /* u32 */ number;
  /**
   * The bytes_used values at which records will be trimmed
   */
  bytes_max: /* u32 */ number;
  log: ({
    [k: string]: unknown;
  } & {
    [k: string]: unknown;
  } & {
    [k: string]: unknown;
  })[];
}

