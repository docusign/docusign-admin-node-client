/**
 * Docusign Admin API
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
	define(['Configuration', 'ApiClient', 'model/OrganizationConnectConfigsResponse', 'model/OrganizationConnectConfigurationDetailsResponse', 'model/OrganizationConnectConfigurationRequest', 'model/OrganizationConnectHmacSecretsResponse', 'model/OrganizationConnectOAuthConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/OrganizationConnectConfigsResponse'), require('../model/OrganizationConnectConfigurationDetailsResponse'), require('../model/OrganizationConnectConfigurationRequest'), require('../model/OrganizationConnectHmacSecretsResponse'), require('../model/OrganizationConnectOAuthConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.OrgConnectApi = factory(root.DocusignAdmin.Configuration, root.DocusignAdmin.ApiClient, root.DocusignAdmin.OrganizationConnectConfigsResponse, root.DocusignAdmin.OrganizationConnectConfigurationDetailsResponse, root.DocusignAdmin.OrganizationConnectConfigurationRequest, root.DocusignAdmin.OrganizationConnectHmacSecretsResponse, root.DocusignAdmin.OrganizationConnectOAuthConfiguration);
  }
}(this, function(Configuration, ApiClient, OrganizationConnectConfigsResponse, OrganizationConnectConfigurationDetailsResponse, OrganizationConnectConfigurationRequest, OrganizationConnectHmacSecretsResponse, OrganizationConnectOAuthConfiguration) {
  'use strict';

  /**
   * OrgConnect service.
   * @module api/OrgConnectApi
   */

  /**
   * Constructs a new OrgConnectApi. 
   * @alias module:api/OrgConnectApi
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
     * (Optional) Callback function to receive the result of the createOrganizationConnectConfig operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~createOrganizationConnectConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationConnectConfigurationDetailsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Adds a Connect configuration for an organization
     * Required scopes: connect_org_config_write_api
     * @param {String} organizationId The organization ID Guid
     * @param {module:model/OrganizationConnectConfigurationRequest} connectRequest Add an organization Connect request
     * @param {module:api/OrgConnectApi~createOrganizationConnectConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationConnectConfigurationDetailsResponse}
     */
    this.createOrganizationConnectConfig = function(connectRequest, organizationId, callback) {
      var postBody = connectRequest;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createOrganizationConnectConfig");
      }

      // verify the required parameter 'connectRequest' is set
      if (connectRequest === undefined || connectRequest === null) {
        throw new Error("Missing the required parameter 'connectRequest' when calling createOrganizationConnectConfig");
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
      var returnType = OrganizationConnectConfigurationDetailsResponse;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteConnectHmacSecret operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~deleteConnectHmacSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationConnectHmacSecretsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes information about a Connect HMAC secret
     * Required scopes: connect_org_hmac_write_api
     * @param {String} organizationId The organization ID Guid
     * @param {String} keyId The key ID Guid
     * @param {module:api/OrgConnectApi~deleteConnectHmacSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationConnectHmacSecretsResponse}
     */
    this.deleteConnectHmacSecret = function(organizationId, keyId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteConnectHmacSecret");
      }

      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling deleteConnectHmacSecret");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'keyId': keyId
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
      var returnType = OrganizationConnectHmacSecretsResponse;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect/secret/{keyId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteOrganizationConnectConfig operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~deleteOrganizationConnectConfigCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes information about an organization-level Connect configuration
     * Required scopes: connect_org_config_write_api
     * @param {String} organizationId The organization ID Guid
     * @param {String} connectId The configuration ID Guid
     * @param {module:api/OrgConnectApi~deleteOrganizationConnectConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.deleteOrganizationConnectConfig = function(organizationId, connectId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteOrganizationConnectConfig");
      }

      // verify the required parameter 'connectId' is set
      if (connectId === undefined || connectId === null) {
        throw new Error("Missing the required parameter 'connectId' when calling deleteOrganizationConnectConfig");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'connectId': connectId
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect/{connectId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteOrganizationConnectOAuthConfiguration operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~deleteOrganizationConnectOAuthConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes an organization-level Connect OAuth configuration
     * Required scopes: connect_org_oauth_write_api
     * @param {String} organizationId The organization ID Guid
     * @param {module:api/OrgConnectApi~deleteOrganizationConnectOAuthConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.deleteOrganizationConnectOAuthConfiguration = function(organizationId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteOrganizationConnectOAuthConfiguration");
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect/oauth', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getConnectHmacSecrets operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~getConnectHmacSecretsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationConnectHmacSecretsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns information about Connect HMAC secrets
     * Required scopes: connect_org_hmac_read_api
     * @param {String} organizationId The organization ID Guid
     * @param {module:api/OrgConnectApi~getConnectHmacSecretsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationConnectHmacSecretsResponse}
     */
    this.getConnectHmacSecrets = function(organizationId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getConnectHmacSecrets");
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
      var returnType = OrganizationConnectHmacSecretsResponse;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect/secret', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getOrganizationConnectConfig operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~getOrganizationConnectConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationConnectConfigurationDetailsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns an organization-level Connect configuration
     * Required scopes: connect_org_config_read_api
     * @param {String} organizationId The organization ID Guid
     * @param {String} connectId The configuration ID Guid
     * @param {module:api/OrgConnectApi~getOrganizationConnectConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationConnectConfigurationDetailsResponse}
     */
    this.getOrganizationConnectConfig = function(organizationId, connectId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationConnectConfig");
      }

      // verify the required parameter 'connectId' is set
      if (connectId === undefined || connectId === null) {
        throw new Error("Missing the required parameter 'connectId' when calling getOrganizationConnectConfig");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'connectId': connectId
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
      var returnType = OrganizationConnectConfigurationDetailsResponse;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect/{connectId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getOrganizationConnectConfigs operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~getOrganizationConnectConfigsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationConnectConfigsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns a list of Connect configurations under an organization
     * Required scopes: connect_org_config_read_api
     * @param {String} organizationId The organization ID Guid
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.sortBy Sorts configs by field in ascending order. Default sort by config name. Default value: name
     * @param {Number} optsOrCallback.siteId Selects configs based on siteId
     * @param {String} optsOrCallback.accountId Selects configs based on accountId
     * @param {Boolean} optsOrCallback.allowEnvelopePublish Selects configs based on their status
     * @param {String} optsOrCallback.q Selects configs based on config id or name provided in the query parameter
     * @param {module:api/OrgConnectApi~getOrganizationConnectConfigsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationConnectConfigsResponse}
     */
    this.getOrganizationConnectConfigs = function(organizationId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationConnectConfigs");
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
        'sortBy': optsOrCallback['sortBy'],
        'siteId': optsOrCallback['siteId'],
        'accountId': optsOrCallback['accountId'],
        'allowEnvelopePublish': optsOrCallback['allowEnvelopePublish'],
        'q': optsOrCallback['q']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OrganizationConnectConfigsResponse;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getOrganizationConnectOAuthConfiguration operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~getOrganizationConnectOAuthConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Returns information about an organization-level Connect OAuth configuration
     * Required scopes: connect_org_oauth_read_api
     * @param {String} organizationId The organization ID Guid
     * @param {module:api/OrgConnectApi~getOrganizationConnectOAuthConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getOrganizationConnectOAuthConfiguration = function(organizationId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationConnectOAuthConfiguration");
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect/oauth', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the postConnectHmacSecret operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~postConnectHmacSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationConnectHmacSecretsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Saves information about a Connect HMAC secret
     * Required scopes: connect_org_hmac_write_api
     * @param {String} organizationId The organization ID Guid
     * @param {module:api/OrgConnectApi~postConnectHmacSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationConnectHmacSecretsResponse}
     */
    this.postConnectHmacSecret = function(organizationId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling postConnectHmacSecret");
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
      var returnType = OrganizationConnectHmacSecretsResponse;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect/secret', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the postOrganizationConnectOAuthConfiguration operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~postOrganizationConnectOAuthConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationConnectOAuthConfiguration} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Saves information about an organization-level Connect OAuth configuration
     * Required scopes: connect_org_oauth_write_api
     * @param {String} organizationId The organization ID Guid
     * @param {module:model/OrganizationConnectOAuthConfiguration} configuration Add an organization-level Connect OAuth configuration
     * @param {module:api/OrgConnectApi~postOrganizationConnectOAuthConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationConnectOAuthConfiguration}
     */
    this.postOrganizationConnectOAuthConfiguration = function(configuration, organizationId, callback) {
      var postBody = configuration;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling postOrganizationConnectOAuthConfiguration");
      }

      // verify the required parameter 'configuration' is set
      if (configuration === undefined || configuration === null) {
        throw new Error("Missing the required parameter 'configuration' when calling postOrganizationConnectOAuthConfiguration");
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
      var returnType = OrganizationConnectOAuthConfiguration;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect/oauth', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the putOrganizationConnectOAuthConfiguration operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~putOrganizationConnectOAuthConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationConnectOAuthConfiguration} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates information about an organization-level Connect OAuth configuration
     * Required scopes: connect_org_oauth_write_api
     * @param {String} organizationId The organization ID Guid
     * @param {module:model/OrganizationConnectOAuthConfiguration} configuration Update an organization-level Connect OAuth configuration
     * @param {module:api/OrgConnectApi~putOrganizationConnectOAuthConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationConnectOAuthConfiguration}
     */
    this.putOrganizationConnectOAuthConfiguration = function(configuration, organizationId, callback) {
      var postBody = configuration;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling putOrganizationConnectOAuthConfiguration");
      }

      // verify the required parameter 'configuration' is set
      if (configuration === undefined || configuration === null) {
        throw new Error("Missing the required parameter 'configuration' when calling putOrganizationConnectOAuthConfiguration");
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
      var returnType = OrganizationConnectOAuthConfiguration;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect/oauth', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateOrganizationConnectConfig operation. If none specified a Promise will be returned.
     * @callback module:api/OrgConnectApi~updateOrganizationConnectConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationConnectConfigurationDetailsResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates an organization-level Connect configuration
     * Required scopes: connect_org_config_write_api
     * @param {String} organizationId The organization ID Guid
     * @param {String} connectId The configuration ID Guid
     * @param {module:model/OrganizationConnectConfigurationRequest} connectRequest Add an organization Connect request
     * @param {module:api/OrgConnectApi~updateOrganizationConnectConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationConnectConfigurationDetailsResponse}
     */
    this.updateOrganizationConnectConfig = function(connectRequest, organizationId, connectId, callback) {
      var postBody = connectRequest;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateOrganizationConnectConfig");
      }

      // verify the required parameter 'connectId' is set
      if (connectId === undefined || connectId === null) {
        throw new Error("Missing the required parameter 'connectId' when calling updateOrganizationConnectConfig");
      }

      // verify the required parameter 'connectRequest' is set
      if (connectRequest === undefined || connectRequest === null) {
        throw new Error("Missing the required parameter 'connectRequest' when calling updateOrganizationConnectConfig");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId,
        'connectId': connectId
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
      var returnType = OrganizationConnectConfigurationDetailsResponse;

      return this.apiClient.callApi(
        '/v2/organizations/{organizationId}/connect/{connectId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));