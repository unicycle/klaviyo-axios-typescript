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
import { UtmParamInfo } from './utm-param-info';

/**
 * 
 * @export
 * @interface EmailTrackingOptions
 */
export interface EmailTrackingOptions {
    /**
     * 
     * @type {boolean}
     * @memberof EmailTrackingOptions
     */
    'add_utm': boolean;
    /**
     * 
     * @type {Array<UtmParamInfo>}
     * @memberof EmailTrackingOptions
     */
    'utm_params': Array<UtmParamInfo>;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTrackingOptions
     */
    'is_tracking_opens': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmailTrackingOptions
     */
    'is_tracking_clicks': boolean;
}

