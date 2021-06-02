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


import ApiClient from "../ApiClient";
import AddLeadLabelRequest from '../model/AddLeadLabelRequest';
import AddOrUpdateLeadLabelResponse200 from '../model/AddOrUpdateLeadLabelResponse200';
import GetLeadLabelsResponse200 from '../model/GetLeadLabelsResponse200';
import LeadIdResponse200 from '../model/LeadIdResponse200';
import LeadResponse404 from '../model/LeadResponse404';
import UpdateLeadLabelRequest from '../model/UpdateLeadLabelRequest';

/**
* LeadLabels service.
* @module api/LeadLabelsApi
* @version 1.0.0
*/
export default class LeadLabelsApi {

    /**
    * Constructs a new LeadLabelsApi. 
    * @alias module:api/LeadLabelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a lead label
     * Creates a Lead Label
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLeadLabelRequest} opts.addLeadLabelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddOrUpdateLeadLabelResponse200} and HTTP response
     */
    addLeadLabelWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['addLeadLabelRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json'];
      const isUrlEncoded = contentTypes.includes('application/x-www-form-urlencoded');

      if (isUrlEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2'];
      let accepts = ['application/json'];
      let returnType = AddOrUpdateLeadLabelResponse200;
      return this.apiClient.callApi(
        '/leadLabels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a lead label
     * Creates a Lead Label
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLeadLabelRequest} opts.addLeadLabelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddOrUpdateLeadLabelResponse200}
     */
    addLeadLabel(opts) {
      return this.addLeadLabelWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a lead label
     * Deletes a specific Lead Label
     * @param {String} id The ID of the Lead Label
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeadIdResponse200} and HTTP response
     */
    deleteLeadLabelWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteLeadLabel");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isUrlEncoded = contentTypes.includes('application/x-www-form-urlencoded');

      if (isUrlEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2'];
      let accepts = ['application/json'];
      let returnType = LeadIdResponse200;
      return this.apiClient.callApi(
        '/leadLabels/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a lead label
     * Deletes a specific Lead Label
     * @param {String} id The ID of the Lead Label
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeadIdResponse200}
     */
    deleteLeadLabel(id) {
      return this.deleteLeadLabelWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all lead labels
     * Returns details of all Lead Labels. This endpoint does not support pagination and all Labels are always returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLeadLabelsResponse200} and HTTP response
     */
    getLeadLabelsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isUrlEncoded = contentTypes.includes('application/x-www-form-urlencoded');

      if (isUrlEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2'];
      let accepts = ['application/json'];
      let returnType = GetLeadLabelsResponse200;
      return this.apiClient.callApi(
        '/leadLabels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all lead labels
     * Returns details of all Lead Labels. This endpoint does not support pagination and all Labels are always returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLeadLabelsResponse200}
     */
    getLeadLabels() {
      return this.getLeadLabelsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a lead label
     * Updates one or more properties of a Lead Label. Only properties included in the request will be updated. 
     * @param {String} id The ID of the Lead Label
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLeadLabelRequest} opts.updateLeadLabelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddOrUpdateLeadLabelResponse200} and HTTP response
     */
    updateLeadLabelWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateLeadLabelRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateLeadLabel");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json'];
      const isUrlEncoded = contentTypes.includes('application/x-www-form-urlencoded');

      if (isUrlEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2'];
      let accepts = ['application/json'];
      let returnType = AddOrUpdateLeadLabelResponse200;
      return this.apiClient.callApi(
        '/leadLabels/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a lead label
     * Updates one or more properties of a Lead Label. Only properties included in the request will be updated. 
     * @param {String} id The ID of the Lead Label
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLeadLabelRequest} opts.updateLeadLabelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddOrUpdateLeadLabelResponse200}
     */
    updateLeadLabel(id, opts) {
      return this.updateLeadLabelWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
