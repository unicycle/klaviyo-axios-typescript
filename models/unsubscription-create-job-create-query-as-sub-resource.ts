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
import { UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes } from './unsubscription-create-job-create-query-as-sub-resource-attributes';

/**
 * 
 * @export
 * @interface UnsubscriptionCreateJobCreateQueryAsSubResource
 */
export interface UnsubscriptionCreateJobCreateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof UnsubscriptionCreateJobCreateQueryAsSubResource
     */
    'type': UnsubscriptionCreateJobCreateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes}
     * @memberof UnsubscriptionCreateJobCreateQueryAsSubResource
     */
    'attributes': UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes;
}

export const UnsubscriptionCreateJobCreateQueryAsSubResourceTypeEnum = {
    profile_unsubscription_bulk_create_job: 'profile-unsubscription-bulk-create-job'
} as const;

export type UnsubscriptionCreateJobCreateQueryAsSubResourceTypeEnum = typeof UnsubscriptionCreateJobCreateQueryAsSubResourceTypeEnum[keyof typeof UnsubscriptionCreateJobCreateQueryAsSubResourceTypeEnum];

