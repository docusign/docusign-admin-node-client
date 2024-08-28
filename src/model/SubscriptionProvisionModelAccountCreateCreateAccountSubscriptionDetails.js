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
    root.DocusignAdmin.SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails model module.
   * @module model/SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails
   */

  /**
   * Constructs a new <code>SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails</code>.
   * @alias module:model/SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails} obj Optional instance to populate.
   * @return {module:model/SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails} The populated <code>SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SubscriptionId')) {
        obj['SubscriptionId'] = ApiClient.convertToType(data['SubscriptionId'], 'String');
      }
      if (data.hasOwnProperty('PlanId')) {
        obj['PlanId'] = ApiClient.convertToType(data['PlanId'], 'String');
      }
      if (data.hasOwnProperty('Modules')) {
        obj['Modules'] = ApiClient.convertToType(data['Modules'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} SubscriptionId
   */
  exports.prototype['SubscriptionId'] = undefined;
  /**
   * @member {String} PlanId
   */
  exports.prototype['PlanId'] = undefined;
  /**
   * @member {Array.<String>} Modules
   */
  exports.prototype['Modules'] = undefined;



  return exports;
}));


