export interface OffersFetchInvoiceRequestBody {
  /** Bolt12 offer string beginning with "lno1" */
  offer: string;
  /** Required only if the offer does not specify an amount at all */
  msatoshi: string;
  /** Required if the offer specifies quantity_min or quantity_max, otherwise it is not allowed */
  quantity: string;
  /** Required if the offer specifies recurrence, otherwise it is not allowed */
  recurrence_counter: number;
  /** Required if the offer specifies recurrence_base with start_any_period set, otherwise it is not allowed */
  recurrence_start: number;
  /** Required if recurrence_counter is set, and otherwise is not allowed */
  recurrence_label: string;
  /** Optional timeout; if we don't get a reply before this we fail */
  timeout: string;
}

export interface OffersFetchInvoiceResponse {
  /** The bolt12-encoded invoice string, starting with "lni1" */
  invoice?: string;
  /** Summary of changes from offer */
  changes?: {
    /** extra characters appended to the description field */
    description_appended?: string;
    /** A completely replaced description field */
    description?: string;
    /** The vendor from the offer, which is missing in the invoice */
    vendor_removed?: string;
    /** A completely replaced vendor field */
    vendor?: string;
    /** The amount, if different from the offer amount multiplied by any quantity */
    msat?: string;
  };
  /** Only for recurring invoices if the next period is under the recurrence_limit */
  next_period?: {
    /** the index of the next period to fetchinvoice */
    counter?: number;
    /** UNIX timestamp that the next period starts */
    starttime?: number;
    /** UNIX timestamp that the next period ends */
    endtime?: number;
    /** UNIX timestamp of the earliest time that the next invoice can be fetched */
    paywindow_start?: number;
    /** UNIX timestamp of the latest time that the next invoice can be fetched */
    paywindow_end?: number;
  };
}
