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
	define(['Configuration', 'ApiClient', 'model/AssetGroupAccountClone', 'model/AssetGroupAccountClones', 'model/AssetGroupAccountsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/AssetGroupAccountClone'), require('../model/AssetGroupAccountClones'), require('../model/AssetGroupAccountsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.ProvisionAssetGroupApi = factory(root.DocusignAdmin.Configuration, root.DocusignAdmin.ApiClient, root.DocusignAdmin.AssetGroupAccountClone, root.DocusignAdmin.AssetGroupAccountClones, root.DocusignAdmin.AssetGroupAccountsResponse);
  }
}(this, function(Configuration, ApiClient, AssetGroupAccountClone, AssetGroupAccountClones, AssetGroupAccountsResponse) {
  'use strict';

  /**
   * ProvisionAssetGroup service.
   * @module api/ProvisionAssetGroupApi
   */

  /**
   * Constructs a new ProvisionAssetGroupApi. 
   * @alias module:api/ProvisionAssetGroupApi
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
     * (Optional) Callback function to receive the result of the cloneAssetGroupAccount operation. If none specified a Promise will be returned.
     * @callback module:api/ProvisionAssetGroupApi~cloneAssetGroupAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetGroupAccountClone} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Clones an existing DocuSign account to a new DocuSign account.
     * Currently this only clones eSign settings and asset group information.

Required scopes: asset_group_account_clone_write
     * @param {String} organizationId The Guid representing the organization id.
     * @param {module:model/AssetGroupAccountClone} request The request defails for the new asset group account clone.
     * @param {module:api/ProvisionAssetGroupApi~cloneAssetGroupAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetGroupAccountClone}
     */
    this.cloneAssetGroupAccount = function(request, organizationId, callback) {
      var postBody = request;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling cloneAssetGroupAccount");
      }

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling cloneAssetGroupAccount");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AssetGroupAccountClone;

      return this.apiClient.callApi(
        '/v1/organizations/{organizationId}/assetGroups/accountClone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getAssetGroupAccountClone operation. If none specified a Promise will be returned.
     * @callback module:api/ProvisionAssetGroupApi~getAssetGroupAccountCloneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetGroupAccountClone} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets an asset group account clone by the asset group work id.
     * Required scopes: asset_group_account_clone_read
     * @param {String} organizationId The Guid representing the organization id.
     * @param {String} assetGroupId The Guid representing the asset group id.
     * @param {String} assetGroupWorkId The Guid representing the asset group account clone id
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Boolean} optsOrCallback.includeDetails When true, include details for the asset group account clone.
     * @param {module:api/ProvisionAssetGroupApi~getAssetGroupAccountCloneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetGroupAccountClone}
     */
    this.getAssetGroupAccountClone = function(organizationId, assetGroupId, assetGroupWorkId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getAssetGroupAccountClone");
      }

      // verify the required parameter 'assetGroupId' is set
      if (assetGroupId === undefined || assetGroupId === null) {
        throw new Error("Missing the required parameter 'assetGroupId' when calling getAssetGroupAccountClone");
      }

      // verify the required parameter 'assetGroupWorkId' is set
      if (assetGroupWorkId === undefined || assetGroupWorkId === null) {
        throw new Error("Missing the required parameter 'assetGroupWorkId' when calling getAssetGroupAccountClone");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'assetGroupId': assetGroupId,
        'assetGroupWorkId': assetGroupWorkId
      };
      var queryParams = {
        'include_details': optsOrCallback['includeDetails']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AssetGroupAccountClone;

      return this.apiClient.callApi(
        '/v1/organizations/{organizationId}/assetGroups/{assetGroupId}/accountClones/{assetGroupWorkId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getAssetGroupAccountClonesByOrgId operation. If none specified a Promise will be returned.
     * @callback module:api/ProvisionAssetGroupApi~getAssetGroupAccountClonesByOrgIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetGroupAccountClones} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets all asset group account clone(s) for an organization id.
     * Required scopes: asset_group_account_clone_read
     * @param {String} organizationId The Guid representing the organization id.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Date} optsOrCallback.sinceUpdatedDate When provided and is in the past, only return asset group account clone(s) that is updated after the date.
     * @param {Boolean} optsOrCallback.includeDetails When true, include details for the asset group account clone(s).
     * @param {module:api/ProvisionAssetGroupApi~getAssetGroupAccountClonesByOrgIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetGroupAccountClones}
     */
    this.getAssetGroupAccountClonesByOrgId = function(organizationId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getAssetGroupAccountClonesByOrgId");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'since_updated_date': optsOrCallback['sinceUpdatedDate'],
        'include_details': optsOrCallback['includeDetails']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AssetGroupAccountClones;

      return this.apiClient.callApi(
        '/v1/organizations/{organizationId}/assetGroups/accountClones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getAssetGroupAccounts operation. If none specified a Promise will be returned.
     * @callback module:api/ProvisionAssetGroupApi~getAssetGroupAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetGroupAccountsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get all accounts in asset groups for the organization.
     * Required scopes: asset_group_account_read
     * @param {String} organizationId The Guid representing the organization id.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {Boolean} optsOrCallback.compliant Whether to return accounts that are compliant. When provided, account responses will not include compliant field.
     * @param {module:api/ProvisionAssetGroupApi~getAssetGroupAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetGroupAccountsResponse}
     */
    this.getAssetGroupAccounts = function(organizationId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getAssetGroupAccounts");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'compliant': optsOrCallback['compliant']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AssetGroupAccountsResponse;

      return this.apiClient.callApi(
        '/v1/organizations/{organizationId}/assetGroups/accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));