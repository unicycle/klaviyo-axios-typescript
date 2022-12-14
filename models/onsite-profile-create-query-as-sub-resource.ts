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
import { OnsiteProfileMeta } from './onsite-profile-meta';
// May contain unused imports in some cases
// @ts-ignore
import { ProfileCreateQueryAsSubResourceAttributes } from './profile-create-query-as-sub-resource-attributes';

/**
 * 
 * @export
 * @interface OnsiteProfileCreateQueryAsSubResource
 */
export interface OnsiteProfileCreateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof OnsiteProfileCreateQueryAsSubResource
     */
    'type': OnsiteProfileCreateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {ProfileCreateQueryAsSubResourceAttributes}
     * @memberof OnsiteProfileCreateQueryAsSubResource
     */
    'attributes': ProfileCreateQueryAsSubResourceAttributes;
    /**
     * 
     * @type {OnsiteProfileMeta}
     * @memberof OnsiteProfileCreateQueryAsSubResource
     */
    'meta'?: OnsiteProfileMeta;
}

export const OnsiteProfileCreateQueryAsSubResourceTypeEnum = {
    profile: 'profile'
} as const;

export type OnsiteProfileCreateQueryAsSubResourceTypeEnum = typeof OnsiteProfileCreateQueryAsSubResourceTypeEnum[keyof typeof OnsiteProfileCreateQueryAsSubResourceTypeEnum];


