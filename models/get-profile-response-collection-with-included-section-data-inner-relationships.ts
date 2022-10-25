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
import { GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsLists } from './get-profile-response-collection-with-included-section-data-inner-relationships-lists';
// May contain unused imports in some cases
// @ts-ignore
import { GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegments } from './get-profile-response-collection-with-included-section-data-inner-relationships-segments';

/**
 * 
 * @export
 * @interface GetProfileResponseCollectionWithIncludedSectionDataInnerRelationships
 */
export interface GetProfileResponseCollectionWithIncludedSectionDataInnerRelationships {
    /**
     * 
     * @type {GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsLists}
     * @memberof GetProfileResponseCollectionWithIncludedSectionDataInnerRelationships
     */
    'lists'?: GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsLists;
    /**
     * 
     * @type {GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegments}
     * @memberof GetProfileResponseCollectionWithIncludedSectionDataInnerRelationships
     */
    'segments'?: GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegments;
}

