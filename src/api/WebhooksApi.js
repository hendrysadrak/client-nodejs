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
import AddWebhookRequest from '../model/AddWebhookRequest';
import BaseResponseWithStatus from '../model/BaseResponseWithStatus';
import Unauthorized from '../model/Unauthorized';
import Webhook from '../model/Webhook';
import WebhookBadRequest from '../model/WebhookBadRequest';
import Webhooks from '../model/Webhooks';
import WebhooksDeleteForbiddenSchema from '../model/WebhooksDeleteForbiddenSchema';

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 1.0.0
*/
export default class WebhooksApi {

    /**
    * Constructs a new WebhooksApi. 
    * @alias module:api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new webhook
     * Creates a new webhook and returns its details. Note that specifying an event which triggers the webhook combines 2 parameters - `event_action` and `event_object`. E.g., use `*.*` for getting notifications about all events, `added.deal` for any newly added deals, `deleted.persons` for any deleted persons, etc. See <a href=\"https://pipedrive.readme.io/docs/guide-for-webhooks?ref=api_reference\">https://pipedrive.readme.io/docs/guide-for-webhooks</a> for more details.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddWebhookRequest} opts.addWebhookRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Webhook} and HTTP response
     */
    addWebhookWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['addWebhookRequest'];

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
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new webhook
     * Creates a new webhook and returns its details. Note that specifying an event which triggers the webhook combines 2 parameters - `event_action` and `event_object`. E.g., use `*.*` for getting notifications about all events, `added.deal` for any newly added deals, `deleted.persons` for any deleted persons, etc. See <a href=\"https://pipedrive.readme.io/docs/guide-for-webhooks?ref=api_reference\">https://pipedrive.readme.io/docs/guide-for-webhooks</a> for more details.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddWebhookRequest} opts.addWebhookRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Webhook}
     */
    addWebhook(opts) {
      return this.addWebhookWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete existing webhook
     * Deletes the specified webhook.
     * @param {Number} id The ID of the webhook to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BaseResponseWithStatus} and HTTP response
     */
    deleteWebhookWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteWebhook");
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
      let returnType = BaseResponseWithStatus;
      return this.apiClient.callApi(
        '/webhooks/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete existing webhook
     * Deletes the specified webhook.
     * @param {Number} id The ID of the webhook to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BaseResponseWithStatus}
     */
    deleteWebhook(id) {
      return this.deleteWebhookWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all webhooks
     * Returns data about all webhooks of a company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Webhooks} and HTTP response
     */
    getWebhooksWithHttpInfo() {
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
      let returnType = Webhooks;
      return this.apiClient.callApi(
        '/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all webhooks
     * Returns data about all webhooks of a company.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Webhooks}
     */
    getWebhooks() {
      return this.getWebhooksWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
