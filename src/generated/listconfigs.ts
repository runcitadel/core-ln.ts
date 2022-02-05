/**
 * lightning-listconfigs -- Command to list all configuration options.
 * 
 * **listconfigs** \[*config*\] 
 * 
 */

/**
 * The **listconfigs** RPC command to list all configuration options, or with *config*, just that one.
 * 
 * The returned values reflect the current configuration, including
 * showing default values (`dev-` options are not shown).
 * 
 * EXAMPLE JSON REQUEST
 * --------------------
 * 
 * ```json
 * {
 *   "id": 82,
 *   "method": "listconfigs",
 *   "params": {
 *     "config": "network"
 *   }
 * }
 * ```
*/
export interface ListconfigsRequest {
  config?: /* GUESSED */ string;
}

export interface ListconfigsResponse {
  /**
   * Special field indicating the current version
   */
  "# version"?: string;
  plugins?: {
    /**
     * Full path of the plugin
     */
    path: string;
    /**
     * short name of the plugin
     */
    name: string;
    /**
     * Specific options set for this plugin
     */
    options?: {
      [k: string]: unknown;
    };
  }[];
  "important-plugins"?: {
    /**
     * Full path of the plugin
     */
    path: string;
    /**
     * short name of the plugin
     */
    name: string;
    /**
     * Specific options set for this plugin
     */
    options?: {
      [k: string]: unknown;
    };
  }[];
  /**
   * `conf` field from cmdline, or default
   */
  conf?: string;
  /**
   * `lightning-dir` field from config or cmdline, or default
   */
  "lightning-dir"?: string;
  /**
   * `network` field from config or cmdline, or default
   */
  network?: string;
  /**
   * `allow-deprecated-apis` field from config or cmdline, or default
   */
  "allow-deprecated-apis"?: boolean;
  /**
   * `rpc-file` field from config or cmdline, or default
   */
  "rpc-file"?: string;
  "disable-plugin"?: string[];
  /**
   * `always-use-proxy` field from config or cmdline, or default
   */
  "always-use-proxy"?: boolean;
  /**
   * `daemon` field from config or cmdline, or default
   */
  daemon?: boolean;
  /**
   * `wallet` field from config or cmdline, or default
   */
  wallet?: string;
  /**
   * `large-channels` field from config or cmdline, or default
   */
  "large-channels"?: boolean;
  /**
   * `experimental-dual-fund` field from config or cmdline, or default
   */
  "experimental-dual-fund"?: boolean;
  /**
   * `experimental-onion-messages` field from config or cmdline, or default
   */
  "experimental-onion-messages"?: boolean;
  /**
   * `experimental-offers` field from config or cmdline, or default
   */
  "experimental-offers"?: boolean;
  /**
   * `experimental-shutdown-wrong-funding` field from config or cmdline, or default
   */
  "experimental-shutdown-wrong-funding"?: boolean;
  /**
   * `experimental-websocket-port` field from config or cmdline, or default
   */
  "experimental-websocket-port"?: /* u16 */ number;
  /**
   * `rgb` field from config or cmdline, or default
   */
  rgb?: /* hex */ string;
  /**
   * `alias` field from config or cmdline, or default
   */
  alias?: string;
  /**
   * `pid-file` field from config or cmdline, or default
   */
  "pid-file"?: string;
  /**
   * `ignore-fee-limits` field from config or cmdline, or default
   */
  "ignore-fee-limits"?: boolean;
  /**
   * `watchtime-blocks` field from config or cmdline, or default
   */
  "watchtime-blocks"?: /* u32 */ number;
  /**
   * `max-locktime-blocks` field from config or cmdline, or default
   */
  "max-locktime-blocks"?: /* u32 */ number;
  /**
   * `funding-confirms` field from config or cmdline, or default
   */
  "funding-confirms"?: /* u32 */ number;
  /**
   * `cltv-delta` field from config or cmdline, or default
   */
  "cltv-delta"?: /* u32 */ number;
  /**
   * `cltv-final` field from config or cmdline, or default
   */
  "cltv-final"?: /* u32 */ number;
  /**
   * `commit-time` field from config or cmdline, or default
   */
  "commit-time"?: /* u32 */ number;
  /**
   * `fee-base` field from config or cmdline, or default
   */
  "fee-base"?: /* u32 */ number;
  /**
   * `rescan` field from config or cmdline, or default
   */
  rescan?: number;
  /**
   * `fee-per-satoshi` field from config or cmdline, or default
   */
  "fee-per-satoshi"?: /* u32 */ number;
  /**
   * `max-concurrent-htlcs` field from config or cmdline, or default
   */
  "max-concurrent-htlcs"?: /* u32 */ number;
  /**
   * `max-dust-htlc-exposure-mast` field from config or cmdline, or default
   */
  "max-dust-htlc-exposure-msat"?: /* msat */ number;
  /**
   * `min-capacity-sat` field from config or cmdline, or default
   */
  "min-capacity-sat"?: /* u64 */ number;
  /**
   * `addr` field from config or cmdline (can be more than one)
   */
  addr?: string;
  /**
   * `announce-addr` field from config or cmdline (can be more than one)
   */
  "announce-addr"?: string;
  /**
   * `bind-addr` field from config or cmdline (can be more than one)
   */
  "bind-addr"?: string;
  /**
   * `true` if `offline` was set in config or cmdline
   */
  offline?: boolean;
  /**
   * `autolisten` field from config or cmdline, or default
   */
  autolisten?: boolean;
  /**
   * `proxy` field from config or cmdline, or default
   */
  proxy?: string;
  /**
   * `true` if `disable-dns` was set in config or cmdline
   */
  "disable-dns"?: boolean;
  /**
   * `true` if `encrypted-hsm` was set in config or cmdline
   */
  "encrypted-hsm"?: boolean;
  /**
   * `rpc-file-mode` field from config or cmdline, or default
   */
  "rpc-file-mode"?: string;
  /**
   * `log-level` field from config or cmdline, or default
   */
  "log-level"?: string;
  /**
   * `log-prefix` field from config or cmdline, or default
   */
  "log-prefix"?: string;
  /**
   * `log-file` field from config or cmdline, or default
   */
  "log-file"?: string;
  /**
   * `log-timestamps` field from config or cmdline, or default
   */
  "log-timestamps"?: boolean;
  /**
   * force-feerate configuration setting, if any
   */
  "force-feerates"?: string;
  /**
   * `subdaemon` fields from config or cmdline if any (can be more than one)
   */
  subdaemon?: string;
  /**
   * `featchinvoice-noconnect` fileds from config or cmdline, or default
   */
  "fetchinvoice-noconnect"?: boolean;
  /**
   * `tor-service-password` field from config or cmdline, if any
   */
  "tor-service-password"?: string;
}

