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
 * The ListProductFollowersResponseAllOfData model module.
 * @module model/ListProductFollowersResponseAllOfData
 * @version 1.0.0
 */
class ListProductFollowersResponseAllOfData {
    /**
     * Constructs a new <code>ListProductFollowersResponseAllOfData</code>.
     * @alias module:model/ListProductFollowersResponseAllOfData
     */
    constructor() { 
        
        ListProductFollowersResponseAllOfData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListProductFollowersResponseAllOfData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListProductFollowersResponseAllOfData} obj Optional instance to populate.
     * @return {module:model/ListProductFollowersResponseAllOfData} The populated <code>ListProductFollowersResponseAllOfData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListProductFollowersResponseAllOfData();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');

                delete data['product_id'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The ID of the User
 * @member {Number} user_id
 */
ListProductFollowersResponseAllOfData.prototype['user_id'] = undefined;

/**
 * The ID of the User follower
 * @member {Number} id
 */
ListProductFollowersResponseAllOfData.prototype['id'] = undefined;

/**
 * The ID of the Product
 * @member {Number} product_id
 */
ListProductFollowersResponseAllOfData.prototype['product_id'] = undefined;

/**
 * The date and time when the Follower was added to the Person
 * @member {String} add_time
 */
ListProductFollowersResponseAllOfData.prototype['add_time'] = undefined;






export default ListProductFollowersResponseAllOfData;

