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
    root.DocusignAdmin.SubAccountCreateSubscriptionModuleDetails = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SubAccountCreateSubscriptionModuleDetails model module.
   * @module model/SubAccountCreateSubscriptionModuleDetails
   */

  /**
   * Constructs a new <code>SubAccountCreateSubscriptionModuleDetails</code>.
   * @alias module:model/SubAccountCreateSubscriptionModuleDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubAccountCreateSubscriptionModuleDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountCreateSubscriptionModuleDetails} obj Optional instance to populate.
   * @return {module:model/SubAccountCreateSubscriptionModuleDetails} The populated <code>SubAccountCreateSubscriptionModuleDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('moduleId')) {
        obj['moduleId'] = ApiClient.convertToType(data['moduleId'], 'String');
      }
      if (data.hasOwnProperty('moduleName')) {
        obj['moduleName'] = ApiClient.convertToType(data['moduleName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Module ID
   * @member {String} moduleId
   */
  exports.prototype['moduleId'] = undefined;
  /**
   * Module Name
   * @member {String} moduleName
   */
  exports.prototype['moduleName'] = undefined;



  return exports;
}));


