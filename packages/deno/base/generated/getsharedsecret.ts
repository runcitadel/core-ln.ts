/**
 * lightning-getsharedsecret -- Command for computing an ECDH
 *
 * **getsharedsecret** *point*
 *
 */

/**
 * The **getsharedsecret** RPC command computes a shared secret from a
 * given public *point*, and the secret key of this node.
 * The *point* is a hexadecimal string of the compressed public
 * key DER-encoding of the SECP256K1 point.
 */
export interface GetsharedsecretRequest {
  point: /* GUESSED */ string;
}

export interface GetsharedsecretResponse {
  /**
   * the SHA-2 of the compressed encoding of the shared secp256k1 point
   */
  shared_secret: string;
}
