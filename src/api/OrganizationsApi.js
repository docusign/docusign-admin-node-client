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
	define(['Configuration', 'ApiClient', 'model/IndividualUserDataRedactionRequest', 'model/IndividualUserDataRedactionResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/IndividualUserDataRedactionRequest'), require('../model/IndividualUserDataRedactionResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.OrganizationsApi = factory(root.DocusignAdmin.Configuration, root.DocusignAdmin.ApiClient, root.DocusignAdmin.IndividualUserDataRedactionRequest, root.DocusignAdmin.IndividualUserDataRedactionResponse);
  }
}(this, function(Configuration, ApiClient, IndividualUserDataRedactionRequest, IndividualUserDataRedactionResponse) {
  'use strict';

  /**
   * Organizations service.
   * @module api/OrganizationsApi
   */

  /**
   * Constructs a new OrganizationsApi. 
   * @alias module:api/OrganizationsApi
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
     * (Optional) Callback function to receive the result of the redactIndividualUserData operation. If none specified a Promise will be returned.
     * @callback module:api/OrganizationsApi~redactIndividualUserDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IndividualUserDataRedactionResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Redacts membership and user data for users in an organization.
     * Required scopes: user_data_redact
     * @param {String} organizationId The organization ID Guid
     * @param {module:model/IndividualUserDataRedactionRequest} requestModel The request body describing the users and memberships to be redacted
     * @param {module:api/OrganizationsApi~redactIndividualUserDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IndividualUserDataRedactionResponse}
     */
    this.redactIndividualUserData = function(requestModel, organizationId, callback) {
      var postBody = requestModel;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling redactIndividualUserData");
      }

      // verify the required parameter 'requestModel' is set
      if (requestModel === undefined || requestModel === null) {
        throw new Error("Missing the required parameter 'requestModel' when calling redactIndividualUserData");
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
      var returnType = IndividualUserDataRedactionResponse;

      return this.apiClient.callApi(
        '/v2/data_redaction/organizations/{organizationId}/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));