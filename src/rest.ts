/// <reference lib="DOM" />

import ApiClient, { transform, transformMap } from "./generated/main.js";

/**
 * An API client for the c-lightning REST plugin
 * 
 * Only works when the rest-rpc option is set to *
 * 
 * This is designed to be used in a browser and will not work server-side
 * 
 * (Except in Node 18, where this will very likely work too)
 */
export default class BrowserRestApiClient extends ApiClient {
    /**
     * @param _apiUrl The URL where the rest API is available
     * @param _macaroon The base64-encoded macaroon
     * @param _transform Set this to false if you don't want any transformation to be done (like msat values from string to BigInt)
                        If false, some types may appear different than what they are in TypeScript
     */
    constructor(private _apiUrl: string, private _macaroon: string, private _transform = true) {
        super();
    }

    async call<ReturnType>(method: string, params: unknown): Promise<ReturnType> {
        const data = await fetch(this._apiUrl.endsWith("/") ? `${this._apiUrl}v1/rpc` : `${this._apiUrl}/v1/rpc`, {
            headers: {
                "Content-Type": "application/json",
                macaroon: this._macaroon,
            },
            method: "POST",
            body: JSON.stringify({
                method,
                params
            }),
        });
        const parsedData = await data.json();
        return this._transform ? transform<ReturnType>(parsedData, transformMap) : parsedData as ReturnType;
    }
}