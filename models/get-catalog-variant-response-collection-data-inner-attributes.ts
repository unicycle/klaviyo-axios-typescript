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
 * @interface GetCatalogVariantResponseCollectionDataInnerAttributes
 */
export interface GetCatalogVariantResponseCollectionDataInnerAttributes {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'external_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'sku'?: string;
    /**
     * A field that controls product visibility in product feeds/blocks. This field has two options:     DENY (1): a product will not appear in dynamic product recommendation feeds and blocks if it is out of stock.     CONTINUE (2): a product can appear in dynamic product recommendation feeds and blocks regardless of inventory quantity.     UNKNOWN (0): the behavior will be the same as if it were set to 2 [Default]
     * @type {number}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'inventory_policy'?: GetCatalogVariantResponseCollectionDataInnerAttributesInventoryPolicyEnum;
    /**
     * 
     * @type {number}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'inventory_quantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'price'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'url'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'image_full_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'image_thumbnail_url'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'images'?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'custom_metadata'?: object;
    /**
     * 
     * @type {boolean}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'published'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'created'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantResponseCollectionDataInnerAttributes
     */
    'updated'?: string;
}

export const GetCatalogVariantResponseCollectionDataInnerAttributesInventoryPolicyEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;

export type GetCatalogVariantResponseCollectionDataInnerAttributesInventoryPolicyEnum = typeof GetCatalogVariantResponseCollectionDataInnerAttributesInventoryPolicyEnum[keyof typeof GetCatalogVariantResponseCollectionDataInnerAttributesInventoryPolicyEnum];


