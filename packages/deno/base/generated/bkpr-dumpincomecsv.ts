/**
 * lightning-bkpr-dumpincomecsv -- Command to emit a CSV of income events
 *
 * **bkpr-dumpincomecsv** *csv_format* [*csv_file*] [*consolidate_fees*] [*start_time*] [*end_time*]
 *
 */

/**
 * The **bkpr-dumpincomcsv** RPC command writes a CSV file to disk at *csv_file*
 * location. This is a formatted output of the **listincome** RPC command.
 */
export interface BkprDumpincomecsvRequest {
  csv_format: /* GUESSED */ string;
  csv_file?: /* GUESSED */ string;
  consolidate_fees?: /* GUESSED */ string;
  start_time?: /* GUESSED */ string;
  end_time?: /* GUESSED */ string;
}

export interface BkprDumpincomecsvResponse {
  /**
   * File that the csv was generated to
   */
  csv_file: string;
  /**
   * Format to print csv as
   */
  csv_format: CSVFormat;
}

/**
 * Format to print csv as
 */
export enum CSVFormat {
  Cointracker = "cointracker",
  Harmony = "harmony",
  Koinly = "koinly",
  Quickbooks = "quickbooks",
}
