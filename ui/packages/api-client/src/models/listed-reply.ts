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
import { CommentStats } from './comment-stats';
// May contain unused imports in some cases
// @ts-ignore
import { OwnerInfo } from './owner-info';
// May contain unused imports in some cases
// @ts-ignore
import { Reply } from './reply';

/**
 * A chunk of items.
 * @export
 * @interface ListedReply
 */
export interface ListedReply {
    /**
     * 
     * @type {OwnerInfo}
     * @memberof ListedReply
     */
    'owner': OwnerInfo;
    /**
     * 
     * @type {Reply}
     * @memberof ListedReply
     */
    'reply': Reply;
    /**
     * 
     * @type {CommentStats}
     * @memberof ListedReply
     */
    'stats': CommentStats;
}

