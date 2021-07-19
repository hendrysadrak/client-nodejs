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
import BaseStage from './BaseStage';

/**
 * The GetAddUpdateStage model module.
 * @module model/GetAddUpdateStage
 * @version 1.0.0
 */
class GetAddUpdateStage {
    /**
     * Constructs a new <code>GetAddUpdateStage</code>.
     * @alias module:model/GetAddUpdateStage
     */
    constructor() { 
        
        GetAddUpdateStage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAddUpdateStage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddUpdateStage} obj Optional instance to populate.
     * @return {module:model/GetAddUpdateStage} The populated <code>GetAddUpdateStage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddUpdateStage();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = BaseStage.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * If the request was successful or not
 * @member {Boolean} success
 */
GetAddUpdateStage.prototype['success'] = undefined;

/**
 * @member {module:model/BaseStage} data
 */
GetAddUpdateStage.prototype['data'] = undefined;






export default GetAddUpdateStage;
