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
// May contain unused imports in some cases
// @ts-ignore
import { IncludedItems } from './included-items';

/**
 * 
 * @export
 * @interface GetCatalogItemCreateJobResponseWithIncludedSectionData
 */
export interface GetCatalogItemCreateJobResponseWithIncludedSectionData {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogItemCreateJobResponseWithIncludedSectionData
     */
    'type': GetCatalogItemCreateJobResponseWithIncludedSectionDataTypeEnum;
    /**
     * 
     * @type {GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof GetCatalogItemCreateJobResponseWithIncludedSectionData
     */
    'attributes': GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships}
     * @memberof GetCatalogItemCreateJobResponseWithIncludedSectionData
     */
    'relationships'?: GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetCatalogItemCreateJobResponseWithIncludedSectionData
     */
    'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
    /**
     * 
     * @type {Array<IncludedItems>}
     * @memberof GetCatalogItemCreateJobResponseWithIncludedSectionData
     */
    'included'?: Array<IncludedItems>;
}

export const GetCatalogItemCreateJobResponseWithIncludedSectionDataTypeEnum = {
    catalog_item_bulk_create_job: 'catalog-item-bulk-create-job'
} as const;

export type GetCatalogItemCreateJobResponseWithIncludedSectionDataTypeEnum = typeof GetCatalogItemCreateJobResponseWithIncludedSectionDataTypeEnum[keyof typeof GetCatalogItemCreateJobResponseWithIncludedSectionDataTypeEnum];


