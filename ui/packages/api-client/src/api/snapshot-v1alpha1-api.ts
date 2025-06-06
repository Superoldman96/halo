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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { JsonPatchInner } from '../models';
// @ts-ignore
import { Snapshot } from '../models';
// @ts-ignore
import { SnapshotList } from '../models';
/**
 * SnapshotV1alpha1Api - axios parameter creator
 * @export
 */
export const SnapshotV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create Snapshot
         * @param {Snapshot} [snapshot] Fresh snapshot
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSnapshot: async (snapshot?: Snapshot, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/snapshots`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(snapshot, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete Snapshot
         * @param {string} name Name of snapshot
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSnapshot: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteSnapshot', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/snapshots/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Snapshot
         * @param {string} name Name of snapshot
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSnapshot: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getSnapshot', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/snapshots/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List Snapshot
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSnapshot: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/content.halo.run/v1alpha1/snapshots`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch Snapshot
         * @param {string} name Name of snapshot
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSnapshot: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchSnapshot', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/snapshots/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update Snapshot
         * @param {string} name Name of snapshot
         * @param {Snapshot} [snapshot] Updated snapshot
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSnapshot: async (name: string, snapshot?: Snapshot, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateSnapshot', 'name', name)
            const localVarPath = `/apis/content.halo.run/v1alpha1/snapshots/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(snapshot, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SnapshotV1alpha1Api - functional programming interface
 * @export
 */
export const SnapshotV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SnapshotV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create Snapshot
         * @param {Snapshot} [snapshot] Fresh snapshot
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSnapshot(snapshot?: Snapshot, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Snapshot>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSnapshot(snapshot, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SnapshotV1alpha1Api.createSnapshot']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete Snapshot
         * @param {string} name Name of snapshot
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSnapshot(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSnapshot(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SnapshotV1alpha1Api.deleteSnapshot']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get Snapshot
         * @param {string} name Name of snapshot
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSnapshot(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Snapshot>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSnapshot(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SnapshotV1alpha1Api.getSnapshot']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List Snapshot
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSnapshot(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SnapshotList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSnapshot(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SnapshotV1alpha1Api.listSnapshot']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch Snapshot
         * @param {string} name Name of snapshot
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchSnapshot(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Snapshot>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchSnapshot(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SnapshotV1alpha1Api.patchSnapshot']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update Snapshot
         * @param {string} name Name of snapshot
         * @param {Snapshot} [snapshot] Updated snapshot
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSnapshot(name: string, snapshot?: Snapshot, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Snapshot>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSnapshot(name, snapshot, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SnapshotV1alpha1Api.updateSnapshot']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SnapshotV1alpha1Api - factory interface
 * @export
 */
export const SnapshotV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SnapshotV1alpha1ApiFp(configuration)
    return {
        /**
         * Create Snapshot
         * @param {SnapshotV1alpha1ApiCreateSnapshotRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSnapshot(requestParameters: SnapshotV1alpha1ApiCreateSnapshotRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Snapshot> {
            return localVarFp.createSnapshot(requestParameters.snapshot, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete Snapshot
         * @param {SnapshotV1alpha1ApiDeleteSnapshotRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSnapshot(requestParameters: SnapshotV1alpha1ApiDeleteSnapshotRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteSnapshot(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Snapshot
         * @param {SnapshotV1alpha1ApiGetSnapshotRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSnapshot(requestParameters: SnapshotV1alpha1ApiGetSnapshotRequest, options?: RawAxiosRequestConfig): AxiosPromise<Snapshot> {
            return localVarFp.getSnapshot(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List Snapshot
         * @param {SnapshotV1alpha1ApiListSnapshotRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSnapshot(requestParameters: SnapshotV1alpha1ApiListSnapshotRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<SnapshotList> {
            return localVarFp.listSnapshot(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch Snapshot
         * @param {SnapshotV1alpha1ApiPatchSnapshotRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSnapshot(requestParameters: SnapshotV1alpha1ApiPatchSnapshotRequest, options?: RawAxiosRequestConfig): AxiosPromise<Snapshot> {
            return localVarFp.patchSnapshot(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update Snapshot
         * @param {SnapshotV1alpha1ApiUpdateSnapshotRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSnapshot(requestParameters: SnapshotV1alpha1ApiUpdateSnapshotRequest, options?: RawAxiosRequestConfig): AxiosPromise<Snapshot> {
            return localVarFp.updateSnapshot(requestParameters.name, requestParameters.snapshot, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSnapshot operation in SnapshotV1alpha1Api.
 * @export
 * @interface SnapshotV1alpha1ApiCreateSnapshotRequest
 */
export interface SnapshotV1alpha1ApiCreateSnapshotRequest {
    /**
     * Fresh snapshot
     * @type {Snapshot}
     * @memberof SnapshotV1alpha1ApiCreateSnapshot
     */
    readonly snapshot?: Snapshot
}

/**
 * Request parameters for deleteSnapshot operation in SnapshotV1alpha1Api.
 * @export
 * @interface SnapshotV1alpha1ApiDeleteSnapshotRequest
 */
export interface SnapshotV1alpha1ApiDeleteSnapshotRequest {
    /**
     * Name of snapshot
     * @type {string}
     * @memberof SnapshotV1alpha1ApiDeleteSnapshot
     */
    readonly name: string
}

/**
 * Request parameters for getSnapshot operation in SnapshotV1alpha1Api.
 * @export
 * @interface SnapshotV1alpha1ApiGetSnapshotRequest
 */
export interface SnapshotV1alpha1ApiGetSnapshotRequest {
    /**
     * Name of snapshot
     * @type {string}
     * @memberof SnapshotV1alpha1ApiGetSnapshot
     */
    readonly name: string
}

/**
 * Request parameters for listSnapshot operation in SnapshotV1alpha1Api.
 * @export
 * @interface SnapshotV1alpha1ApiListSnapshotRequest
 */
export interface SnapshotV1alpha1ApiListSnapshotRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof SnapshotV1alpha1ApiListSnapshot
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof SnapshotV1alpha1ApiListSnapshot
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof SnapshotV1alpha1ApiListSnapshot
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof SnapshotV1alpha1ApiListSnapshot
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof SnapshotV1alpha1ApiListSnapshot
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchSnapshot operation in SnapshotV1alpha1Api.
 * @export
 * @interface SnapshotV1alpha1ApiPatchSnapshotRequest
 */
export interface SnapshotV1alpha1ApiPatchSnapshotRequest {
    /**
     * Name of snapshot
     * @type {string}
     * @memberof SnapshotV1alpha1ApiPatchSnapshot
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof SnapshotV1alpha1ApiPatchSnapshot
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateSnapshot operation in SnapshotV1alpha1Api.
 * @export
 * @interface SnapshotV1alpha1ApiUpdateSnapshotRequest
 */
export interface SnapshotV1alpha1ApiUpdateSnapshotRequest {
    /**
     * Name of snapshot
     * @type {string}
     * @memberof SnapshotV1alpha1ApiUpdateSnapshot
     */
    readonly name: string

    /**
     * Updated snapshot
     * @type {Snapshot}
     * @memberof SnapshotV1alpha1ApiUpdateSnapshot
     */
    readonly snapshot?: Snapshot
}

/**
 * SnapshotV1alpha1Api - object-oriented interface
 * @export
 * @class SnapshotV1alpha1Api
 * @extends {BaseAPI}
 */
export class SnapshotV1alpha1Api extends BaseAPI {
    /**
     * Create Snapshot
     * @param {SnapshotV1alpha1ApiCreateSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotV1alpha1Api
     */
    public createSnapshot(requestParameters: SnapshotV1alpha1ApiCreateSnapshotRequest = {}, options?: RawAxiosRequestConfig) {
        return SnapshotV1alpha1ApiFp(this.configuration).createSnapshot(requestParameters.snapshot, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete Snapshot
     * @param {SnapshotV1alpha1ApiDeleteSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotV1alpha1Api
     */
    public deleteSnapshot(requestParameters: SnapshotV1alpha1ApiDeleteSnapshotRequest, options?: RawAxiosRequestConfig) {
        return SnapshotV1alpha1ApiFp(this.configuration).deleteSnapshot(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Snapshot
     * @param {SnapshotV1alpha1ApiGetSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotV1alpha1Api
     */
    public getSnapshot(requestParameters: SnapshotV1alpha1ApiGetSnapshotRequest, options?: RawAxiosRequestConfig) {
        return SnapshotV1alpha1ApiFp(this.configuration).getSnapshot(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List Snapshot
     * @param {SnapshotV1alpha1ApiListSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotV1alpha1Api
     */
    public listSnapshot(requestParameters: SnapshotV1alpha1ApiListSnapshotRequest = {}, options?: RawAxiosRequestConfig) {
        return SnapshotV1alpha1ApiFp(this.configuration).listSnapshot(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch Snapshot
     * @param {SnapshotV1alpha1ApiPatchSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotV1alpha1Api
     */
    public patchSnapshot(requestParameters: SnapshotV1alpha1ApiPatchSnapshotRequest, options?: RawAxiosRequestConfig) {
        return SnapshotV1alpha1ApiFp(this.configuration).patchSnapshot(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update Snapshot
     * @param {SnapshotV1alpha1ApiUpdateSnapshotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SnapshotV1alpha1Api
     */
    public updateSnapshot(requestParameters: SnapshotV1alpha1ApiUpdateSnapshotRequest, options?: RawAxiosRequestConfig) {
        return SnapshotV1alpha1ApiFp(this.configuration).updateSnapshot(requestParameters.name, requestParameters.snapshot, options).then((request) => request(this.axios, this.basePath));
    }
}

