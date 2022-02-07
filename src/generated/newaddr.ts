/**
 * lightning-newaddr -- Command for generating a new address to be used by c-lightning
 * 
 * **newaddr** \[ *addresstype* \] 
 * 
 */

/**
 * The **newaddr** RPC command generates a new address which can
 * subsequently be used to fund channels managed by the c-lightning node.
 * 
 * The funding transaction needs to be confirmed before funds can be used.
 * 
 * *addresstype* specifies the type of address wanted; i.e. *p2sh-segwit*
 * (e.g. `2MxaozoqWwiUcuD9KKgUSrLFDafLqimT9Ta` on bitcoin testnet or
 * `3MZxzq3jBSKNQ2e7dzneo9hy4FvNzmMmt3` on bitcoin mainnet) or *bech32*
 * (e.g. `tb1qu9j4lg5f9rgjyfhvfd905vw46eg39czmktxqgg` on bitcoin testnet
 * or `bc1qwqdg6squsna38e46795at95yu9atm8azzmyvckulcc7kytlcckxswvvzej` on
 * bitcoin mainnet). The special value *all* generates both address types
 * for the same underlying key.
 * 
 * If no *addresstype* is specified the address generated is a *bech32* address.
*/
export interface NewaddrRequest {
  addresstype?: "p2sh-segwit" | "bech32";
}

export type NewaddrResponse = {
    /**
     * The bech32 (native segwit) address
     */
    bech32: string;
} | {
    /**
     * The p2sh-wrapped address
     */
    "p2sh-segwit": string;
}

