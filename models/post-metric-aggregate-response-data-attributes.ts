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
import { MetricAggregateRowDTO } from './metric-aggregate-row-dto';

/**
 * 
 * @export
 * @interface PostMetricAggregateResponseDataAttributes
 */
export interface PostMetricAggregateResponseDataAttributes {
    /**
     * 
     * @type {Array<string>}
     * @memberof PostMetricAggregateResponseDataAttributes
     */
    'dates': Array<string>;
    /**
     * 
     * @type {Array<MetricAggregateRowDTO>}
     * @memberof PostMetricAggregateResponseDataAttributes
     */
    'data': Array<MetricAggregateRowDTO>;
}
