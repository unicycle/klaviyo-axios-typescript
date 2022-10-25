/* tslint:disable */
/* eslint-disable */
/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * The version of the OpenAPI document: 2022-10-17
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GetCatalogItems4XXResponse } from '../models';
// @ts-ignore
import { GetMetricResponse } from '../models';
// @ts-ignore
import { GetMetricResponseCollection } from '../models';
// @ts-ignore
import { MetricAggregateQuery } from '../models';
// @ts-ignore
import { PostMetricAggregateResponse } from '../models';
/**
 * MetricsApi - axios parameter creator
 * @export
 */
export const MetricsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a metric with the given metric ID. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets)<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Metrics Read`
         * @summary Get Metric
         * @param {string} id 
         * @param {string} revision API endpoint revision (format: YYYY-MM-DD[.suffix])
         * @param {Array<'name' | 'created' | 'updated' | 'integration'>} [fields_metric] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetric: async (id: string, revision: string, fields_metric?: Array<'name' | 'created' | 'updated' | 'integration'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getMetric', 'id', id)
            // verify required parameter 'revision' is not null or undefined
            assertParamExists('getMetric', 'revision', revision)
            const localVarPath = `/api/metrics/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Klaviyo-API-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (fields_metric) {
                localVarQueryParameter['fields[metric]'] = fields_metric.join(COLLECTION_FORMATS.csv);
            }

            if (revision != null) {
                localVarHeaderParameter['revision'] = String(revision);
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
         * Get all metrics in an account. Requests can be filtered by the following fields: integration `name`, integration `category` Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets). Returns a maximum of 200 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination)<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Metrics Read`
         * @summary Get Metrics
         * @param {string} revision API endpoint revision (format: YYYY-MM-DD[.suffix])
         * @param {Array<'name' | 'created' | 'updated' | 'integration'>} [fields_metric] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
         * @param {string} [filter] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;integration.name&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;integration.category&#x60;: &#x60;equals&#x60;
         * @param {string} [page_cursor] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#pagination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetrics: async (revision: string, fields_metric?: Array<'name' | 'created' | 'updated' | 'integration'>, filter?: string, page_cursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'revision' is not null or undefined
            assertParamExists('getMetrics', 'revision', revision)
            const localVarPath = `/api/metrics/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Klaviyo-API-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (fields_metric) {
                localVarQueryParameter['fields[metric]'] = fields_metric.join(COLLECTION_FORMATS.csv);
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (page_cursor !== undefined) {
                localVarQueryParameter['page[cursor]'] = page_cursor;
            }

            if (revision != null) {
                localVarHeaderParameter['revision'] = String(revision);
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
         * Query and aggregate event data associated with a metric, including native Klaviyo metrics, integration-specific metrics, and custom events. Queries must be passed in the JSON body of your `POST` request.  Results can be filtered and grouped by time, event, or profile dimensions.  **Request body parameters** (nested under `attributes`):  * `return_fields`: request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets) * `sort`: sort results by a specified field, such as `\"-timestamp\"` * `page_cursor`: results can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination) * `page_size`: limit the number of returned results per page * `by`: optional attributes used to group by the aggregation function     * When using `by` attributes, an empty `dimensions` response is expected when the counts for the events do not have the associated dimension requested by the set `by` attribute. For example, a query including `\"by\": [\"$flow\"]` will return an empty dimensions response for counts of metrics not associated with a `$flow` * `measurement`: the measurement key supports the following values:     * `\"sum_value\"`: perform a summation of the `_Event Value_`, optionally partitioned over any dimension provided in the `by` field     * `\"count\"`: counts the number of events associated to a metric, optionally partitioned over any dimension provided in the `by` field     * `\"unique\"` counts the number of unique customers associated to a metric, optionally partitioned over any dimension provided in the `by` field * `interval`: aggregation interval, such as `\"hour\"`,`\"day\"`,`\"week\"`, and `\"month\"` * `metric_id`: the metric ID used in the aggregation * `filter`: list of filters for specific fields, must include time range using ISO 8601 format (`\"YYYY-MM-DDTHH:MM:SS.mmmmmm\"`)     * The time range can be filtered by providing a `greater_or_equal` filter on the datetime field, such as `\"greater-or-equal(datetime,2021-07-01T00:00:00)\"` and a `less-than` filter on the same datetime field, such as `\"less-than(datetime,2022-07-01T00:00:00)\"`     * The time range may span a maximum of one year. Time range dates may be set to a maximum of 5 years prior to the current date     * Filter the list of supported aggregate dimensions using the common filter syntax, such as `\"equals(URL,\\\"https://www.klaviyo.com/\\\")\"` * `timezone`: the timezone used when processing the query. Case sensitive. This field is validated against a list of common timezones from the [IANA Time Zone Database](https://www.iana.org/time-zones)  For a comprehensive list of native Klaviyo metrics and their associated attributes for grouping and filtering, please refer to the [metrics attributes guide](https://developers.klaviyo.com/en/v2022-10-17/docs/supported_metrics_and_attributes).<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `60/m`  **Scopes:** `Metrics Read`
         * @summary Query Metric Aggregates
         * @param {string} revision API endpoint revision (format: YYYY-MM-DD[.suffix])
         * @param {MetricAggregateQuery} MetricAggregateQuery Retrieve Metric Aggregations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryMetricAggregates: async (revision: string, MetricAggregateQuery: MetricAggregateQuery, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'revision' is not null or undefined
            assertParamExists('queryMetricAggregates', 'revision', revision)
            // verify required parameter 'MetricAggregateQuery' is not null or undefined
            assertParamExists('queryMetricAggregates', 'MetricAggregateQuery', MetricAggregateQuery)
            const localVarPath = `/api/metric-aggregates/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Klaviyo-API-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (revision != null) {
                localVarHeaderParameter['revision'] = String(revision);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(MetricAggregateQuery, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetricsApi - functional programming interface
 * @export
 */
export const MetricsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MetricsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a metric with the given metric ID. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets)<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Metrics Read`
         * @summary Get Metric
         * @param {string} id 
         * @param {string} revision API endpoint revision (format: YYYY-MM-DD[.suffix])
         * @param {Array<'name' | 'created' | 'updated' | 'integration'>} [fields_metric] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMetric(id: string, revision: string, fields_metric?: Array<'name' | 'created' | 'updated' | 'integration'>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMetricResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMetric(id, revision, fields_metric, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all metrics in an account. Requests can be filtered by the following fields: integration `name`, integration `category` Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets). Returns a maximum of 200 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination)<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Metrics Read`
         * @summary Get Metrics
         * @param {string} revision API endpoint revision (format: YYYY-MM-DD[.suffix])
         * @param {Array<'name' | 'created' | 'updated' | 'integration'>} [fields_metric] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
         * @param {string} [filter] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;integration.name&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;integration.category&#x60;: &#x60;equals&#x60;
         * @param {string} [page_cursor] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#pagination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMetrics(revision: string, fields_metric?: Array<'name' | 'created' | 'updated' | 'integration'>, filter?: string, page_cursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMetricResponseCollection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMetrics(revision, fields_metric, filter, page_cursor, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Query and aggregate event data associated with a metric, including native Klaviyo metrics, integration-specific metrics, and custom events. Queries must be passed in the JSON body of your `POST` request.  Results can be filtered and grouped by time, event, or profile dimensions.  **Request body parameters** (nested under `attributes`):  * `return_fields`: request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets) * `sort`: sort results by a specified field, such as `\"-timestamp\"` * `page_cursor`: results can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination) * `page_size`: limit the number of returned results per page * `by`: optional attributes used to group by the aggregation function     * When using `by` attributes, an empty `dimensions` response is expected when the counts for the events do not have the associated dimension requested by the set `by` attribute. For example, a query including `\"by\": [\"$flow\"]` will return an empty dimensions response for counts of metrics not associated with a `$flow` * `measurement`: the measurement key supports the following values:     * `\"sum_value\"`: perform a summation of the `_Event Value_`, optionally partitioned over any dimension provided in the `by` field     * `\"count\"`: counts the number of events associated to a metric, optionally partitioned over any dimension provided in the `by` field     * `\"unique\"` counts the number of unique customers associated to a metric, optionally partitioned over any dimension provided in the `by` field * `interval`: aggregation interval, such as `\"hour\"`,`\"day\"`,`\"week\"`, and `\"month\"` * `metric_id`: the metric ID used in the aggregation * `filter`: list of filters for specific fields, must include time range using ISO 8601 format (`\"YYYY-MM-DDTHH:MM:SS.mmmmmm\"`)     * The time range can be filtered by providing a `greater_or_equal` filter on the datetime field, such as `\"greater-or-equal(datetime,2021-07-01T00:00:00)\"` and a `less-than` filter on the same datetime field, such as `\"less-than(datetime,2022-07-01T00:00:00)\"`     * The time range may span a maximum of one year. Time range dates may be set to a maximum of 5 years prior to the current date     * Filter the list of supported aggregate dimensions using the common filter syntax, such as `\"equals(URL,\\\"https://www.klaviyo.com/\\\")\"` * `timezone`: the timezone used when processing the query. Case sensitive. This field is validated against a list of common timezones from the [IANA Time Zone Database](https://www.iana.org/time-zones)  For a comprehensive list of native Klaviyo metrics and their associated attributes for grouping and filtering, please refer to the [metrics attributes guide](https://developers.klaviyo.com/en/v2022-10-17/docs/supported_metrics_and_attributes).<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `60/m`  **Scopes:** `Metrics Read`
         * @summary Query Metric Aggregates
         * @param {string} revision API endpoint revision (format: YYYY-MM-DD[.suffix])
         * @param {MetricAggregateQuery} MetricAggregateQuery Retrieve Metric Aggregations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryMetricAggregates(revision: string, MetricAggregateQuery: MetricAggregateQuery, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostMetricAggregateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryMetricAggregates(revision, MetricAggregateQuery, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MetricsApi - factory interface
 * @export
 */
export const MetricsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MetricsApiFp(configuration)
    return {
        /**
         * Get a metric with the given metric ID. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets)<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Metrics Read`
         * @summary Get Metric
         * @param {string} id 
         * @param {string} revision API endpoint revision (format: YYYY-MM-DD[.suffix])
         * @param {Array<'name' | 'created' | 'updated' | 'integration'>} [fields_metric] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetric(id: string, revision: string, fields_metric?: Array<'name' | 'created' | 'updated' | 'integration'>, options?: any): AxiosPromise<GetMetricResponse> {
            return localVarFp.getMetric(id, revision, fields_metric, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all metrics in an account. Requests can be filtered by the following fields: integration `name`, integration `category` Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets). Returns a maximum of 200 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination)<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Metrics Read`
         * @summary Get Metrics
         * @param {string} revision API endpoint revision (format: YYYY-MM-DD[.suffix])
         * @param {Array<'name' | 'created' | 'updated' | 'integration'>} [fields_metric] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
         * @param {string} [filter] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;integration.name&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;integration.category&#x60;: &#x60;equals&#x60;
         * @param {string} [page_cursor] For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#pagination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetrics(revision: string, fields_metric?: Array<'name' | 'created' | 'updated' | 'integration'>, filter?: string, page_cursor?: string, options?: any): AxiosPromise<GetMetricResponseCollection> {
            return localVarFp.getMetrics(revision, fields_metric, filter, page_cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Query and aggregate event data associated with a metric, including native Klaviyo metrics, integration-specific metrics, and custom events. Queries must be passed in the JSON body of your `POST` request.  Results can be filtered and grouped by time, event, or profile dimensions.  **Request body parameters** (nested under `attributes`):  * `return_fields`: request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets) * `sort`: sort results by a specified field, such as `\"-timestamp\"` * `page_cursor`: results can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination) * `page_size`: limit the number of returned results per page * `by`: optional attributes used to group by the aggregation function     * When using `by` attributes, an empty `dimensions` response is expected when the counts for the events do not have the associated dimension requested by the set `by` attribute. For example, a query including `\"by\": [\"$flow\"]` will return an empty dimensions response for counts of metrics not associated with a `$flow` * `measurement`: the measurement key supports the following values:     * `\"sum_value\"`: perform a summation of the `_Event Value_`, optionally partitioned over any dimension provided in the `by` field     * `\"count\"`: counts the number of events associated to a metric, optionally partitioned over any dimension provided in the `by` field     * `\"unique\"` counts the number of unique customers associated to a metric, optionally partitioned over any dimension provided in the `by` field * `interval`: aggregation interval, such as `\"hour\"`,`\"day\"`,`\"week\"`, and `\"month\"` * `metric_id`: the metric ID used in the aggregation * `filter`: list of filters for specific fields, must include time range using ISO 8601 format (`\"YYYY-MM-DDTHH:MM:SS.mmmmmm\"`)     * The time range can be filtered by providing a `greater_or_equal` filter on the datetime field, such as `\"greater-or-equal(datetime,2021-07-01T00:00:00)\"` and a `less-than` filter on the same datetime field, such as `\"less-than(datetime,2022-07-01T00:00:00)\"`     * The time range may span a maximum of one year. Time range dates may be set to a maximum of 5 years prior to the current date     * Filter the list of supported aggregate dimensions using the common filter syntax, such as `\"equals(URL,\\\"https://www.klaviyo.com/\\\")\"` * `timezone`: the timezone used when processing the query. Case sensitive. This field is validated against a list of common timezones from the [IANA Time Zone Database](https://www.iana.org/time-zones)  For a comprehensive list of native Klaviyo metrics and their associated attributes for grouping and filtering, please refer to the [metrics attributes guide](https://developers.klaviyo.com/en/v2022-10-17/docs/supported_metrics_and_attributes).<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `60/m`  **Scopes:** `Metrics Read`
         * @summary Query Metric Aggregates
         * @param {string} revision API endpoint revision (format: YYYY-MM-DD[.suffix])
         * @param {MetricAggregateQuery} MetricAggregateQuery Retrieve Metric Aggregations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryMetricAggregates(revision: string, MetricAggregateQuery: MetricAggregateQuery, options?: any): AxiosPromise<PostMetricAggregateResponse> {
            return localVarFp.queryMetricAggregates(revision, MetricAggregateQuery, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getMetric operation in MetricsApi.
 * @export
 * @interface MetricsApiGetMetricRequest
 */
export interface MetricsApiGetMetricRequest {
    /**
     * 
     * @type {string}
     * @memberof MetricsApiGetMetric
     */
    readonly id: string

    /**
     * API endpoint revision (format: YYYY-MM-DD[.suffix])
     * @type {string}
     * @memberof MetricsApiGetMetric
     */
    readonly revision: string

    /**
     * For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
     * @type {Array<'name' | 'created' | 'updated' | 'integration'>}
     * @memberof MetricsApiGetMetric
     */
    readonly fields_metric?: Array<'name' | 'created' | 'updated' | 'integration'>
}

/**
 * Request parameters for getMetrics operation in MetricsApi.
 * @export
 * @interface MetricsApiGetMetricsRequest
 */
export interface MetricsApiGetMetricsRequest {
    /**
     * API endpoint revision (format: YYYY-MM-DD[.suffix])
     * @type {string}
     * @memberof MetricsApiGetMetrics
     */
    readonly revision: string

    /**
     * For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
     * @type {Array<'name' | 'created' | 'updated' | 'integration'>}
     * @memberof MetricsApiGetMetrics
     */
    readonly fields_metric?: Array<'name' | 'created' | 'updated' | 'integration'>

    /**
     * For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;integration.name&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;integration.category&#x60;: &#x60;equals&#x60;
     * @type {string}
     * @memberof MetricsApiGetMetrics
     */
    readonly filter?: string

    /**
     * For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#pagination
     * @type {string}
     * @memberof MetricsApiGetMetrics
     */
    readonly page_cursor?: string
}

/**
 * Request parameters for queryMetricAggregates operation in MetricsApi.
 * @export
 * @interface MetricsApiQueryMetricAggregatesRequest
 */
export interface MetricsApiQueryMetricAggregatesRequest {
    /**
     * API endpoint revision (format: YYYY-MM-DD[.suffix])
     * @type {string}
     * @memberof MetricsApiQueryMetricAggregates
     */
    readonly revision: string

    /**
     * Retrieve Metric Aggregations
     * @type {MetricAggregateQuery}
     * @memberof MetricsApiQueryMetricAggregates
     */
    readonly MetricAggregateQuery: MetricAggregateQuery
}

/**
 * MetricsApi - object-oriented interface
 * @export
 * @class MetricsApi
 * @extends {BaseAPI}
 */
export class MetricsApi extends BaseAPI {
    /**
     * Get a metric with the given metric ID. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets)<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Metrics Read`
     * @summary Get Metric
     * @param {MetricsApiGetMetricRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     */
    public getMetric(requestParameters: MetricsApiGetMetricRequest, options?: AxiosRequestConfig) {
        return MetricsApiFp(this.configuration).getMetric(requestParameters.id, requestParameters.revision, requestParameters.fields_metric, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all metrics in an account. Requests can be filtered by the following fields: integration `name`, integration `category` Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets). Returns a maximum of 200 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination)<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Metrics Read`
     * @summary Get Metrics
     * @param {MetricsApiGetMetricsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     */
    public getMetrics(requestParameters: MetricsApiGetMetricsRequest, options?: AxiosRequestConfig) {
        return MetricsApiFp(this.configuration).getMetrics(requestParameters.revision, requestParameters.fields_metric, requestParameters.filter, requestParameters.page_cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Query and aggregate event data associated with a metric, including native Klaviyo metrics, integration-specific metrics, and custom events. Queries must be passed in the JSON body of your `POST` request.  Results can be filtered and grouped by time, event, or profile dimensions.  **Request body parameters** (nested under `attributes`):  * `return_fields`: request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets) * `sort`: sort results by a specified field, such as `\"-timestamp\"` * `page_cursor`: results can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination) * `page_size`: limit the number of returned results per page * `by`: optional attributes used to group by the aggregation function     * When using `by` attributes, an empty `dimensions` response is expected when the counts for the events do not have the associated dimension requested by the set `by` attribute. For example, a query including `\"by\": [\"$flow\"]` will return an empty dimensions response for counts of metrics not associated with a `$flow` * `measurement`: the measurement key supports the following values:     * `\"sum_value\"`: perform a summation of the `_Event Value_`, optionally partitioned over any dimension provided in the `by` field     * `\"count\"`: counts the number of events associated to a metric, optionally partitioned over any dimension provided in the `by` field     * `\"unique\"` counts the number of unique customers associated to a metric, optionally partitioned over any dimension provided in the `by` field * `interval`: aggregation interval, such as `\"hour\"`,`\"day\"`,`\"week\"`, and `\"month\"` * `metric_id`: the metric ID used in the aggregation * `filter`: list of filters for specific fields, must include time range using ISO 8601 format (`\"YYYY-MM-DDTHH:MM:SS.mmmmmm\"`)     * The time range can be filtered by providing a `greater_or_equal` filter on the datetime field, such as `\"greater-or-equal(datetime,2021-07-01T00:00:00)\"` and a `less-than` filter on the same datetime field, such as `\"less-than(datetime,2022-07-01T00:00:00)\"`     * The time range may span a maximum of one year. Time range dates may be set to a maximum of 5 years prior to the current date     * Filter the list of supported aggregate dimensions using the common filter syntax, such as `\"equals(URL,\\\"https://www.klaviyo.com/\\\")\"` * `timezone`: the timezone used when processing the query. Case sensitive. This field is validated against a list of common timezones from the [IANA Time Zone Database](https://www.iana.org/time-zones)  For a comprehensive list of native Klaviyo metrics and their associated attributes for grouping and filtering, please refer to the [metrics attributes guide](https://developers.klaviyo.com/en/v2022-10-17/docs/supported_metrics_and_attributes).<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `60/m`  **Scopes:** `Metrics Read`
     * @summary Query Metric Aggregates
     * @param {MetricsApiQueryMetricAggregatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     */
    public queryMetricAggregates(requestParameters: MetricsApiQueryMetricAggregatesRequest, options?: AxiosRequestConfig) {
        return MetricsApiFp(this.configuration).queryMetricAggregates(requestParameters.revision, requestParameters.MetricAggregateQuery, options).then((request) => request(this.axios, this.basePath));
    }
}