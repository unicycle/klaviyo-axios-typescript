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
 * @interface GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsListsDataInner
 */
export interface GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsListsDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsListsDataInner
     */
    'type': GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsListsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsListsDataInner
     */
    'id': string;
}

export const GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsListsDataInnerTypeEnum = {
    list: 'list'
} as const;

export type GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsListsDataInnerTypeEnum = typeof GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsListsDataInnerTypeEnum[keyof typeof GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsListsDataInnerTypeEnum];


