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
import { GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships } from './get-catalog-category-create-job-response-collection-with-included-section-data-inner-relationships';
// May contain unused imports in some cases
// @ts-ignore
import { GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes } from './get-catalog-item-create-job-response-collection-with-included-section-data-inner-attributes';
// May contain unused imports in some cases
// @ts-ignore
import { GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks } from './get-catalog-item-response-collection-with-included-section-data-inner-links';

/**
 * 
 * @export
 * @interface GetCatalogCategoryDeleteJobResponseCollectionDataInner
 */
export interface GetCatalogCategoryDeleteJobResponseCollectionDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogCategoryDeleteJobResponseCollectionDataInner
     */
    'type': GetCatalogCategoryDeleteJobResponseCollectionDataInnerTypeEnum;
    /**
     * 
     * @type {GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof GetCatalogCategoryDeleteJobResponseCollectionDataInner
     */
    'attributes': GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships}
     * @memberof GetCatalogCategoryDeleteJobResponseCollectionDataInner
     */
    'relationships'?: GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetCatalogCategoryDeleteJobResponseCollectionDataInner
     */
    'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}

export const GetCatalogCategoryDeleteJobResponseCollectionDataInnerTypeEnum = {
    catalog_category_bulk_delete_job: 'catalog-category-bulk-delete-job'
} as const;

export type GetCatalogCategoryDeleteJobResponseCollectionDataInnerTypeEnum = typeof GetCatalogCategoryDeleteJobResponseCollectionDataInnerTypeEnum[keyof typeof GetCatalogCategoryDeleteJobResponseCollectionDataInnerTypeEnum];


