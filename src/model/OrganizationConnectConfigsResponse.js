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
    define(['ApiClient', 'model/ErrorDetail', 'model/OrganizationConnectConfigResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorDetail'), require('./OrganizationConnectConfigResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.OrganizationConnectConfigsResponse = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.ErrorDetail, root.DocusignAdmin.OrganizationConnectConfigResponse);
  }
}(this, function(ApiClient, ErrorDetail, OrganizationConnectConfigResponse) {
  'use strict';


  /**
   * The OrganizationConnectConfigsResponse model module.
   * @module model/OrganizationConnectConfigsResponse
   */

  /**
   * Constructs a new <code>OrganizationConnectConfigsResponse</code>.
   * @alias module:model/OrganizationConnectConfigsResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OrganizationConnectConfigsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationConnectConfigsResponse} obj Optional instance to populate.
   * @return {module:model/OrganizationConnectConfigsResponse} The populated <code>OrganizationConnectConfigsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('configurations')) {
        obj['configurations'] = ApiClient.convertToType(data['configurations'], [OrganizationConnectConfigResponse]);
      }
      if (data.hasOwnProperty('totalSetSize')) {
        obj['totalSetSize'] = ApiClient.convertToType(data['totalSetSize'], 'Number');
      }
      if (data.hasOwnProperty('errorDetail')) {
        obj['errorDetail'] = ErrorDetail.constructFromObject(data['errorDetail']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/OrganizationConnectConfigResponse>} configurations
   */
  exports.prototype['configurations'] = undefined;
  /**
   * @member {Number} totalSetSize
   */
  exports.prototype['totalSetSize'] = undefined;
  /**
   * @member {module:model/ErrorDetail} errorDetail
   */
  exports.prototype['errorDetail'] = undefined;



  return exports;
}));


