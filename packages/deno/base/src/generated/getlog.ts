/**
 * lightning-getlog -- Command to show logs.
 *
 * **getlog** [*level*]
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
   * The bytes_used values at which records will be trimmed
   */
  bytes_max: number;
  /**
   * The number of bytes used by logging records
   */
  bytes_used: number;
  /**
   * UNIX timestamp with 9 decimal places, when logging was initialized
   */
  created_at: string;
  log: Log[];
}

export interface Log {
  type: Type;
}

export enum Type {
  Broken = "BROKEN",
  Debug = "DEBUG",
  Info = "INFO",
  IoIn = "IO_IN",
  IoOut = "IO_OUT",
  Skipped = "SKIPPED",
  Unusual = "UNUSUAL",
}
