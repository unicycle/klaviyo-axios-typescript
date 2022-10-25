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
import { GetProfileResponseCollectionDataInnerAttributes } from './get-profile-response-collection-data-inner-attributes';

/**
 * 
 * @export
 * @interface IncludedProfile
 */
export interface IncludedProfile {
    /**
     * 
     * @type {string}
     * @memberof IncludedProfile
     */
    'type': IncludedProfileTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof IncludedProfile
     */
    'id': string;
    /**
     * 
     * @type {GetProfileResponseCollectionDataInnerAttributes}
     * @memberof IncludedProfile
     */
    'attributes': GetProfileResponseCollectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof IncludedProfile
     */
    'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}

export const IncludedProfileTypeEnum = {
    profile: 'profile'
} as const;

export type IncludedProfileTypeEnum = typeof IncludedProfileTypeEnum[keyof typeof IncludedProfileTypeEnum];


