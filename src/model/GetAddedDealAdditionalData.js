/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetAddedDealAdditionalData model module.
 * @module model/GetAddedDealAdditionalData
 * @version 1.0.0
 */
class GetAddedDealAdditionalData {
    /**
     * Constructs a new <code>GetAddedDealAdditionalData</code>.
     * @alias module:model/GetAddedDealAdditionalData
     */
    constructor() { 
        
        GetAddedDealAdditionalData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAddedDealAdditionalData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddedDealAdditionalData} obj Optional instance to populate.
     * @return {module:model/GetAddedDealAdditionalData} The populated <code>GetAddedDealAdditionalData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddedDealAdditionalData();

            if (data.hasOwnProperty('matches_filters')) {
                obj['matches_filters'] = ApiClient.convertToType(data['matches_filters'], ['Number']);

                delete data['matches_filters'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The array of filter ID's with what this added Deal matches
 * @member {Array.<Number>} matches_filters
 */
GetAddedDealAdditionalData.prototype['matches_filters'] = undefined;






export default GetAddedDealAdditionalData;

