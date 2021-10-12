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
 * The DealTitleParameter model module.
 * @module model/DealTitleParameter
 * @version 1.0.0
 */
class DealTitleParameter {
    /**
     * Constructs a new <code>DealTitleParameter</code>.
     * @alias module:model/DealTitleParameter
     */
    constructor() { 
        
        DealTitleParameter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealTitleParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealTitleParameter} obj Optional instance to populate.
     * @return {module:model/DealTitleParameter} The populated <code>DealTitleParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealTitleParameter();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Deal title
 * @member {String} title
 */
DealTitleParameter.prototype['title'] = undefined;






export default DealTitleParameter;

