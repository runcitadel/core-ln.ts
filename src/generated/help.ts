/**
 * lightning-help -- Command to return all information about RPC commands.
 * 
 * **help** \[*command\*] 
 * 
 */

/**
 * The **help** is a RPC command which is possible consult all information about the RPC commands, or a specific command if *command* is given.
 * 
 * Note that the lightning-cli(1) tool will prefer to list a man page when a
 * specific *command* is specified, and will only return the JSON if the man
 * page is not found.
 * 
 * EXAMPLE JSON REQUEST
 * --------------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "help",
 *   "params": {}
 * }
 * ```
*/
export interface HelpRequest {
  command?: /* GUESSED */ string;
}

export interface HelpResponse {
    "format-hint"?: any;
    help:           Help[];
}

export interface Help {
    /**
     * the category for this command (useful for grouping)
     */
    category: string;
    /**
     * the command
     */
    command: string;
    /**
     * a one-line description of the purpose of this command
     */
    description: string;
    /**
     * a full description of this command (including whether it's deprecated)
     */
    verbose: string;
}

