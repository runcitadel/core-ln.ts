/**
 * lightning-listconfigs -- Command to list all configuration options.
 *
 * **listconfigs** [*config*]
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
  /**
   * `addr` field from config or cmdline (can be more than one)
   */
  addr?: string;
  /**
   * `alias` field from config or cmdline, or default
   */
  alias?: string;
  /**
   * `allow-deprecated-apis` field from config or cmdline, or default
   */
  "allow-deprecated-apis"?: boolean;
  /**
   * `always-use-proxy` field from config or cmdline, or default
   */
  "always-use-proxy"?: boolean;
  /**
   * `announce-addr` field from config or cmdline (can be more than one)
   */
  "announce-addr"?: string;
  /**
   * `autolisten` field from config or cmdline, or default
   */
  autolisten?: boolean;
  /**
   * `bind-addr` field from config or cmdline (can be more than one)
   */
  "bind-addr"?: string;
  /**
   * `cltv-delta` field from config or cmdline, or default
   */
  "cltv-delta"?: number;
  /**
   * `cltv-final` field from config or cmdline, or default
   */
  "cltv-final"?: number;
  /**
   * `commit-time` field from config or cmdline, or default
   */
  "commit-time"?: number;
  /**
   * `conf` field from cmdline, or default
   */
  conf?: string;
  /**
   * `daemon` field from config or cmdline, or default
   */
  daemon?: boolean;
  /**
   * `true` if `disable-dns` was set in config or cmdline
   */
  "disable-dns"?: boolean;
  "disable-plugin"?: string[];
  /**
   * `true` if `encrypted-hsm` was set in config or cmdline
   */
  "encrypted-hsm"?: boolean;
  /**
   * `experimental-dual-fund` field from config or cmdline, or default
   */
  "experimental-dual-fund"?: boolean;
  /**
   * `experimental-offers` field from config or cmdline, or default
   */
  "experimental-offers"?: boolean;
  /**
   * `experimental-onion-messages` field from config or cmdline, or default
   */
  "experimental-onion-messages"?: boolean;
  /**
   * `experimental-shutdown-wrong-funding` field from config or cmdline, or default
   */
  "experimental-shutdown-wrong-funding"?: boolean;
  /**
   * `experimental-websocket-port` field from config or cmdline, or default
   */
  "experimental-websocket-port"?: number;
  /**
   * `fee-base` field from config or cmdline, or default
   */
  "fee-base"?: number;
  /**
   * `fee-per-satoshi` field from config or cmdline, or default
   */
  "fee-per-satoshi"?: number;
  /**
   * `featchinvoice-noconnect` fileds from config or cmdline, or default
   */
  "fetchinvoice-noconnect"?: boolean;
  /**
   * force-feerate configuration setting, if any
   */
  "force-feerates"?: string;
  /**
   * `funding-confirms` field from config or cmdline, or default
   */
  "funding-confirms"?: number;
  /**
   * `ignore-fee-limits` field from config or cmdline, or default
   */
  "ignore-fee-limits"?: boolean;
  "important-plugins"?: ImportantPlugin[];
  /**
   * `large-channels` field from config or cmdline, or default
   */
  "large-channels"?: boolean;
  /**
   * `lightning-dir` field from config or cmdline, or default
   */
  "lightning-dir"?: string;
  /**
   * `log-file` field from config or cmdline, or default
   */
  "log-file"?: string;
  /**
   * `log-level` field from config or cmdline, or default
   */
  "log-level"?: string;
  /**
   * `log-prefix` field from config or cmdline, or default
   */
  "log-prefix"?: string;
  /**
   * `log-timestamps` field from config or cmdline, or default
   */
  "log-timestamps"?: boolean;
  /**
   * `max-concurrent-htlcs` field from config or cmdline, or default
   */
  "max-concurrent-htlcs"?: number;
  /**
   * `max-dust-htlc-exposure-mast` field from config or cmdline, or default
   */
  "max-dust-htlc-exposure-msat"?: number;
  /**
   * `max-locktime-blocks` field from config or cmdline, or default
   */
  "max-locktime-blocks"?: number;
  /**
   * `min-capacity-sat` field from config or cmdline, or default
   */
  "min-capacity-sat"?: number;
  /**
   * `network` field from config or cmdline, or default
   */
  network?: string;
  /**
   * `true` if `offline` was set in config or cmdline
   */
  offline?: boolean;
  /**
   * `pid-file` field from config or cmdline, or default
   */
  "pid-file"?: string;
  plugins?: Plugin[];
  /**
   * `proxy` field from config or cmdline, or default
   */
  proxy?: string;
  /**
   * `rescan` field from config or cmdline, or default
   */
  rescan?: number;
  /**
   * `rgb` field from config or cmdline, or default
   */
  rgb?: string;
  /**
   * `rpc-file` field from config or cmdline, or default
   */
  "rpc-file"?: string;
  /**
   * `rpc-file-mode` field from config or cmdline, or default
   */
  "rpc-file-mode"?: string;
  /**
   * `subdaemon` fields from config or cmdline if any (can be more than one)
   */
  subdaemon?: string;
  /**
   * `tor-service-password` field from config or cmdline, if any
   */
  "tor-service-password"?: string;
  /**
   * `wallet` field from config or cmdline, or default
   */
  wallet?: string;
  /**
   * `watchtime-blocks` field from config or cmdline, or default
   */
  "watchtime-blocks"?: number;
}

/**
 * `important-plugin` field from config or cmdline, or built-in
 */
export interface ImportantPlugin {
  /**
   * short name of the plugin
   */
  name: string;
  /**
   * Specific options set for this plugin
   */
  options?: { [key: string]: any };
  /**
   * Full path of the plugin
   */
  path: string;
}

/**
 * `plugin` field from config or cmdline
 */
export interface Plugin {
  /**
   * short name of the plugin
   */
  name: string;
  /**
   * Specific options set for this plugin
   */
  options?: { [key: string]: any };
  /**
   * Full path of the plugin
   */
  path: string;
}
