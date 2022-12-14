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
import { CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes } from './catalog-variant-delete-job-create-query-as-sub-resource-attributes';

/**
 * 
 * @export
 * @interface CatalogVariantDeleteJobCreateQueryAsSubResource
 */
export interface CatalogVariantDeleteJobCreateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof CatalogVariantDeleteJobCreateQueryAsSubResource
     */
    'type': CatalogVariantDeleteJobCreateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes}
     * @memberof CatalogVariantDeleteJobCreateQueryAsSubResource
     */
    'attributes': CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes;
}

export const CatalogVariantDeleteJobCreateQueryAsSubResourceTypeEnum = {
    catalog_variant_bulk_delete_job: 'catalog-variant-bulk-delete-job'
} as const;

export type CatalogVariantDeleteJobCreateQueryAsSubResourceTypeEnum = typeof CatalogVariantDeleteJobCreateQueryAsSubResourceTypeEnum[keyof typeof CatalogVariantDeleteJobCreateQueryAsSubResourceTypeEnum];


