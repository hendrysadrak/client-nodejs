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
import ProductWithObjectPrices from './ProductWithObjectPrices';

/**
 * The ProductListItem model module.
 * @module model/ProductListItem
 * @version 1.0.0
 */
class ProductListItem {
    /**
     * Constructs a new <code>ProductListItem</code>.
     * @alias module:model/ProductListItem
     */
    constructor() { 
        
        ProductListItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductListItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductListItem} obj Optional instance to populate.
     * @return {module:model/ProductListItem} The populated <code>ProductListItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductListItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('order_nr')) {
                obj['order_nr'] = ApiClient.convertToType(data['order_nr'], 'Number');

                delete data['order_nr'];
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');

                delete data['product_id'];
            }
            if (data.hasOwnProperty('product_variation_id')) {
                obj['product_variation_id'] = ApiClient.convertToType(data['product_variation_id'], 'Number');

                delete data['product_variation_id'];
            }
            if (data.hasOwnProperty('item_price')) {
                obj['item_price'] = ApiClient.convertToType(data['item_price'], 'Number');

                delete data['item_price'];
            }
            if (data.hasOwnProperty('discount_percentage')) {
                obj['discount_percentage'] = ApiClient.convertToType(data['discount_percentage'], 'Number');

                delete data['discount_percentage'];
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');

                delete data['duration'];
            }
            if (data.hasOwnProperty('duration_unit')) {
                obj['duration_unit'] = ApiClient.convertToType(data['duration_unit'], 'String');

                delete data['duration_unit'];
            }
            if (data.hasOwnProperty('sum_no_discount')) {
                obj['sum_no_discount'] = ApiClient.convertToType(data['sum_no_discount'], 'Number');

                delete data['sum_no_discount'];
            }
            if (data.hasOwnProperty('sum')) {
                obj['sum'] = ApiClient.convertToType(data['sum'], 'Number');

                delete data['sum'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
            }
            if (data.hasOwnProperty('enabled_flag')) {
                obj['enabled_flag'] = ApiClient.convertToType(data['enabled_flag'], 'Boolean');

                delete data['enabled_flag'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('last_edit')) {
                obj['last_edit'] = ApiClient.convertToType(data['last_edit'], 'String');

                delete data['last_edit'];
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');

                delete data['comments'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');

                delete data['tax'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('sum_formatted')) {
                obj['sum_formatted'] = ApiClient.convertToType(data['sum_formatted'], 'String');

                delete data['sum_formatted'];
            }
            if (data.hasOwnProperty('quantity_formatted')) {
                obj['quantity_formatted'] = ApiClient.convertToType(data['quantity_formatted'], 'String');

                delete data['quantity_formatted'];
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');

                delete data['quantity'];
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = ProductWithObjectPrices.constructFromObject(data['product']);

                delete data['product'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the deal-product (the ID of the Product attached to the Deal)
 * @member {Number} id
 */
ProductListItem.prototype['id'] = undefined;

/**
 * The ID of the Deal
 * @member {Number} deal_id
 */
ProductListItem.prototype['deal_id'] = undefined;

/**
 * Order number of the Product
 * @member {Number} order_nr
 */
ProductListItem.prototype['order_nr'] = undefined;

/**
 * The ID of the Product
 * @member {Number} product_id
 */
ProductListItem.prototype['product_id'] = undefined;

/**
 * The ID of the Product variation
 * @member {Number} product_variation_id
 */
ProductListItem.prototype['product_variation_id'] = undefined;

/**
 * Price value of the Product
 * @member {Number} item_price
 */
ProductListItem.prototype['item_price'] = undefined;

/**
 * Discount percentage of the Product
 * @member {Number} discount_percentage
 */
ProductListItem.prototype['discount_percentage'] = undefined;

/**
 * Duration of the Product
 * @member {Number} duration
 */
ProductListItem.prototype['duration'] = undefined;

/**
 * The type of the duration. (For example hourly, daily, etc.)
 * @member {String} duration_unit
 */
ProductListItem.prototype['duration_unit'] = undefined;

/**
 * The Product sum without the discount
 * @member {Number} sum_no_discount
 */
ProductListItem.prototype['sum_no_discount'] = undefined;

/**
 * The sum of all the Products attached to the Deal
 * @member {Number} sum
 */
ProductListItem.prototype['sum'] = undefined;

/**
 * The currency associated with the Deal Product
 * @member {String} currency
 */
ProductListItem.prototype['currency'] = undefined;

/**
 * If Product is enabled or not
 * @member {Boolean} enabled_flag
 */
ProductListItem.prototype['enabled_flag'] = undefined;

/**
 * The date and time when the Product was added to the Deal
 * @member {String} add_time
 */
ProductListItem.prototype['add_time'] = undefined;

/**
 * The date and time when the Deal Product was last edited
 * @member {String} last_edit
 */
ProductListItem.prototype['last_edit'] = undefined;

/**
 * Comments of the Product
 * @member {String} comments
 */
ProductListItem.prototype['comments'] = undefined;

/**
 * Boolean indicates if the Product is activated or not
 * @member {Boolean} active_flag
 */
ProductListItem.prototype['active_flag'] = undefined;

/**
 * The Product tax
 * @member {Number} tax
 */
ProductListItem.prototype['tax'] = undefined;

/**
 * The Product name
 * @member {String} name
 */
ProductListItem.prototype['name'] = undefined;

/**
 * Formatted sum of the Product
 * @member {String} sum_formatted
 */
ProductListItem.prototype['sum_formatted'] = undefined;

/**
 * Formatted quantity of the Product
 * @member {String} quantity_formatted
 */
ProductListItem.prototype['quantity_formatted'] = undefined;

/**
 * Quantity of the Product
 * @member {Number} quantity
 */
ProductListItem.prototype['quantity'] = undefined;

/**
 * @member {module:model/ProductWithObjectPrices} product
 */
ProductListItem.prototype['product'] = undefined;






export default ProductListItem;

