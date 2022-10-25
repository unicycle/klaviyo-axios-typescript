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
 * @interface GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInner
 */
export interface GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInner
     */
    'type': GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInner
     */
    'id': string;
}

export const GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInnerTypeEnum = {
    flow: 'flow'
} as const;

export type GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInnerTypeEnum = typeof GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInnerTypeEnum[keyof typeof GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInnerTypeEnum];


