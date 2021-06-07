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
import GetLeadSourcesResponse200 from '../model/GetLeadSourcesResponse200';

/**
* LeadSources service.
* @module api/LeadSourcesApi
* @version 1.0.0
*/
export default class LeadSourcesApi {

    /**
    * Constructs a new LeadSourcesApi. 
    * @alias module:api/LeadSourcesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get all lead sources
     * Returns all Lead Sources. Please note that the list of Lead Sources is fixed, it cannot be modified. All Leads created through the Public Pipedrive API will have a Lead Source `API` assigned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLeadSourcesResponse200} and HTTP response
     */
    getLeadSourcesWithHttpInfo() {
      const opts = {}
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
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetLeadSourcesResponse200;
      return this.apiClient.callApi(
        '/leadSources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all lead sources
     * Returns all Lead Sources. Please note that the list of Lead Sources is fixed, it cannot be modified. All Leads created through the Public Pipedrive API will have a Lead Source `API` assigned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLeadSourcesResponse200}
     */
    getLeadSources() {
      return this.getLeadSourcesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
