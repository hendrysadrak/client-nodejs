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
import AddNewPipeline from '../model/AddNewPipeline';
import DeletePipelineResponse200 from '../model/DeletePipelineResponse200';
import EditPipeline from '../model/EditPipeline';
import GetAllPipelines from '../model/GetAllPipelines';
import GetDealsConversionRatesInPipeline from '../model/GetDealsConversionRatesInPipeline';
import GetDealsMovementsInPipeline from '../model/GetDealsMovementsInPipeline';
import GetOnePipeline from '../model/GetOnePipeline';
import GetStageDeals from '../model/GetStageDeals';
import NumberBoolean from '../model/NumberBoolean';

/**
* Pipelines service.
* @module api/PipelinesApi
* @version 1.0.0
*/
export default class PipelinesApi {

    /**
    * Constructs a new PipelinesApi. 
    * @alias module:api/PipelinesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a new pipeline
     * Adds a new pipeline
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the Pipeline
     * @param {module:model/NumberBoolean} opts.dealProbability Whether Deal probability is disabled or enabled for this Pipeline
     * @param {Number} opts.orderNr Defines the order of Pipelines. First order (`order_nr=0`) is the default Pipeline.
     * @param {module:model/NumberBoolean} opts.active Whether this Pipeline will be made inactive (hidden) or active
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddNewPipeline} and HTTP response
     */
    addPipelineWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': opts['name'],
        'deal_probability': opts['dealProbability'],
        'order_nr': opts['orderNr'],
        'active': opts['active']
      };

      let formParamArray = [
        'name',
        'dealProbability',
        'orderNr',
        'active'
      ];

      let contentTypes = ['application/x-www-form-urlencoded'];
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
      let returnType = AddNewPipeline;
      return this.apiClient.callApi(
        '/pipelines', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a new pipeline
     * Adds a new pipeline
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the Pipeline
     * @param {module:model/NumberBoolean} opts.dealProbability Whether Deal probability is disabled or enabled for this Pipeline
     * @param {Number} opts.orderNr Defines the order of Pipelines. First order (`order_nr=0`) is the default Pipeline.
     * @param {module:model/NumberBoolean} opts.active Whether this Pipeline will be made inactive (hidden) or active
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddNewPipeline}
     */
    addPipeline(opts) {
      return this.addPipelineWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a pipeline
     * Marks a pipeline as deleted.
     * @param {Number} id ID of the pipeline
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeletePipelineResponse200} and HTTP response
     */
    deletePipelineWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePipeline");
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
      let returnType = DeletePipelineResponse200;
      return this.apiClient.callApi(
        '/pipelines/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a pipeline
     * Marks a pipeline as deleted.
     * @param {Number} id ID of the pipeline
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeletePipelineResponse200}
     */
    deletePipeline(id) {
      return this.deletePipelineWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one pipeline
     * Returns data about a specific pipeline. Also returns the summary of the deals in this pipeline across its stages.
     * @param {Number} id ID of the pipeline
     * @param {Object} opts Optional parameters
     * @param {String} opts.totalsConvertCurrency 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned in `deals_summary` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetOnePipeline} and HTTP response
     */
    getPipelineWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPipeline");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'totals_convert_currency': opts['totalsConvertCurrency']
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
      let returnType = GetOnePipeline;
      return this.apiClient.callApi(
        '/pipelines/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one pipeline
     * Returns data about a specific pipeline. Also returns the summary of the deals in this pipeline across its stages.
     * @param {Number} id ID of the pipeline
     * @param {Object} opts Optional parameters
     * @param {String} opts.totalsConvertCurrency 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned in `deals_summary` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetOnePipeline}
     */
    getPipeline(id, opts) {
      return this.getPipelineWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get deals conversion rates in pipeline
     * Returns all stage-to-stage conversion and pipeline-to-close rates for given time period.
     * @param {Number} id ID of the pipeline
     * @param {Date} startDate Start of the period. Date in format of YYYY-MM-DD.
     * @param {Date} endDate End of the period. Date in format of YYYY-MM-DD.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId ID of the user who's pipeline metrics statistics to fetch. If omitted, the authorized user will be used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDealsConversionRatesInPipeline} and HTTP response
     */
    getPipelineConversionStatisticsWithHttpInfo(id, startDate, endDate, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPipelineConversionStatistics");
      }
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getPipelineConversionStatistics");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getPipelineConversionStatistics");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'user_id': opts['userId']
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
      let returnType = GetDealsConversionRatesInPipeline;
      return this.apiClient.callApi(
        '/pipelines/{id}/conversion_statistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get deals conversion rates in pipeline
     * Returns all stage-to-stage conversion and pipeline-to-close rates for given time period.
     * @param {Number} id ID of the pipeline
     * @param {Date} startDate Start of the period. Date in format of YYYY-MM-DD.
     * @param {Date} endDate End of the period. Date in format of YYYY-MM-DD.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId ID of the user who's pipeline metrics statistics to fetch. If omitted, the authorized user will be used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDealsConversionRatesInPipeline}
     */
    getPipelineConversionStatistics(id, startDate, endDate, opts) {
      return this.getPipelineConversionStatisticsWithHttpInfo(id, startDate, endDate, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get deals in a pipeline
     * Lists deals in a specific pipeline across all its stages
     * @param {Number} id ID of the pipeline
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterId If supplied, only deals matching the given filter will be returned.
     * @param {Number} opts.userId If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.
     * @param {module:model/NumberBoolean} opts.everyone If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned.
     * @param {Number} opts.stageId If supplied, only deals within the given stage will be returned.
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {module:model/NumberBoolean} opts.getSummary Whether to include summary of the pipeline in the `additional_data` or not.
     * @param {String} opts.totalsConvertCurrency 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned inside `deals_summary` inside `additional_data` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used. Only works when `get_summary` parameter flag is enabled.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStageDeals} and HTTP response
     */
    getPipelineDealsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPipelineDeals");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'filter_id': opts['filterId'],
        'user_id': opts['userId'],
        'everyone': opts['everyone'],
        'stage_id': opts['stageId'],
        'start': opts['start'],
        'limit': opts['limit'],
        'get_summary': opts['getSummary'],
        'totals_convert_currency': opts['totalsConvertCurrency']
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
      let returnType = GetStageDeals;
      return this.apiClient.callApi(
        '/pipelines/{id}/deals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get deals in a pipeline
     * Lists deals in a specific pipeline across all its stages
     * @param {Number} id ID of the pipeline
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterId If supplied, only deals matching the given filter will be returned.
     * @param {Number} opts.userId If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.
     * @param {module:model/NumberBoolean} opts.everyone If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned.
     * @param {Number} opts.stageId If supplied, only deals within the given stage will be returned.
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {module:model/NumberBoolean} opts.getSummary Whether to include summary of the pipeline in the `additional_data` or not.
     * @param {String} opts.totalsConvertCurrency 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned inside `deals_summary` inside `additional_data` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used. Only works when `get_summary` parameter flag is enabled.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStageDeals}
     */
    getPipelineDeals(id, opts) {
      return this.getPipelineDealsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get deals movements in pipeline
     * Returns statistics for deals movements for given time period.
     * @param {Number} id ID of the pipeline
     * @param {Date} startDate Start of the period. Date in format of YYYY-MM-DD.
     * @param {Date} endDate End of the period. Date in format of YYYY-MM-DD.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId ID of the user who's pipeline statistics to fetch. If omitted, the authorized user will be used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDealsMovementsInPipeline} and HTTP response
     */
    getPipelineMovementStatisticsWithHttpInfo(id, startDate, endDate, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPipelineMovementStatistics");
      }
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getPipelineMovementStatistics");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getPipelineMovementStatistics");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'user_id': opts['userId']
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
      let returnType = GetDealsMovementsInPipeline;
      return this.apiClient.callApi(
        '/pipelines/{id}/movement_statistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get deals movements in pipeline
     * Returns statistics for deals movements for given time period.
     * @param {Number} id ID of the pipeline
     * @param {Date} startDate Start of the period. Date in format of YYYY-MM-DD.
     * @param {Date} endDate End of the period. Date in format of YYYY-MM-DD.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId ID of the user who's pipeline statistics to fetch. If omitted, the authorized user will be used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDealsMovementsInPipeline}
     */
    getPipelineMovementStatistics(id, startDate, endDate, opts) {
      return this.getPipelineMovementStatisticsWithHttpInfo(id, startDate, endDate, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all pipelines
     * Returns data about all pipelines
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAllPipelines} and HTTP response
     */
    getPipelinesWithHttpInfo() {
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
      let returnType = GetAllPipelines;
      return this.apiClient.callApi(
        '/pipelines', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all pipelines
     * Returns data about all pipelines
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAllPipelines}
     */
    getPipelines() {
      return this.getPipelinesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Edit a pipeline
     * Updates pipeline properties
     * @param {Number} id ID of the pipeline
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the Pipeline
     * @param {module:model/NumberBoolean} opts.dealProbability Whether Deal probability is disabled or enabled for this Pipeline
     * @param {Number} opts.orderNr Defines the order of Pipelines. First order (`order_nr=0`) is the default Pipeline.
     * @param {module:model/NumberBoolean} opts.active Whether this Pipeline will be made inactive (hidden) or active
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditPipeline} and HTTP response
     */
    updatePipelineWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePipeline");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': opts['name'],
        'deal_probability': opts['dealProbability'],
        'order_nr': opts['orderNr'],
        'active': opts['active']
      };

      let formParamArray = [
        'name',
        'dealProbability',
        'orderNr',
        'active'
      ];

      let contentTypes = ['application/x-www-form-urlencoded'];
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
      let returnType = EditPipeline;
      return this.apiClient.callApi(
        '/pipelines/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Edit a pipeline
     * Updates pipeline properties
     * @param {Number} id ID of the pipeline
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the Pipeline
     * @param {module:model/NumberBoolean} opts.dealProbability Whether Deal probability is disabled or enabled for this Pipeline
     * @param {Number} opts.orderNr Defines the order of Pipelines. First order (`order_nr=0`) is the default Pipeline.
     * @param {module:model/NumberBoolean} opts.active Whether this Pipeline will be made inactive (hidden) or active
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditPipeline}
     */
    updatePipeline(id, opts) {
      return this.updatePipelineWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
