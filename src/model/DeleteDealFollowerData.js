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
 * The DeleteDealFollowerData model module.
 * @module model/DeleteDealFollowerData
 * @version 1.0.0
 */
class DeleteDealFollowerData {
    /**
     * Constructs a new <code>DeleteDealFollowerData</code>.
     * @alias module:model/DeleteDealFollowerData
     */
    constructor() { 
        
        DeleteDealFollowerData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteDealFollowerData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteDealFollowerData} obj Optional instance to populate.
     * @return {module:model/DeleteDealFollowerData} The populated <code>DeleteDealFollowerData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteDealFollowerData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the Deal Follower that was deleted
 * @member {Number} id
 */
DeleteDealFollowerData.prototype['id'] = undefined;






export default DeleteDealFollowerData;

