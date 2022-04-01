export interface NewaddrRequestQuery {
  /** Address type (bech32 or p2sh-segwit) */
  addrType: string;
}

export interface NewaddrResponse {
  /** address */
  address?: string;
}
