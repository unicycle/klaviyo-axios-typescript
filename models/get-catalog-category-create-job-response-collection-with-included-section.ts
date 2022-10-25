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
import { GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner } from './get-catalog-category-create-job-response-collection-with-included-section-data-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GetCatalogItemResponseCollectionWithIncludedSectionLinks } from './get-catalog-item-response-collection-with-included-section-links';

/**
 * 
 * @export
 * @interface GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection
 */
export interface GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection {
    /**
     * 
     * @type {Array<GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner>}
     * @memberof GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection
     */
    'data': Array<GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner>;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionLinks}
     * @memberof GetCatalogCategoryCreateJobResponseCollectionWithIncludedSection
     */
    'links': GetCatalogItemResponseCollectionWithIncludedSectionLinks;
}

