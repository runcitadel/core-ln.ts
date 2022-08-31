/**
 * lightning-makesecret -- Command for deriving pseudorandom key from HSM
 *
 * **makesecret** *hex*
 *
 */

/**
 * The **makesecret** RPC command derives a secret key from the HSM_secret.
 *
 * The *hex* can be any hex data.
 */
export interface MakesecretRequest {
  hex: /* GUESSED */ string;
}

export interface MakesecretResponse {
  /**
   * the pseudorandom key derived from HSM_secret
   */
  secret: string;
}
