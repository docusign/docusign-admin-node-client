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
    root.DocusignAdmin.SubscriptionProvisionModelChangeEvent = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SubscriptionProvisionModelChangeEvent model module.
   * @module model/SubscriptionProvisionModelChangeEvent
   */

  /**
   * Constructs a new <code>SubscriptionProvisionModelChangeEvent</code>.
   * @alias module:model/SubscriptionProvisionModelChangeEvent
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubscriptionProvisionModelChangeEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionProvisionModelChangeEvent} obj Optional instance to populate.
   * @return {module:model/SubscriptionProvisionModelChangeEvent} The populated <code>SubscriptionProvisionModelChangeEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('EventDate')) {
        obj['EventDate'] = ApiClient.convertToType(data['EventDate'], 'Date');
      }
      if (data.hasOwnProperty('Action')) {
        obj['Action'] = ApiClient.convertToType(data['Action'], 'String');
      }
      if (data.hasOwnProperty('TraceToken')) {
        obj['TraceToken'] = ApiClient.convertToType(data['TraceToken'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} EventDate
   */
  exports.prototype['EventDate'] = undefined;
  /**
   * @member {String} Action
   */
  exports.prototype['Action'] = undefined;
  /**
   * @member {String} TraceToken
   */
  exports.prototype['TraceToken'] = undefined;



  return exports;
}));


