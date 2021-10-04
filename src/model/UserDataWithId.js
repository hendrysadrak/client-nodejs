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
import UserData from './UserData';

/**
 * The UserDataWithId model module.
 * @module model/UserDataWithId
 * @version 1.0.0
 */
class UserDataWithId {
    /**
     * Constructs a new <code>UserDataWithId</code>.
     * @alias module:model/UserDataWithId
     * @implements module:model/UserData
     */
    constructor() { 
        UserData.initialize(this);
        UserDataWithId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserDataWithId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserDataWithId} obj Optional instance to populate.
     * @return {module:model/UserDataWithId} The populated <code>UserDataWithId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserDataWithId();
            UserData.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');

                delete data['email'];
            }
            if (data.hasOwnProperty('has_pic')) {
                obj['has_pic'] = ApiClient.convertToType(data['has_pic'], 'Number');

                delete data['has_pic'];
            }
            if (data.hasOwnProperty('pic_hash')) {
                obj['pic_hash'] = ApiClient.convertToType(data['pic_hash'], 'String');

                delete data['pic_hash'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the User
 * @member {Number} id
 */
UserDataWithId.prototype['id'] = undefined;

/**
 * The name of the User
 * @member {String} name
 */
UserDataWithId.prototype['name'] = undefined;

/**
 * The email of the User
 * @member {String} email
 */
UserDataWithId.prototype['email'] = undefined;

/**
 * Whether the User has picture or not. 0 = No picture, 1 = Has picture.
 * @member {Number} has_pic
 */
UserDataWithId.prototype['has_pic'] = undefined;

/**
 * The User picture hash
 * @member {String} pic_hash
 */
UserDataWithId.prototype['pic_hash'] = undefined;

/**
 * If the User is activated or not
 * @member {Boolean} active_flag
 */
UserDataWithId.prototype['active_flag'] = undefined;


// Implement UserData interface:
/**
 * The ID of the User
 * @member {Number} id
 */
UserData.prototype['id'] = undefined;
/**
 * The name of the User
 * @member {String} name
 */
UserData.prototype['name'] = undefined;
/**
 * The email of the User
 * @member {String} email
 */
UserData.prototype['email'] = undefined;
/**
 * Whether the User has picture or not. 0 = No picture, 1 = Has picture.
 * @member {Number} has_pic
 */
UserData.prototype['has_pic'] = undefined;
/**
 * The User picture hash
 * @member {String} pic_hash
 */
UserData.prototype['pic_hash'] = undefined;
/**
 * If the User is activated or not
 * @member {Boolean} active_flag
 */
UserData.prototype['active_flag'] = undefined;




export default UserDataWithId;

