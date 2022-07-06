/**
 * lightning-listdatastore -- Command for listing (plugin) data
 *
 * **listdatastore** [*key*]
 *
 */

/**
 * The **listdatastore** RPC command allows plugins to fetch data which was
 * stored in the Core Lightning database.
 *
 * All immediate children of the *key* (or root children) are returned:
 * a *key* with children won't have a *hex* or *generation* entry.
 */
export interface ListdatastoreRequest {
  key?: /* GUESSED */ string;
}

export interface ListdatastoreResponse {
  datastore: Datastore[];
}

export interface Datastore {
  /**
   * The number of times this has been updated
   */
  generation?: number;
  /**
   * The hex data from the datastore
   */
  hex?: string;
  key: string[];
  /**
   * The data as a string, if it's valid utf-8
   */
  string?: string;
}
