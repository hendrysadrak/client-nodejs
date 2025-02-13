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
import AddLeadRequest from '../model/AddLeadRequest';
import GetLeadsResponse200 from '../model/GetLeadsResponse200';
import LeadIdResponse200 from '../model/LeadIdResponse200';
import LeadResponse404 from '../model/LeadResponse404';
import OneLeadResponse200 from '../model/OneLeadResponse200';
import UpdateLeadRequest from '../model/UpdateLeadRequest';

/**
* Leads service.
* @module api/LeadsApi
* @version 1.0.0
*/
export default class LeadsApi {

    /**
    * Constructs a new LeadsApi. 
    * @alias module:api/LeadsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a lead
     * Creates a Lead. A Lead always has to be linked to a Person or an Organization or both. All Leads created through the Pipedrive API will have a Lead Source `API` assigned. Here's the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-lead\" target=\"_blank\" rel=\"noopener noreferrer\">adding a Lead</a>. If a Lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the Lead, it won't appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from Deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields' values tutorial</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLeadRequest} opts.addLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OneLeadResponse200} and HTTP response
     */
    addLeadWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['addLeadRequest'];

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

      let contentTypes = ['application/json', ];
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
      let returnType = OneLeadResponse200;
      return this.apiClient.callApi(
        '/leads', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a lead
     * Creates a Lead. A Lead always has to be linked to a Person or an Organization or both. All Leads created through the Pipedrive API will have a Lead Source `API` assigned. Here's the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-lead\" target=\"_blank\" rel=\"noopener noreferrer\">adding a Lead</a>. If a Lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the Lead, it won't appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from Deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields' values tutorial</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLeadRequest} opts.addLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OneLeadResponse200}
     */
    addLead(opts) {
      return this.addLeadWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a lead
     * Deletes a specific Lead
     * @param {String} id The ID of the Lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeadIdResponse200} and HTTP response
     */
    deleteLeadWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteLead");
      }

      let pathParams = {
        'id': id,
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
      let returnType = LeadIdResponse200;
      return this.apiClient.callApi(
        '/leads/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a lead
     * Deletes a specific Lead
     * @param {String} id The ID of the Lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeadIdResponse200}
     */
    deleteLead(id) {
      return this.deleteLeadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one lead
     * Returns details of a specific Lead. If a Lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the Lead, it won't appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from Deals.
     * @param {String} id The ID of the Lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OneLeadResponse200} and HTTP response
     */
    getLeadWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getLead");
      }

      let pathParams = {
        'id': id,
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
      let returnType = OneLeadResponse200;
      return this.apiClient.callApi(
        '/leads/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one lead
     * Returns details of a specific Lead. If a Lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the Lead, it won't appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from Deals.
     * @param {String} id The ID of the Lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OneLeadResponse200}
     */
    getLead(id) {
      return this.getLeadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all leads
     * Returns multiple Leads. Leads are sorted by the time they were created, from oldest to newest. Pagination can be controlled using `limit` and `start` query parameters. If a Lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the Lead, it won't appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from Deals. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param {Number} opts.start For pagination, the position that represents the first result for the page
     * @param {module:model/String} opts.archivedStatus Filtering based on archived status of a Lead. If not provided, `All` is used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLeadsResponse200} and HTTP response
     */
    getLeadsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'start': opts['start'],
        'archived_status': opts['archivedStatus'],
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
      let returnType = GetLeadsResponse200;
      return this.apiClient.callApi(
        '/leads', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all leads
     * Returns multiple Leads. Leads are sorted by the time they were created, from oldest to newest. Pagination can be controlled using `limit` and `start` query parameters. If a Lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the Lead, it won't appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from Deals. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param {Number} opts.start For pagination, the position that represents the first result for the page
     * @param {module:model/String} opts.archivedStatus Filtering based on archived status of a Lead. If not provided, `All` is used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLeadsResponse200}
     */
    getLeads(opts) {
      return this.getLeadsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a lead
     * Updates one or more properties of a Lead. Only properties included in the request will be updated. Send `null` to unset a property (applicable for example for `value`, `person_id` or `organization_id`). If a Lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the Lead, it won't appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from Deals. See an example of updating custom fields’ values in <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {String} id The ID of the Lead
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLeadRequest} opts.updateLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OneLeadResponse200} and HTTP response
     */
    updateLeadWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateLeadRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateLead");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
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
      let returnType = OneLeadResponse200;
      return this.apiClient.callApi(
        '/leads/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a lead
     * Updates one or more properties of a Lead. Only properties included in the request will be updated. Send `null` to unset a property (applicable for example for `value`, `person_id` or `organization_id`). If a Lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the Lead, it won't appear in the response. Please note that Leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from Deals. See an example of updating custom fields’ values in <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {String} id The ID of the Lead
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLeadRequest} opts.updateLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OneLeadResponse200}
     */
    updateLead(id, opts) {
      return this.updateLeadWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
