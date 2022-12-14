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
import { CatalogItemUpdateQueryAsSubResourceAttributes } from './catalog-item-update-query-as-sub-resource-attributes';
// May contain unused imports in some cases
// @ts-ignore
import { GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships } from './get-catalog-category-create-job-response-collection-with-included-section-data-inner-relationships';

/**
 * 
 * @export
 * @interface CatalogItemUpdateQueryAsSubResource
 */
export interface CatalogItemUpdateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof CatalogItemUpdateQueryAsSubResource
     */
    'type': CatalogItemUpdateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CatalogItemUpdateQueryAsSubResource
     */
    'id': string;
    /**
     * 
     * @type {CatalogItemUpdateQueryAsSubResourceAttributes}
     * @memberof CatalogItemUpdateQueryAsSubResource
     */
    'attributes': CatalogItemUpdateQueryAsSubResourceAttributes;
    /**
     * 
     * @type {GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships}
     * @memberof CatalogItemUpdateQueryAsSubResource
     */
    'relationships'?: GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships;
}

export const CatalogItemUpdateQueryAsSubResourceTypeEnum = {
    catalog_item: 'catalog-item'
} as const;

export type CatalogItemUpdateQueryAsSubResourceTypeEnum = typeof CatalogItemUpdateQueryAsSubResourceTypeEnum[keyof typeof CatalogItemUpdateQueryAsSubResourceTypeEnum];


