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
 * The GetDealAdditionalData model module.
 * @module model/GetDealAdditionalData
 * @version 1.0.0
 */
class GetDealAdditionalData {
    /**
     * Constructs a new <code>GetDealAdditionalData</code>.
     * @alias module:model/GetDealAdditionalData
     */
    constructor() { 
        
        GetDealAdditionalData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDealAdditionalData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDealAdditionalData} obj Optional instance to populate.
     * @return {module:model/GetDealAdditionalData} The populated <code>GetDealAdditionalData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDealAdditionalData();

            if (data.hasOwnProperty('dropbox_email')) {
                obj['dropbox_email'] = ApiClient.convertToType(data['dropbox_email'], 'String');

                delete data['dropbox_email'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The Cc email of the Deal
 * @member {String} dropbox_email
 */
GetDealAdditionalData.prototype['dropbox_email'] = undefined;






export default GetDealAdditionalData;

