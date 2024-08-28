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
    root.DocusignAdmin.SubAccountErrorDetails = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SubAccountErrorDetails model module.
   * @module model/SubAccountErrorDetails
   */

  /**
   * Constructs a new <code>SubAccountErrorDetails</code>.
   * @alias module:model/SubAccountErrorDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubAccountErrorDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountErrorDetails} obj Optional instance to populate.
   * @return {module:model/SubAccountErrorDetails} The populated <code>SubAccountErrorDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('errorDescription')) {
        obj['errorDescription'] = ApiClient.convertToType(data['errorDescription'], 'String');
      }
      if (data.hasOwnProperty('isSystemError')) {
        obj['isSystemError'] = ApiClient.convertToType(data['isSystemError'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The error code.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * The error description.
   * @member {String} errorDescription
   */
  exports.prototype['errorDescription'] = undefined;
  /**
   * Whether the error is caused by the system or user.
   * @member {Boolean} isSystemError
   */
  exports.prototype['isSystemError'] = undefined;



  return exports;
}));


