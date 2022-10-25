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
import { GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes } from './get-catalog-item-create-job-response-collection-with-included-section-data-inner-attributes';
// May contain unused imports in some cases
// @ts-ignore
import { GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships } from './get-catalog-item-create-job-response-collection-with-included-section-data-inner-relationships';
// May contain unused imports in some cases
// @ts-ignore
import { GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks } from './get-catalog-item-response-collection-with-included-section-data-inner-links';

/**
 * 
 * @export
 * @interface GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInner
 */
export interface GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInner
     */
    'type': GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInnerTypeEnum;
    /**
     * 
     * @type {GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInner
     */
    'attributes': GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships}
     * @memberof GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInner
     */
    'relationships'?: GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInner
     */
    'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}

export const GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInnerTypeEnum = {
    catalog_item_bulk_update_job: 'catalog-item-bulk-update-job'
} as const;

export type GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInnerTypeEnum = typeof GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInnerTypeEnum[keyof typeof GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInnerTypeEnum];

