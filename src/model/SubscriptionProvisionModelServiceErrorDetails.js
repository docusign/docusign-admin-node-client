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
    root.DocusignAdmin.SubscriptionProvisionModelServiceErrorDetails = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SubscriptionProvisionModelServiceErrorDetails model module.
   * @module model/SubscriptionProvisionModelServiceErrorDetails
   */

  /**
   * Constructs a new <code>SubscriptionProvisionModelServiceErrorDetails</code>.
   * @alias module:model/SubscriptionProvisionModelServiceErrorDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubscriptionProvisionModelServiceErrorDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionProvisionModelServiceErrorDetails} obj Optional instance to populate.
   * @return {module:model/SubscriptionProvisionModelServiceErrorDetails} The populated <code>SubscriptionProvisionModelServiceErrorDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ErrorCode')) {
        obj['ErrorCode'] = ApiClient.convertToType(data['ErrorCode'], 'String');
      }
      if (data.hasOwnProperty('PublicErrorCode')) {
        obj['PublicErrorCode'] = ApiClient.convertToType(data['PublicErrorCode'], 'String');
      }
      if (data.hasOwnProperty('ErrorDescription')) {
        obj['ErrorDescription'] = ApiClient.convertToType(data['ErrorDescription'], 'String');
      }
      if (data.hasOwnProperty('IsSystemError')) {
        obj['IsSystemError'] = ApiClient.convertToType(data['IsSystemError'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} ErrorCode
   */
  exports.prototype['ErrorCode'] = undefined;
  /**
   * @member {String} PublicErrorCode
   */
  exports.prototype['PublicErrorCode'] = undefined;
  /**
   * @member {String} ErrorDescription
   */
  exports.prototype['ErrorDescription'] = undefined;
  /**
   * @member {Boolean} IsSystemError
   */
  exports.prototype['IsSystemError'] = undefined;



  return exports;
}));


