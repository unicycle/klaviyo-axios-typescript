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
import { GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks } from './get-catalog-item-response-collection-with-included-section-data-inner-links';
// May contain unused imports in some cases
// @ts-ignore
import { GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationships } from './get-catalog-item-response-collection-with-included-section-data-inner-relationships';

/**
 * 
 * @export
 * @interface GetCatalogVariantDeleteJobResponseCollectionDataInner
 */
export interface GetCatalogVariantDeleteJobResponseCollectionDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantDeleteJobResponseCollectionDataInner
     */
    'type': GetCatalogVariantDeleteJobResponseCollectionDataInnerTypeEnum;
    /**
     * 
     * @type {GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof GetCatalogVariantDeleteJobResponseCollectionDataInner
     */
    'attributes': GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationships}
     * @memberof GetCatalogVariantDeleteJobResponseCollectionDataInner
     */
    'relationships'?: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationships;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetCatalogVariantDeleteJobResponseCollectionDataInner
     */
    'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}

export const GetCatalogVariantDeleteJobResponseCollectionDataInnerTypeEnum = {
    catalog_variant_bulk_delete_job: 'catalog-variant-bulk-delete-job'
} as const;

export type GetCatalogVariantDeleteJobResponseCollectionDataInnerTypeEnum = typeof GetCatalogVariantDeleteJobResponseCollectionDataInnerTypeEnum[keyof typeof GetCatalogVariantDeleteJobResponseCollectionDataInnerTypeEnum];


