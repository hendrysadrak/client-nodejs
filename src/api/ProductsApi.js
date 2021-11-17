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
import AddProductFollowerRequest from '../model/AddProductFollowerRequest';
import AddProductRequestBody from '../model/AddProductRequestBody';
import DeleteProductFollowerResponse from '../model/DeleteProductFollowerResponse';
import DeleteProductResponse from '../model/DeleteProductResponse';
import ListFilesResponse from '../model/ListFilesResponse';
import ListProductFollowersResponse from '../model/ListProductFollowersResponse';
import NewFollowerResponse from '../model/NewFollowerResponse';
import NumberBoolean from '../model/NumberBoolean';
import ProductRequest from '../model/ProductRequest';
import ProductResponse from '../model/ProductResponse';
import ProductSearchResponse from '../model/ProductSearchResponse';
import ProductsResponse from '../model/ProductsResponse';
import UpdateDealRequest from '../model/UpdateDealRequest';
import UpdateProductResponse from '../model/UpdateProductResponse';
import UserIDs from '../model/UserIDs';

/**
* Products service.
* @module api/ProductsApi
* @version 1.0.0
*/
export default class ProductsApi {

    /**
    * Constructs a new ProductsApi. 
    * @alias module:api/ProductsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a product
     * Adds a new product to the Products inventory. For more information on how to add a product, see <a href=\"https://pipedrive.readme.io/docs/adding-a-product\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddProductRequestBody} opts.addProductRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductResponse} and HTTP response
     */
    addProductWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['addProductRequestBody'];

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
      let returnType = ProductResponse;
      return this.apiClient.callApi(
        '/products', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a product
     * Adds a new product to the Products inventory. For more information on how to add a product, see <a href=\"https://pipedrive.readme.io/docs/adding-a-product\" target=\"_blank\" rel=\"noopener noreferrer\">this tutorial</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddProductRequestBody} opts.addProductRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductResponse}
     */
    addProduct(opts) {
      return this.addProductWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Add a follower to a product
     * Adds a follower to a product.
     * @param {Number} id ID of the product
     * @param {Object} opts Optional parameters
     * @param {module:model/AddProductFollowerRequest} opts.addProductFollowerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewFollowerResponse} and HTTP response
     */
    addProductFollowerWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['addProductFollowerRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addProductFollower");
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

      let authNames = ['api_key', ];
      let accepts = ['application/json', ];
      let returnType = NewFollowerResponse;
      return this.apiClient.callApi(
        '/products/{id}/followers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a follower to a product
     * Adds a follower to a product.
     * @param {Number} id ID of the product
     * @param {Object} opts Optional parameters
     * @param {module:model/AddProductFollowerRequest} opts.addProductFollowerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewFollowerResponse}
     */
    addProductFollower(id, opts) {
      return this.addProductFollowerWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a product
     * Marks a product as deleted.
     * @param {Number} id ID of the product
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteProductResponse} and HTTP response
     */
    deleteProductWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteProduct");
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
      let returnType = DeleteProductResponse;
      return this.apiClient.callApi(
        '/products/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a product
     * Marks a product as deleted.
     * @param {Number} id ID of the product
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteProductResponse}
     */
    deleteProduct(id) {
      return this.deleteProductWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a follower from a product
     * Deletes a follower from a product.
     * @param {Number} id ID of the product
     * @param {Number} followerId ID of the follower
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteProductFollowerResponse} and HTTP response
     */
    deleteProductFollowerWithHttpInfo(id, followerId) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteProductFollower");
      }
      // verify the required parameter 'followerId' is set
      if (followerId === undefined || followerId === null) {
        throw new Error("Missing the required parameter 'followerId' when calling deleteProductFollower");
      }

      let pathParams = {
        'id': id,
        'follower_id': followerId,
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

      let authNames = ['api_key', ];
      let accepts = ['application/json', ];
      let returnType = DeleteProductFollowerResponse;
      return this.apiClient.callApi(
        '/products/{id}/followers/{follower_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a follower from a product
     * Deletes a follower from a product.
     * @param {Number} id ID of the product
     * @param {Number} followerId ID of the follower
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteProductFollowerResponse}
     */
    deleteProductFollower(id, followerId) {
      return this.deleteProductFollowerWithHttpInfo(id, followerId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one product
     * Returns data about a specific product.
     * @param {Number} id ID of the product
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductResponse} and HTTP response
     */
    getProductWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProduct");
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
      let returnType = ProductResponse;
      return this.apiClient.callApi(
        '/products/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one product
     * Returns data about a specific product.
     * @param {Number} id ID of the product
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductResponse}
     */
    getProduct(id) {
      return this.getProductWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get deals where a product is attached to
     * Returns data about deals that have a product attached to.
     * @param {Number} id ID of the product
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {module:model/String} opts.status Only fetch deals with specific status. If omitted, all not deleted deals are fetched. (default to 'all_not_deleted')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateDealRequest} and HTTP response
     */
    getProductDealsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductDeals");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
        'status': opts['status'],
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
      let returnType = UpdateDealRequest;
      return this.apiClient.callApi(
        '/products/{id}/deals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get deals where a product is attached to
     * Returns data about deals that have a product attached to.
     * @param {Number} id ID of the product
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {module:model/String} opts.status Only fetch deals with specific status. If omitted, all not deleted deals are fetched. (default to 'all_not_deleted')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateDealRequest}
     */
    getProductDeals(id, opts) {
      return this.getProductDealsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * List files attached to a product
     * Lists files associated with a product.
     * @param {Number} id ID of the product
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {module:model/NumberBoolean} opts.includeDeletedFiles When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work.
     * @param {String} opts.sort Field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListFilesResponse} and HTTP response
     */
    getProductFilesWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductFiles");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
        'include_deleted_files': opts['includeDeletedFiles'],
        'sort': opts['sort'],
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
      let returnType = ListFilesResponse;
      return this.apiClient.callApi(
        '/products/{id}/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List files attached to a product
     * Lists files associated with a product.
     * @param {Number} id ID of the product
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {module:model/NumberBoolean} opts.includeDeletedFiles When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work.
     * @param {String} opts.sort Field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListFilesResponse}
     */
    getProductFiles(id, opts) {
      return this.getProductFilesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * List followers of a product
     * Lists the followers of a Product
     * @param {Number} id ID of the product
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListProductFollowersResponse} and HTTP response
     */
    getProductFollowersWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductFollowers");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
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
      let returnType = ListProductFollowersResponse;
      return this.apiClient.callApi(
        '/products/{id}/followers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List followers of a product
     * Lists the followers of a Product
     * @param {Number} id ID of the product
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListProductFollowersResponse}
     */
    getProductFollowers(id, opts) {
      return this.getProductFollowersWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * List permitted users
     * Lists users permitted to access a product.
     * @param {Number} id ID of the product
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserIDs} and HTTP response
     */
    getProductUsersWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductUsers");
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

      let authNames = ['api_key', ];
      let accepts = ['application/json', ];
      let returnType = UserIDs;
      return this.apiClient.callApi(
        '/products/{id}/permittedUsers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List permitted users
     * Lists users permitted to access a product.
     * @param {Number} id ID of the product
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserIDs}
     */
    getProductUsers(id) {
      return this.getProductUsersWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all products
     * Returns data about all Products
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId If supplied, only Products owned by the given user will be returned
     * @param {Number} opts.filterId ID of the filter to use
     * @param {Array.<Number>} opts.ids An array of integers with the IDs of the Products that sould be returned in the response
     * @param {String} opts.firstChar If supplied, only Products whose name starts with the specified letter will be returned (case insensitive)
     * @param {Boolean} opts.getSummary If supplied, response will return the total numbers of Products in the `additional_data.summary.total_count` property
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductsResponse} and HTTP response
     */
    getProductsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'user_id': opts['userId'],
        'filter_id': opts['filterId'],
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'csv'),
        'first_char': opts['firstChar'],
        'get_summary': opts['getSummary'],
        'start': opts['start'],
        'limit': opts['limit'],
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
      let returnType = ProductsResponse;
      return this.apiClient.callApi(
        '/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all products
     * Returns data about all Products
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId If supplied, only Products owned by the given user will be returned
     * @param {Number} opts.filterId ID of the filter to use
     * @param {Array.<Number>} opts.ids An array of integers with the IDs of the Products that sould be returned in the response
     * @param {String} opts.firstChar If supplied, only Products whose name starts with the specified letter will be returned (case insensitive)
     * @param {Boolean} opts.getSummary If supplied, response will return the total numbers of Products in the `additional_data.summary.total_count` property
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductsResponse}
     */
    getProducts(opts) {
      return this.getProductsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Search products
     * Searches all Products by name, code and/or custom fields. This endpoint is a wrapper of <a href=\"https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\">/v1/itemSearch</a> with a narrower OAuth scope.
     * @param {String} term The search term to look for. Minimum 2 characters (or 1 if using `exact_match`).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fields A comma-separated string array. The fields to perform the search from. Defaults to all of them.
     * @param {module:model/Boolean} opts.exactMatch When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
     * @param {module:model/String} opts.includeFields Supports including optional fields in the results which are not provided by default.
     * @param {Number} opts.start Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter. (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductSearchResponse} and HTTP response
     */
    searchProductsWithHttpInfo(term, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'term' is set
      if (term === undefined || term === null) {
        throw new Error("Missing the required parameter 'term' when calling searchProducts");
      }

      let pathParams = {
      };
      let queryParams = {
        'term': term,
        'fields': opts['fields'],
        'exact_match': opts['exactMatch'],
        'include_fields': opts['includeFields'],
        'start': opts['start'],
        'limit': opts['limit'],
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
      let returnType = ProductSearchResponse;
      return this.apiClient.callApi(
        '/products/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search products
     * Searches all Products by name, code and/or custom fields. This endpoint is a wrapper of <a href=\"https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\">/v1/itemSearch</a> with a narrower OAuth scope.
     * @param {String} term The search term to look for. Minimum 2 characters (or 1 if using `exact_match`).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fields A comma-separated string array. The fields to perform the search from. Defaults to all of them.
     * @param {module:model/Boolean} opts.exactMatch When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
     * @param {module:model/String} opts.includeFields Supports including optional fields in the results which are not provided by default.
     * @param {Number} opts.start Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter. (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductSearchResponse}
     */
    searchProducts(term, opts) {
      return this.searchProductsWithHttpInfo(term, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a product
     * Updates product data.
     * @param {Number} id ID of the product
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductRequest} opts.productRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateProductResponse} and HTTP response
     */
    updateProductWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['productRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateProduct");
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
      let returnType = UpdateProductResponse;
      return this.apiClient.callApi(
        '/products/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a product
     * Updates product data.
     * @param {Number} id ID of the product
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductRequest} opts.productRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateProductResponse}
     */
    updateProduct(id, opts) {
      return this.updateProductWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
