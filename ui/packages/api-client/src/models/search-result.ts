/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.21.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { HaloDocument } from './halo-document';

/**
 * 
 * @export
 * @interface SearchResult
 */
export interface SearchResult {
    /**
     * 
     * @type {Array<HaloDocument>}
     * @memberof SearchResult
     */
    'hits'?: Array<HaloDocument>;
    /**
     * 
     * @type {string}
     * @memberof SearchResult
     */
    'keyword'?: string;
    /**
     * 
     * @type {number}
     * @memberof SearchResult
     */
    'limit'?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchResult
     */
    'processingTimeMillis'?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchResult
     */
    'total'?: number;
}

