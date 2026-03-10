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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.OrganizationConnectOAuthConfiguration = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The OrganizationConnectOAuthConfiguration model module.
   * @module model/OrganizationConnectOAuthConfiguration
   */

  /**
   * Constructs a new <code>OrganizationConnectOAuthConfiguration</code>.
   * @alias module:model/OrganizationConnectOAuthConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OrganizationConnectOAuthConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationConnectOAuthConfiguration} obj Optional instance to populate.
   * @return {module:model/OrganizationConnectOAuthConfiguration} The populated <code>OrganizationConnectOAuthConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorizationServerUrl')) {
        obj['authorizationServerUrl'] = ApiClient.convertToType(data['authorizationServerUrl'], 'String');
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
      }
      if (data.hasOwnProperty('clientSecret')) {
        obj['clientSecret'] = ApiClient.convertToType(data['clientSecret'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('customParameter')) {
        obj['customParameter'] = ApiClient.convertToType(data['customParameter'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {String} authorizationServerUrl
   */
  exports.prototype['authorizationServerUrl'] = undefined;
  /**
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * @member {String} clientSecret
   */
  exports.prototype['clientSecret'] = undefined;
  /**
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * @member {Object.<String, String>} customParameter
   */
  exports.prototype['customParameter'] = undefined;



  return exports;
}));


