/**
 * lightning-autocleaninvoice -- Set up auto-delete of expired invoice
 * 
 * **autocleaninvoice** [*cycle_seconds*] [*expired_by*] 
 * 
 */

export interface AutocleaninvoiceRequest {
  /**
   * The interval at which autocleaning should be done.
   * Setting this to 0 disables autoclean.
   * If not specified, this defaults to 3600 (one hour).
   */
  cycle_seconds?: number;
  /**
   * Every autoclean cycle, expired invoices, which have already been expired
    * for at least *expired_by* seconds, will be deleted. If *expired_by* is
    * not specified, this defaults to 86400 (one day).
   */
  expired_by?: number;
}

export interface AutocleaninvoiceResponse {
    /**
     * whether invoice autocleaning is active
     */
    enabled: boolean;
}

