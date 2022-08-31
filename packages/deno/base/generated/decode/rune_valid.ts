export interface ValidRuneDecodeResponse {
    /**
     * restrictions built into the rune: all must pass
     */
    restrictions: Restriction[];
    /**
     * the string encoding of the rune
     */
    string: string;
    type:   "rune"
    /**
     * unique id (always a numeric id on runes we create)
     */
    unique_id?: string;
    valid:      boolean;
    /**
     * rune version, not currently set on runes we create
     */
    version?: string;
}

export interface Restriction {
    /**
     * each way restriction can be met: any can pass
     */
    alternatives: string[];
    /**
     * human-readable summary of this restriction
     */
    summary: string;
}

