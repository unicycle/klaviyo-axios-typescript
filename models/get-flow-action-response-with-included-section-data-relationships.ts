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
import { GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessages } from './get-flow-action-response-with-included-section-data-relationships-flow-messages';
// May contain unused imports in some cases
// @ts-ignore
import { GetFlowActionResponseWithIncludedSectionDataRelationshipsFlows } from './get-flow-action-response-with-included-section-data-relationships-flows';

/**
 * 
 * @export
 * @interface GetFlowActionResponseWithIncludedSectionDataRelationships
 */
export interface GetFlowActionResponseWithIncludedSectionDataRelationships {
    /**
     * 
     * @type {GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessages}
     * @memberof GetFlowActionResponseWithIncludedSectionDataRelationships
     */
    'flow-messages'?: GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessages;
    /**
     * 
     * @type {GetFlowActionResponseWithIncludedSectionDataRelationshipsFlows}
     * @memberof GetFlowActionResponseWithIncludedSectionDataRelationships
     */
    'flows'?: GetFlowActionResponseWithIncludedSectionDataRelationshipsFlows;
}

