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



/**
 * 
 * @export
 * @interface CatalogCategoryCreateQueryAsSubResourceAttributes
 */
export interface CatalogCategoryCreateQueryAsSubResourceAttributes {
    /**
     * 
     * @type {string}
     * @memberof CatalogCategoryCreateQueryAsSubResourceAttributes
     */
    'external_id': string;
    /**
     * 
     * @type {string}
     * @memberof CatalogCategoryCreateQueryAsSubResourceAttributes
     */
    'name': string;
    /**
     * The integration type. Currently, this can only be set to $custom (and defaults to $custom if not included in the payload).
     * @type {string}
     * @memberof CatalogCategoryCreateQueryAsSubResourceAttributes
     */
    'integration_type'?: CatalogCategoryCreateQueryAsSubResourceAttributesIntegrationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CatalogCategoryCreateQueryAsSubResourceAttributes
     */
    'catalog_type'?: string;
}

export const CatalogCategoryCreateQueryAsSubResourceAttributesIntegrationTypeEnum = {
    custom: '$custom'
} as const;

export type CatalogCategoryCreateQueryAsSubResourceAttributesIntegrationTypeEnum = typeof CatalogCategoryCreateQueryAsSubResourceAttributesIntegrationTypeEnum[keyof typeof CatalogCategoryCreateQueryAsSubResourceAttributesIntegrationTypeEnum];


