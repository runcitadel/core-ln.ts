import type { OpenApiResponse } from './OpenApiResponse';

/**
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#responsesObject
 */
export interface OpenApiResponses {
    // @ts-expect-error This doesn't work
    default?: OpenApiResponse;

    [httpcode: string]: OpenApiResponse;
}
