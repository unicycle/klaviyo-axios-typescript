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
import { GetCatalogItemResponseCollectionWithIncludedSectionLinks } from './get-catalog-item-response-collection-with-included-section-links';
// May contain unused imports in some cases
// @ts-ignore
import { GetMetricResponseCollectionDataInner } from './get-metric-response-collection-data-inner';

/**
 * 
 * @export
 * @interface GetMetricResponseCollection
 */
export interface GetMetricResponseCollection {
    /**
     * 
     * @type {Array<GetMetricResponseCollectionDataInner>}
     * @memberof GetMetricResponseCollection
     */
    'data': Array<GetMetricResponseCollectionDataInner>;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionLinks}
     * @memberof GetMetricResponseCollection
     */
    'links': GetCatalogItemResponseCollectionWithIncludedSectionLinks;
}

