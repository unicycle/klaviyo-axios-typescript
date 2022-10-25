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
import { CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes } from './catalog-category-create-job-create-query-as-sub-resource-attributes';

/**
 * 
 * @export
 * @interface CatalogCategoryCreateJobCreateQueryAsSubResource
 */
export interface CatalogCategoryCreateJobCreateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof CatalogCategoryCreateJobCreateQueryAsSubResource
     */
    'type': CatalogCategoryCreateJobCreateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes}
     * @memberof CatalogCategoryCreateJobCreateQueryAsSubResource
     */
    'attributes': CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes;
}

export const CatalogCategoryCreateJobCreateQueryAsSubResourceTypeEnum = {
    catalog_category_bulk_create_job: 'catalog-category-bulk-create-job'
} as const;

export type CatalogCategoryCreateJobCreateQueryAsSubResourceTypeEnum = typeof CatalogCategoryCreateJobCreateQueryAsSubResourceTypeEnum[keyof typeof CatalogCategoryCreateJobCreateQueryAsSubResourceTypeEnum];


