export interface InvalidRuneDecodeResponse {
    /**
     * the raw rune in hex
     */
    hex?:  string;
    type:  "rune"
    valid: boolean;
    /**
     * the rune contains invalid UTF-8 strings
     */
    warning_rune_invalid_utf8?: string;
}

