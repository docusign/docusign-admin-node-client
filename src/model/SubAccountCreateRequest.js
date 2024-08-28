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
    define(['ApiClient', 'model/SubAccountCreateRequestSubAccountCreationSubscription', 'model/SubAccountCreateRequestSubAccountCreationTargetAccountDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubAccountCreateRequestSubAccountCreationSubscription'), require('./SubAccountCreateRequestSubAccountCreationTargetAccountDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.SubAccountCreateRequest = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.SubAccountCreateRequestSubAccountCreationSubscription, root.DocusignAdmin.SubAccountCreateRequestSubAccountCreationTargetAccountDetails);
  }
}(this, function(ApiClient, SubAccountCreateRequestSubAccountCreationSubscription, SubAccountCreateRequestSubAccountCreationTargetAccountDetails) {
  'use strict';


  /**
   * The SubAccountCreateRequest model module.
   * @module model/SubAccountCreateRequest
   */

  /**
   * Constructs a new <code>SubAccountCreateRequest</code>.
   * @alias module:model/SubAccountCreateRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubAccountCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountCreateRequest} obj Optional instance to populate.
   * @return {module:model/SubAccountCreateRequest} The populated <code>SubAccountCreateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptionDetails')) {
        obj['subscriptionDetails'] = SubAccountCreateRequestSubAccountCreationSubscription.constructFromObject(data['subscriptionDetails']);
      }
      if (data.hasOwnProperty('targetAccount')) {
        obj['targetAccount'] = SubAccountCreateRequestSubAccountCreationTargetAccountDetails.constructFromObject(data['targetAccount']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SubAccountCreateRequestSubAccountCreationSubscription} subscriptionDetails
   */
  exports.prototype['subscriptionDetails'] = undefined;
  /**
   * @member {module:model/SubAccountCreateRequestSubAccountCreationTargetAccountDetails} targetAccount
   */
  exports.prototype['targetAccount'] = undefined;



  return exports;
}));


