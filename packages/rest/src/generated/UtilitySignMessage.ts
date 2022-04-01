export interface UtilitySignMessageRequestBody {
  /** Message must be less that 65536 characters */
  message: string;
}

export interface UtilitySignMessageResponse {
  /** signature */
  signature?: string;
  /** recid */
  recid?: string;
  /** zbase */
  zbase?: string;
}
