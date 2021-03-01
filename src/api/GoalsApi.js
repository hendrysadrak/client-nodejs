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
import AddOrUpdateGoalResponse200 from '../model/AddOrUpdateGoalResponse200';
import DeleteGoalResponse200 from '../model/DeleteGoalResponse200';
import GetGoalResultResponse200 from '../model/GetGoalResultResponse200';
import GetGoalsResponse200 from '../model/GetGoalsResponse200';

/**
* Goals service.
* @module api/GoalsApi
* @version 1.0.0
*/
export default class GoalsApi {

    /**
    * Constructs a new GoalsApi. 
    * @alias module:api/GoalsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a new goal
     * Adds a new goal. Along with adding a new goal, a report is created to track the progress of your goal.
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Title of the goal.
     * @param {Object} opts.assignee Who is this goal assigned to. It requires the following JSON structure: { \\\"id\\\": \\\"1\\\", \\\"type\\\": \\\"person\\\" }. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team.
     * @param {Object} opts.type Type of the goal. It requires the following JSON structure: { \\\"name\\\": \\\"deals_started\\\", \\\"params\\\": { \\\"pipeline_id\\\": 1 } }. Type can be one of: `deals_won`,`deals_progressed`,`activities_completed`,`activities_added`, `deals_started` or `revenue_forecast`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. To track goal in all pipelines set `pipeline_id` as `null`.
     * @param {Object} opts.expectedOutcome Expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"quantity\\\" } or { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"sum\\\", \\\"currency_id\\\": 1 }. `currency_id` should only be added to `sum` type of goals.
     * @param {Object} opts.duration Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD. \\\"end\\\" can be set to `null` for an infinite, open-ended goal.
     * @param {module:model/String} opts.interval Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddOrUpdateGoalResponse200} and HTTP response
     */
    addGoalWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'title': opts['title'],
        'assignee': opts['assignee'],
        'type': opts['type'],
        'expected_outcome': opts['expectedOutcome'],
        'duration': opts['duration'],
        'interval': opts['interval']
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = AddOrUpdateGoalResponse200;
      return this.apiClient.callApi(
        '/goals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a new goal
     * Adds a new goal. Along with adding a new goal, a report is created to track the progress of your goal.
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Title of the goal.
     * @param {Object} opts.assignee Who is this goal assigned to. It requires the following JSON structure: { \\\"id\\\": \\\"1\\\", \\\"type\\\": \\\"person\\\" }. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team.
     * @param {Object} opts.type Type of the goal. It requires the following JSON structure: { \\\"name\\\": \\\"deals_started\\\", \\\"params\\\": { \\\"pipeline_id\\\": 1 } }. Type can be one of: `deals_won`,`deals_progressed`,`activities_completed`,`activities_added`, `deals_started` or `revenue_forecast`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. To track goal in all pipelines set `pipeline_id` as `null`.
     * @param {Object} opts.expectedOutcome Expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"quantity\\\" } or { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"sum\\\", \\\"currency_id\\\": 1 }. `currency_id` should only be added to `sum` type of goals.
     * @param {Object} opts.duration Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD. \\\"end\\\" can be set to `null` for an infinite, open-ended goal.
     * @param {module:model/String} opts.interval Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddOrUpdateGoalResponse200}
     */
    addGoal(opts) {
      return this.addGoalWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete existing goal
     * Marks goal as deleted.
     * @param {String} id ID of the goal to be deleted.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteGoalResponse200} and HTTP response
     */
    deleteGoalWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteGoal");
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

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteGoalResponse200;
      return this.apiClient.callApi(
        '/goals/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete existing goal
     * Marks goal as deleted.
     * @param {String} id ID of the goal to be deleted.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteGoalResponse200}
     */
    deleteGoal(id) {
      return this.deleteGoalWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get result of a goal
     * Gets progress of a goal for specified period.
     * @param {String} id ID of the goal that the results are looked for.
     * @param {Date} periodStart Start date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD.
     * @param {Date} periodEnd End date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetGoalResultResponse200} and HTTP response
     */
    getGoalResultWithHttpInfo(id, periodStart, periodEnd) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getGoalResult");
      }
      // verify the required parameter 'periodStart' is set
      if (periodStart === undefined || periodStart === null) {
        throw new Error("Missing the required parameter 'periodStart' when calling getGoalResult");
      }
      // verify the required parameter 'periodEnd' is set
      if (periodEnd === undefined || periodEnd === null) {
        throw new Error("Missing the required parameter 'periodEnd' when calling getGoalResult");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'period.start': periodStart,
        'period.end': periodEnd
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetGoalResultResponse200;
      return this.apiClient.callApi(
        '/goals/{id}/results', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get result of a goal
     * Gets progress of a goal for specified period.
     * @param {String} id ID of the goal that the results are looked for.
     * @param {Date} periodStart Start date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD.
     * @param {Date} periodEnd End date of the period for which to find progress of a goal. Date in format of YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetGoalResultResponse200}
     */
    getGoalResult(id, periodStart, periodEnd) {
      return this.getGoalResultWithHttpInfo(id, periodStart, periodEnd)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Find goals
     * Returns data about goals based on criteria. For searching, append `{searchField}={searchValue}` to the URL, where `searchField` can be any one of the lowest-level fields in dot-notation (e.g. `type.params.pipeline_id`; `title`). `searchValue` should be the value you are looking for on that field. Additionally, `is_active=<true|false>` can be provided to search for only active/inactive goals. When providing `period.start`, `period.end` must also be provided and vice versa.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.typeName Type of the goal. If provided, everyone's goals will be returned.
     * @param {String} opts.title Title of the goal.
     * @param {module:model/Boolean} opts.isActive Whether goal is active or not. (default to true)
     * @param {Number} opts.assigneeId ID of the user who's goal to fetch. When omitted, only your goals will be returned.
     * @param {module:model/String} opts.assigneeType Type of the goal's assignee. If provided, everyone's goals will be returned.
     * @param {Number} opts.expectedOutcomeTarget Numeric value of the outcome. If provided, everyone's goals will be returned.
     * @param {module:model/String} opts.expectedOutcomeTrackingMetric Tracking metric of the expected outcome of the goal. If provided, everyone's goals will be returned.
     * @param {Number} opts.expectedOutcomeCurrencyId Numeric ID of the goal's currency. Only applicable to goals with `expected_outcome.tracking_metric` with value `sum`. If provided, everyone's goals will be returned.
     * @param {Number} opts.typeParamsPipelineId ID of the pipeline or `null` for all pipelines. If provided, everyone's goals will be returned.
     * @param {Number} opts.typeParamsStageId ID of the stage. Applicable to only `deals_progressed` type of goals. If provided, everyone's goals will be returned.
     * @param {Number} opts.typeParamsActivityTypeId ID of the activity type. Applicable to only `activities_completed` or `activities_added` types of goals. If provided, everyone's goals will be returned.
     * @param {Date} opts.periodStart Start date of the period for which to find goals. Date in format of YYYY-MM-DD. When `period.start` is provided, `period.end` must be provided too.
     * @param {Date} opts.periodEnd End date of the period for which to find goals. Date in format of YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetGoalsResponse200} and HTTP response
     */
    getGoalsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'type.name': opts['typeName'],
        'title': opts['title'],
        'is_active': opts['isActive'],
        'assignee.id': opts['assigneeId'],
        'assignee.type': opts['assigneeType'],
        'expected_outcome.target': opts['expectedOutcomeTarget'],
        'expected_outcome.tracking_metric': opts['expectedOutcomeTrackingMetric'],
        'expected_outcome.currency_id': opts['expectedOutcomeCurrencyId'],
        'type.params.pipeline_id': opts['typeParamsPipelineId'],
        'type.params.stage_id': opts['typeParamsStageId'],
        'type.params.activity_type_id': opts['typeParamsActivityTypeId'],
        'period.start': opts['periodStart'],
        'period.end': opts['periodEnd']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetGoalsResponse200;
      return this.apiClient.callApi(
        '/goals/find', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find goals
     * Returns data about goals based on criteria. For searching, append `{searchField}={searchValue}` to the URL, where `searchField` can be any one of the lowest-level fields in dot-notation (e.g. `type.params.pipeline_id`; `title`). `searchValue` should be the value you are looking for on that field. Additionally, `is_active=<true|false>` can be provided to search for only active/inactive goals. When providing `period.start`, `period.end` must also be provided and vice versa.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.typeName Type of the goal. If provided, everyone's goals will be returned.
     * @param {String} opts.title Title of the goal.
     * @param {module:model/Boolean} opts.isActive Whether goal is active or not. (default to true)
     * @param {Number} opts.assigneeId ID of the user who's goal to fetch. When omitted, only your goals will be returned.
     * @param {module:model/String} opts.assigneeType Type of the goal's assignee. If provided, everyone's goals will be returned.
     * @param {Number} opts.expectedOutcomeTarget Numeric value of the outcome. If provided, everyone's goals will be returned.
     * @param {module:model/String} opts.expectedOutcomeTrackingMetric Tracking metric of the expected outcome of the goal. If provided, everyone's goals will be returned.
     * @param {Number} opts.expectedOutcomeCurrencyId Numeric ID of the goal's currency. Only applicable to goals with `expected_outcome.tracking_metric` with value `sum`. If provided, everyone's goals will be returned.
     * @param {Number} opts.typeParamsPipelineId ID of the pipeline or `null` for all pipelines. If provided, everyone's goals will be returned.
     * @param {Number} opts.typeParamsStageId ID of the stage. Applicable to only `deals_progressed` type of goals. If provided, everyone's goals will be returned.
     * @param {Number} opts.typeParamsActivityTypeId ID of the activity type. Applicable to only `activities_completed` or `activities_added` types of goals. If provided, everyone's goals will be returned.
     * @param {Date} opts.periodStart Start date of the period for which to find goals. Date in format of YYYY-MM-DD. When `period.start` is provided, `period.end` must be provided too.
     * @param {Date} opts.periodEnd End date of the period for which to find goals. Date in format of YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetGoalsResponse200}
     */
    getGoals(opts) {
      return this.getGoalsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update existing goal
     * Updates existing goal.
     * @param {String} id ID of the goal to be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Title of the goal.
     * @param {Object} opts.assignee Who is this goal assigned to. It requires the following JSON structure: { \\\"id\\\": \\\"1\\\", \\\"type\\\": \\\"person\\\" }. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team.
     * @param {Object} opts.type Type of the goal. It requires the following JSON structure: { \\\"name\\\": \\\"deals_started\\\", \\\"params\\\": { \\\"pipeline_id\\\": 1 } }. Type can be one of: `deals_won`,`deals_progressed`,`activities_completed`,`activities_added`, `deals_started` or `revenue_forecast`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. To track goal in all pipelines set `pipeline_id` as `null`.
     * @param {Object} opts.expectedOutcome Expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"quantity\\\" } or { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"sum\\\", \\\"currency_id\\\": 1 }. `currency_id` should only be added to `sum` type of goals.
     * @param {Object} opts.duration Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD. \\\"end\\\" can be set to `null` for an infinite, open-ended goal.
     * @param {module:model/String} opts.interval Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddOrUpdateGoalResponse200} and HTTP response
     */
    updateGoalWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateGoal");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'title': opts['title'],
        'assignee': opts['assignee'],
        'type': opts['type'],
        'expected_outcome': opts['expectedOutcome'],
        'duration': opts['duration'],
        'interval': opts['interval']
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = AddOrUpdateGoalResponse200;
      return this.apiClient.callApi(
        '/goals/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update existing goal
     * Updates existing goal.
     * @param {String} id ID of the goal to be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Title of the goal.
     * @param {Object} opts.assignee Who is this goal assigned to. It requires the following JSON structure: { \\\"id\\\": \\\"1\\\", \\\"type\\\": \\\"person\\\" }. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team.
     * @param {Object} opts.type Type of the goal. It requires the following JSON structure: { \\\"name\\\": \\\"deals_started\\\", \\\"params\\\": { \\\"pipeline_id\\\": 1 } }. Type can be one of: `deals_won`,`deals_progressed`,`activities_completed`,`activities_added`, `deals_started` or `revenue_forecast`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. To track goal in all pipelines set `pipeline_id` as `null`.
     * @param {Object} opts.expectedOutcome Expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"quantity\\\" } or { \\\"target\\\": \\\"50\\\", \\\"tracking_metric\\\": \\\"sum\\\", \\\"currency_id\\\": 1 }. `currency_id` should only be added to `sum` type of goals.
     * @param {Object} opts.duration Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD. \\\"end\\\" can be set to `null` for an infinite, open-ended goal.
     * @param {module:model/String} opts.interval Date when the goal starts and ends. It requires the following JSON structure: { \\\"start\\\": \\\"2019-01-01\\\", \\\"end\\\": \\\"2022-12-31\\\" }. Date in format of YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddOrUpdateGoalResponse200}
     */
    updateGoal(id, opts) {
      return this.updateGoalWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
