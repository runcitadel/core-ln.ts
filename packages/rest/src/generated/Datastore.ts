export interface DatastoreRequestBody {
  /** Array of values to form a heirarchy. A key can either have children or a value, never both */
  key: string;
  /** Value of the element */
  dataString: string;
  /** Value of the element */
  hex: string;
  /** One of must-create/must-replace/create-or-replace/must-append/create-or-append */
  mode: string;
  /** If specified, means that the update will fail if the previously-existing data is not exactly that generation */
  generation: string;
}

export interface DatastoreResponse {
  /** key added to the datastore */
  key?: string;
  /** generation */
  generation?: string;
  /** hex */
  hex?: string;
  /** dataString */
  dataString?: string;
}
