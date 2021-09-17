/**
 * DocuSign Admin API
 * An API for an organization administrator to manage organizations, accounts and users
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/ProductPermissionProfilesRequest', 'model/ProductPermissionProfilesResponse', 'model/UserProductPermissionProfilesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ProductPermissionProfilesRequest'), require('../model/ProductPermissionProfilesResponse'), require('../model/UserProductPermissionProfilesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.ProductPermissionProfilesApi = factory(root.DocusignAdmin.Configuration, root.DocusignAdmin.ApiClient, root.DocusignAdmin.ProductPermissionProfilesRequest, root.DocusignAdmin.ProductPermissionProfilesResponse, root.DocusignAdmin.UserProductPermissionProfilesResponse);
  }
}(this, function(Configuration, ApiClient, ProductPermissionProfilesRequest, ProductPermissionProfilesResponse, UserProductPermissionProfilesResponse) {
  'use strict';

  /**
   * ProductPermissionProfiles service.
   * @module api/ProductPermissionProfilesApi
   */

  /**
   * Constructs a new ProductPermissionProfilesApi. 
   * @alias module:api/ProductPermissionProfilesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * (Optional) Callback function to receive the result of the addUserProductPermissionProfiles operation. If none specified a Promise will be returned.
     * @callback module:api/ProductPermissionProfilesApi~addUserProductPermissionProfilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProductPermissionProfilesResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Assign user to permission profiles for one or more products
     * Required scopes: user_write
     * @param {String} organizationId The organization ID GUID
     * @param {String} accountId The account ID GUID
     * @param {String} userId The user ID GUID
     * @param {module:model/ProductPermissionProfilesRequest} productPermissionProfilesRequest Request object
     * @param {module:api/ProductPermissionProfilesApi~addUserProductPermissionProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserProductPermissionProfilesResponse}
     */
    this.addUserProductPermissionProfiles = function(productPermissionProfilesRequest, organizationId, accountId, userId, callback) {
      var postBody = productPermissionProfilesRequest;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addUserProductPermissionProfiles");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling addUserProductPermissionProfiles");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addUserProductPermissionProfiles");
      }

      // verify the required parameter 'productPermissionProfilesRequest' is set
      if (productPermissionProfilesRequest === undefined || productPermissionProfilesRequest === null) {
        throw new Error("Missing the required parameter 'productPermissionProfilesRequest' when calling addUserProductPermissionProfiles");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserProductPermissionProfilesResponse;

      return this.apiClient.callApi(
        '/v2.1/organizations/{organizationId}/accounts/{accountId}/products/users/{userId}/permission_profiles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getProductPermissionProfiles operation. If none specified a Promise will be returned.
     * @callback module:api/ProductPermissionProfilesApi~getProductPermissionProfilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductPermissionProfilesResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get products associated with the account and the available permission profiles
     * Required scopes: user_read
     * @param {String} organizationId The organization ID GUID
     * @param {String} accountId The account ID GUID
     * @param {module:api/ProductPermissionProfilesApi~getProductPermissionProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductPermissionProfilesResponse}
     */
    this.getProductPermissionProfiles = function(organizationId, accountId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getProductPermissionProfiles");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getProductPermissionProfiles");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProductPermissionProfilesResponse;

      return this.apiClient.callApi(
        '/v2.1/organizations/{organizationId}/accounts/{accountId}/products/permission_profiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getUserProductPermissionProfiles operation. If none specified a Promise will be returned.
     * @callback module:api/ProductPermissionProfilesApi~getUserProductPermissionProfilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductPermissionProfilesResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Retrieve list of user's permission profiles for each account's product
     * Required scopes: user_read
     * @param {String} organizationId The organization ID GUID
     * @param {String} accountId The account ID GUID
     * @param {String} userId The user ID GUID
     * @param {module:api/ProductPermissionProfilesApi~getUserProductPermissionProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductPermissionProfilesResponse}
     */
    this.getUserProductPermissionProfiles = function(organizationId, accountId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getUserProductPermissionProfiles");
      }

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getUserProductPermissionProfiles");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserProductPermissionProfiles");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'accountId': accountId,
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProductPermissionProfilesResponse;

      return this.apiClient.callApi(
        '/v2.1/organizations/{organizationId}/accounts/{accountId}/products/users/{userId}/permission_profiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));