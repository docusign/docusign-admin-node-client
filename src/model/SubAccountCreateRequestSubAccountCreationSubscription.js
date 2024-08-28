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
    root.DocusignAdmin.SubAccountCreateRequestSubAccountCreationSubscription = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SubAccountCreateRequestSubAccountCreationSubscription model module.
   * @module model/SubAccountCreateRequestSubAccountCreationSubscription
   */

  /**
   * Constructs a new <code>SubAccountCreateRequestSubAccountCreationSubscription</code>.
   * @alias module:model/SubAccountCreateRequestSubAccountCreationSubscription
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubAccountCreateRequestSubAccountCreationSubscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountCreateRequestSubAccountCreationSubscription} obj Optional instance to populate.
   * @return {module:model/SubAccountCreateRequestSubAccountCreationSubscription} The populated <code>SubAccountCreateRequestSubAccountCreationSubscription</code> instance.
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
      if (data.hasOwnProperty('modules')) {
        obj['modules'] = ApiClient.convertToType(data['modules'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} planId
   */
  exports.prototype['planId'] = undefined;
  /**
   * @member {Array.<String>} modules
   */
  exports.prototype['modules'] = undefined;



  return exports;
}));


