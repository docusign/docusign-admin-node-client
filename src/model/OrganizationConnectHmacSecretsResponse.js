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
    root.DocusignAdmin.OrganizationConnectHmacSecretsResponse = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The OrganizationConnectHmacSecretsResponse model module.
   * @module model/OrganizationConnectHmacSecretsResponse
   */

  /**
   * Constructs a new <code>OrganizationConnectHmacSecretsResponse</code>.
   * @alias module:model/OrganizationConnectHmacSecretsResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OrganizationConnectHmacSecretsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationConnectHmacSecretsResponse} obj Optional instance to populate.
   * @return {module:model/OrganizationConnectHmacSecretsResponse} The populated <code>OrganizationConnectHmacSecretsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('secrets')) {
        obj['secrets'] = ApiClient.convertToType(data['secrets'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} secrets
   */
  exports.prototype['secrets'] = undefined;



  return exports;
}));


