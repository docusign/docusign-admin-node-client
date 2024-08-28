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
    define(['ApiClient', 'model/SubAccountCreateSubscriptionModuleDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubAccountCreateSubscriptionModuleDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.SubAccountCreateSubscriptionDetails = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.SubAccountCreateSubscriptionModuleDetails);
  }
}(this, function(ApiClient, SubAccountCreateSubscriptionModuleDetails) {
  'use strict';


  /**
   * The SubAccountCreateSubscriptionDetails model module.
   * @module model/SubAccountCreateSubscriptionDetails
   */

  /**
   * Constructs a new <code>SubAccountCreateSubscriptionDetails</code>.
   * @alias module:model/SubAccountCreateSubscriptionDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubAccountCreateSubscriptionDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountCreateSubscriptionDetails} obj Optional instance to populate.
   * @return {module:model/SubAccountCreateSubscriptionDetails} The populated <code>SubAccountCreateSubscriptionDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('planId')) {
        obj['planId'] = ApiClient.convertToType(data['planId'], 'String');
      }
      if (data.hasOwnProperty('planName')) {
        obj['planName'] = ApiClient.convertToType(data['planName'], 'String');
      }
      if (data.hasOwnProperty('modules')) {
        obj['modules'] = ApiClient.convertToType(data['modules'], [SubAccountCreateSubscriptionModuleDetails]);
      }
    }
    return obj;
  }

  /**
   * Subscription ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Plan ID
   * @member {String} planId
   */
  exports.prototype['planId'] = undefined;
  /**
   * Plan Name
   * @member {String} planName
   */
  exports.prototype['planName'] = undefined;
  /**
   * List of module IDs selected for creating the new account
   * @member {Array.<module:model/SubAccountCreateSubscriptionModuleDetails>} modules
   */
  exports.prototype['modules'] = undefined;



  return exports;
}));


