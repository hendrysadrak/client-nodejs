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
 * The UserIDsAllOf model module.
 * @module model/UserIDsAllOf
 * @version 1.0.0
 */
class UserIDsAllOf {
    /**
     * Constructs a new <code>UserIDsAllOf</code>.
     * @alias module:model/UserIDsAllOf
     */
    constructor() { 
        
        UserIDsAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserIDsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserIDsAllOf} obj Optional instance to populate.
     * @return {module:model/UserIDsAllOf} The populated <code>UserIDsAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserIDsAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], ['Number']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * List of User IDs
 * @member {Array.<Number>} data
 */
UserIDsAllOf.prototype['data'] = undefined;






export default UserIDsAllOf;

