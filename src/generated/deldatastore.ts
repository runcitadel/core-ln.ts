/**
 * lightning-deldatastore -- Command for removing (plugin) data
 * 
 * **deldatastore** *key* \[*generation*\] 
 * 
 */

/**
 * The **deldatastore** RPC command allows plugins to delete data it has
 * stored in the c-lightning database.
 * 
 * The command fails if the *key* isn't present, or if *generation*
 * is specified and the generation of the data does not exactly match.
*/
export interface DeldatastoreRequest {
  key: string;
  generation?: number;
}

export interface DeldatastoreResponse {
  key: string[];
  /**
   * The number of times this has been updated
   */
  generation?: /* u64 */ number;
  /**
   * The hex data which has removed from the datastore
   */
  hex?: /* hex */ string;
  /**
   * The data as a string, if it's valid utf-8
   */
  string?: string;
}

