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
    define(['ApiClient', 'model/SubscriptionPlanItemResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubscriptionPlanItemResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.OrganizationSubscriptionResponse = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.SubscriptionPlanItemResponse);
  }
}(this, function(ApiClient, SubscriptionPlanItemResponse) {
  'use strict';


  /**
   * The OrganizationSubscriptionResponse model module.
   * @module model/OrganizationSubscriptionResponse
   */

  /**
   * Constructs a new <code>OrganizationSubscriptionResponse</code>.
   * @alias module:model/OrganizationSubscriptionResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OrganizationSubscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationSubscriptionResponse} obj Optional instance to populate.
   * @return {module:model/OrganizationSubscriptionResponse} The populated <code>OrganizationSubscriptionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('plan_id')) {
        obj['plan_id'] = ApiClient.convertToType(data['plan_id'], 'String');
      }
      if (data.hasOwnProperty('plan_name')) {
        obj['plan_name'] = ApiClient.convertToType(data['plan_name'], 'String');
      }
      if (data.hasOwnProperty('associated_accounts_count')) {
        obj['associated_accounts_count'] = ApiClient.convertToType(data['associated_accounts_count'], 'Number');
      }
      if (data.hasOwnProperty('asset_group_name')) {
        obj['asset_group_name'] = ApiClient.convertToType(data['asset_group_name'], 'String');
      }
      if (data.hasOwnProperty('asset_group_id')) {
        obj['asset_group_id'] = ApiClient.convertToType(data['asset_group_id'], 'String');
      }
      if (data.hasOwnProperty('subscription_name')) {
        obj['subscription_name'] = ApiClient.convertToType(data['subscription_name'], 'String');
      }
      if (data.hasOwnProperty('subscription_id')) {
        obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'String');
      }
      if (data.hasOwnProperty('modules')) {
        obj['modules'] = ApiClient.convertToType(data['modules'], [SubscriptionPlanItemResponse]);
      }
    }
    return obj;
  }

  /**
   * @member {String} plan_id
   */
  exports.prototype['plan_id'] = undefined;
  /**
   * @member {String} plan_name
   */
  exports.prototype['plan_name'] = undefined;
  /**
   * @member {Number} associated_accounts_count
   */
  exports.prototype['associated_accounts_count'] = undefined;
  /**
   * @member {String} asset_group_name
   */
  exports.prototype['asset_group_name'] = undefined;
  /**
   * @member {String} asset_group_id
   */
  exports.prototype['asset_group_id'] = undefined;
  /**
   * @member {String} subscription_name
   */
  exports.prototype['subscription_name'] = undefined;
  /**
   * @member {String} subscription_id
   */
  exports.prototype['subscription_id'] = undefined;
  /**
   * @member {Array.<module:model/SubscriptionPlanItemResponse>} modules
   */
  exports.prototype['modules'] = undefined;



  return exports;
}));


