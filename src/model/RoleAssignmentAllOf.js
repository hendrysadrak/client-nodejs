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
 * The RoleAssignmentAllOf model module.
 * @module model/RoleAssignmentAllOf
 * @version 1.0.0
 */
class RoleAssignmentAllOf {
    /**
     * Constructs a new <code>RoleAssignmentAllOf</code>.
     * @alias module:model/RoleAssignmentAllOf
     */
    constructor() { 
        
        RoleAssignmentAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoleAssignmentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleAssignmentAllOf} obj Optional instance to populate.
     * @return {module:model/RoleAssignmentAllOf} The populated <code>RoleAssignmentAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleAssignmentAllOf();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('role_id')) {
                obj['role_id'] = ApiClient.convertToType(data['role_id'], 'Number');

                delete data['role_id'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');

                delete data['type'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The User ID
 * @member {Number} user_id
 */
RoleAssignmentAllOf.prototype['user_id'] = undefined;

/**
 * The Role ID
 * @member {Number} role_id
 */
RoleAssignmentAllOf.prototype['role_id'] = undefined;

/**
 * Whether the Role is active or not
 * @member {Boolean} active_flag
 */
RoleAssignmentAllOf.prototype['active_flag'] = undefined;

/**
 * The assignment type
 * @member {String} type
 */
RoleAssignmentAllOf.prototype['type'] = undefined;






export default RoleAssignmentAllOf;

