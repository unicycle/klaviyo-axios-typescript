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
import { GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks } from './get-catalog-item-response-collection-with-included-section-data-inner-links';
// May contain unused imports in some cases
// @ts-ignore
import { GetListResponseCollectionDataInnerAttributes } from './get-list-response-collection-data-inner-attributes';

/**
 * 
 * @export
 * @interface IncludedSegments
 */
export interface IncludedSegments {
    /**
     * 
     * @type {string}
     * @memberof IncludedSegments
     */
    'type': IncludedSegmentsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof IncludedSegments
     */
    'id': string;
    /**
     * 
     * @type {GetListResponseCollectionDataInnerAttributes}
     * @memberof IncludedSegments
     */
    'attributes': GetListResponseCollectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof IncludedSegments
     */
    'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}

export const IncludedSegmentsTypeEnum = {
    segment: 'segment'
} as const;

export type IncludedSegmentsTypeEnum = typeof IncludedSegmentsTypeEnum[keyof typeof IncludedSegmentsTypeEnum];

