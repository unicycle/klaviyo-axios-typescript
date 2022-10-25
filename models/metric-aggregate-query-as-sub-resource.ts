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


// May contain unused imports in some cases
// @ts-ignore
import { MetricAggregateQueryAsSubResourceAttributes } from './metric-aggregate-query-as-sub-resource-attributes';

/**
 * 
 * @export
 * @interface MetricAggregateQueryAsSubResource
 */
export interface MetricAggregateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof MetricAggregateQueryAsSubResource
     */
    'type': MetricAggregateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {MetricAggregateQueryAsSubResourceAttributes}
     * @memberof MetricAggregateQueryAsSubResource
     */
    'attributes': MetricAggregateQueryAsSubResourceAttributes;
}

export const MetricAggregateQueryAsSubResourceTypeEnum = {
    metric_aggregate: 'metric-aggregate'
} as const;

export type MetricAggregateQueryAsSubResourceTypeEnum = typeof MetricAggregateQueryAsSubResourceTypeEnum[keyof typeof MetricAggregateQueryAsSubResourceTypeEnum];


