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
import { Contributor } from './contributor';
// May contain unused imports in some cases
// @ts-ignore
import { SinglePage } from './single-page';
// May contain unused imports in some cases
// @ts-ignore
import { Stats } from './stats';

/**
 * A chunk of items.
 * @export
 * @interface ListedSinglePage
 */
export interface ListedSinglePage {
    /**
     * 
     * @type {Array<Contributor>}
     * @memberof ListedSinglePage
     */
    'contributors': Array<Contributor>;
    /**
     * 
     * @type {Contributor}
     * @memberof ListedSinglePage
     */
    'owner': Contributor;
    /**
     * 
     * @type {SinglePage}
     * @memberof ListedSinglePage
     */
    'page': SinglePage;
    /**
     * 
     * @type {Stats}
     * @memberof ListedSinglePage
     */
    'stats': Stats;
}

