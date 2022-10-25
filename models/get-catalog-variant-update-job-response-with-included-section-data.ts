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
// May contain unused imports in some cases
// @ts-ignore
import { IncludedVariants } from './included-variants';

/**
 * 
 * @export
 * @interface GetCatalogVariantUpdateJobResponseWithIncludedSectionData
 */
export interface GetCatalogVariantUpdateJobResponseWithIncludedSectionData {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantUpdateJobResponseWithIncludedSectionData
     */
    'type': GetCatalogVariantUpdateJobResponseWithIncludedSectionDataTypeEnum;
    /**
     * 
     * @type {GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof GetCatalogVariantUpdateJobResponseWithIncludedSectionData
     */
    'attributes': GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationships}
     * @memberof GetCatalogVariantUpdateJobResponseWithIncludedSectionData
     */
    'relationships'?: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationships;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetCatalogVariantUpdateJobResponseWithIncludedSectionData
     */
    'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
    /**
     * 
     * @type {Array<IncludedVariants>}
     * @memberof GetCatalogVariantUpdateJobResponseWithIncludedSectionData
     */
    'included'?: Array<IncludedVariants>;
}

export const GetCatalogVariantUpdateJobResponseWithIncludedSectionDataTypeEnum = {
    catalog_variant_bulk_update_job: 'catalog-variant-bulk-update-job'
} as const;

export type GetCatalogVariantUpdateJobResponseWithIncludedSectionDataTypeEnum = typeof GetCatalogVariantUpdateJobResponseWithIncludedSectionDataTypeEnum[keyof typeof GetCatalogVariantUpdateJobResponseWithIncludedSectionDataTypeEnum];

