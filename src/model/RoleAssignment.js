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
import BaseRole from './BaseRole';
import RoleAssignmentAllOf from './RoleAssignmentAllOf';

/**
 * The RoleAssignment model module.
 * @module model/RoleAssignment
 * @version 1.0.0
 */
class RoleAssignment {
    /**
     * Constructs a new <code>RoleAssignment</code>.
     * The assignment data of the Role
     * @alias module:model/RoleAssignment
     * @implements module:model/BaseRole
     * @implements module:model/RoleAssignmentAllOf
     */
    constructor() { 
        BaseRole.initialize(this);RoleAssignmentAllOf.initialize(this);
        RoleAssignment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoleAssignment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleAssignment} obj Optional instance to populate.
     * @return {module:model/RoleAssignment} The populated <code>RoleAssignment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleAssignment();
            BaseRole.constructFromObject(data, obj);
            RoleAssignmentAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('parent_role_id')) {
                obj['parent_role_id'] = ApiClient.convertToType(data['parent_role_id'], 'Number');

                delete data['parent_role_id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
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
 * The ID of the parent Role
 * @member {Number} parent_role_id
 */
RoleAssignment.prototype['parent_role_id'] = undefined;

/**
 * The name of the Role
 * @member {String} name
 */
RoleAssignment.prototype['name'] = undefined;

/**
 * The User ID
 * @member {Number} user_id
 */
RoleAssignment.prototype['user_id'] = undefined;

/**
 * The Role ID
 * @member {Number} role_id
 */
RoleAssignment.prototype['role_id'] = undefined;

/**
 * Whether the Role is active or not
 * @member {Boolean} active_flag
 */
RoleAssignment.prototype['active_flag'] = undefined;

/**
 * The assignment type
 * @member {String} type
 */
RoleAssignment.prototype['type'] = undefined;


// Implement BaseRole interface:
/**
 * The ID of the parent Role
 * @member {Number} parent_role_id
 */
BaseRole.prototype['parent_role_id'] = undefined;
/**
 * The name of the Role
 * @member {String} name
 */
BaseRole.prototype['name'] = undefined;
// Implement RoleAssignmentAllOf interface:
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




export default RoleAssignment;

