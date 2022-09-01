/**
 * lightning-decode -- Command for decoding an invoice string (low-level)
 *
 * **decode** *string*
 *
 */

/**
 * The **decode** RPC command checks and parses:
 *
 * - a *bolt11* or *bolt12* string (optionally prefixed by `lightning:`
 *   or `LIGHTNING:`) as specified by the BOLT 11 and BOLT 12
 *   specifications.
 * - a *rune* as created by lightning-commando-rune(7).
 *
 * It may decode other formats in future.
 */
export interface DecodeRequest {
  string: string;
}

export * from "./decode/response";
