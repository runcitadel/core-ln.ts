/**
 * lightning-check -- Command for verifying parameters
 * 
 * **check** *command\_to\_check* \[*parameters*\] 
 * 
 */

/**
 * The **check** RPC command verifies another command's parameters without
 * running it.
 * 
 * The *command_to_check* is the name of the relevant command.
 * 
 * *parameters* is the command's parameters.
 * 
 * This does not guarantee successful execution of the command in all
 * cases. For example, a call to lightning-getroute(7) may still fail to
 * find a route even if checking the parameters succeeds.
*/
export interface CheckRequest {
  command_to_check: string;
  parameters?: unknown;
}

export interface CheckResponse {
    /**
     * the *command_to_check* argument
     */
    command_to_check: string;
}

