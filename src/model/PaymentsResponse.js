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
import BaseResponse from './BaseResponse';
import PaymentsResponseAllOf from './PaymentsResponseAllOf';
import PaymentsResponseAllOfData from './PaymentsResponseAllOfData';

/**
 * The PaymentsResponse model module.
 * @module model/PaymentsResponse
 * @version 1.0.0
 */
class PaymentsResponse {
    /**
     * Constructs a new <code>PaymentsResponse</code>.
     * @alias module:model/PaymentsResponse
     * @implements module:model/BaseResponse
     * @implements module:model/PaymentsResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);PaymentsResponseAllOf.initialize(this);
        PaymentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentsResponse} obj Optional instance to populate.
     * @return {module:model/PaymentsResponse} The populated <code>PaymentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentsResponse();
            BaseResponse.constructFromObject(data, obj);
            PaymentsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = PaymentsResponseAllOfData.constructFromObject(data['data']);

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
 * If the response is successful or not
 * @member {Boolean} success
 */
PaymentsResponse.prototype['success'] = undefined;

/**
 * @member {module:model/PaymentsResponseAllOfData} data
 */
PaymentsResponse.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement PaymentsResponseAllOf interface:
/**
 * @member {module:model/PaymentsResponseAllOfData} data
 */
PaymentsResponseAllOf.prototype['data'] = undefined;




export default PaymentsResponse;

