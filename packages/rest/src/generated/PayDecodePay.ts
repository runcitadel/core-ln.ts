export interface PayDecodePayResponse {
  /** The BIP173 name for the currency */
  currency?: string;
  /** Creation timestamp UNIX style */
  created_at?: number;
  /** The number of seconds this is valid after creation timestamp */
  expiry?: number;
  /** The pubkey of the recipient */
  payee?: string;
  /** The number of msats requested */
  msatoshi?: number;
  /** The number of msats in string with 'msat' appended */
  amount_msat?: string;
  /** Invoice description */
  description?: string;
  /** min_final_cltv_expiry */
  min_final_cltv_expiry?: number;
  /** payment_secret */
  payment_secret?: string;
  /** features */
  features?: string;
  /** routes */
  routes?: any;
  /** payment_hash */
  payment_hash?: string;
  /** signature */
  signature?: string;
}
