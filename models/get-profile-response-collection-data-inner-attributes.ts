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
import { ProfileLocation } from './profile-location';

/**
 * 
 * @export
 * @interface GetProfileResponseCollectionDataInnerAttributes
 */
export interface GetProfileResponseCollectionDataInnerAttributes {
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'phone_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'external_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'anonymous_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'last_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'organization'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'image'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'created'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'updated'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'last_event_date'?: string;
    /**
     * 
     * @type {ProfileLocation}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'location'?: ProfileLocation;
    /**
     * 
     * @type {object}
     * @memberof GetProfileResponseCollectionDataInnerAttributes
     */
    'properties'?: object;
}
