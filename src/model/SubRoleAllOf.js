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
 * The SubRoleAllOf model module.
 * @module model/SubRoleAllOf
 * @version 1.0.0
 */
class SubRoleAllOf {
    /**
     * Constructs a new <code>SubRoleAllOf</code>.
     * @alias module:model/SubRoleAllOf
     */
    constructor() { 
        
        SubRoleAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubRoleAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubRoleAllOf} obj Optional instance to populate.
     * @return {module:model/SubRoleAllOf} The populated <code>SubRoleAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubRoleAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('assignment_count')) {
                obj['assignment_count'] = ApiClient.convertToType(data['assignment_count'], 'String');

                delete data['assignment_count'];
            }
            if (data.hasOwnProperty('sub_role_count')) {
                obj['sub_role_count'] = ApiClient.convertToType(data['sub_role_count'], 'String');

                delete data['sub_role_count'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the Role
 * @member {Number} id
 */
SubRoleAllOf.prototype['id'] = undefined;

/**
 * If the Role is active or not
 * @member {Boolean} active_flag
 */
SubRoleAllOf.prototype['active_flag'] = undefined;

/**
 * The number of Users assigned to this Role
 * @member {String} assignment_count
 */
SubRoleAllOf.prototype['assignment_count'] = undefined;

/**
 * The number of sub-roles
 * @member {String} sub_role_count
 */
SubRoleAllOf.prototype['sub_role_count'] = undefined;






export default SubRoleAllOf;

