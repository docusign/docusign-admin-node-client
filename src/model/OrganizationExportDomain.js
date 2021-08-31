/**
 * DocuSign Admin API
 * An API for an organization administrator to manage organizations, accounts and users
 *
 * OpenAPI spec version: v2
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
    root.DocusignAdmin.OrganizationExportDomain = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The OrganizationExportDomain model module.
   * @module model/OrganizationExportDomain
   */

  /**
   * Constructs a new <code>OrganizationExportDomain</code>.
   * @alias module:model/OrganizationExportDomain
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OrganizationExportDomain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationExportDomain} obj Optional instance to populate.
   * @return {module:model/OrganizationExportDomain} The populated <code>OrganizationExportDomain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;



  return exports;
}));


