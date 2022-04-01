export interface DatastoreDelDatastoreRequestQuery {
  /** The specific version of datastore which needs to be deleted */
  generation: string;
}

export interface DatastoreDelDatastoreResponse {
  /** key added to the datastore */
  key?: string;
  /** generation */
  generation?: string;
  /** hex */
  hex?: string;
  /** dataString */
  dataString?: string;
}
