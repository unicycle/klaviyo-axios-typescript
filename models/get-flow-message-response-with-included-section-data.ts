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
import { GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks } from './get-catalog-item-response-collection-with-included-section-data-inner-links';
// May contain unused imports in some cases
// @ts-ignore
import { GetFlowMessageResponseCollectionDataInnerAttributes } from './get-flow-message-response-collection-data-inner-attributes';
// May contain unused imports in some cases
// @ts-ignore
import { GetFlowMessageResponseWithIncludedSectionDataRelationships } from './get-flow-message-response-with-included-section-data-relationships';
// May contain unused imports in some cases
// @ts-ignore
import { IncludedFlowAction } from './included-flow-action';

/**
 * 
 * @export
 * @interface GetFlowMessageResponseWithIncludedSectionData
 */
export interface GetFlowMessageResponseWithIncludedSectionData {
    /**
     * 
     * @type {string}
     * @memberof GetFlowMessageResponseWithIncludedSectionData
     */
    'type': GetFlowMessageResponseWithIncludedSectionDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetFlowMessageResponseWithIncludedSectionData
     */
    'id': string;
    /**
     * 
     * @type {GetFlowMessageResponseCollectionDataInnerAttributes}
     * @memberof GetFlowMessageResponseWithIncludedSectionData
     */
    'attributes': GetFlowMessageResponseCollectionDataInnerAttributes;
    /**
     * 
     * @type {GetFlowMessageResponseWithIncludedSectionDataRelationships}
     * @memberof GetFlowMessageResponseWithIncludedSectionData
     */
    'relationships'?: GetFlowMessageResponseWithIncludedSectionDataRelationships;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetFlowMessageResponseWithIncludedSectionData
     */
    'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
    /**
     * 
     * @type {Array<IncludedFlowAction>}
     * @memberof GetFlowMessageResponseWithIncludedSectionData
     */
    'included'?: Array<IncludedFlowAction>;
}

export const GetFlowMessageResponseWithIncludedSectionDataTypeEnum = {
    flow_message: 'flow-message'
} as const;

export type GetFlowMessageResponseWithIncludedSectionDataTypeEnum = typeof GetFlowMessageResponseWithIncludedSectionDataTypeEnum[keyof typeof GetFlowMessageResponseWithIncludedSectionDataTypeEnum];


