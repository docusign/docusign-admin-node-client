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
    root.DocusignAdmin.SubscriptionPlanItemResponse = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SubscriptionPlanItemResponse model module.
   * @module model/SubscriptionPlanItemResponse
   */

  /**
   * Constructs a new <code>SubscriptionPlanItemResponse</code>.
   * @alias module:model/SubscriptionPlanItemResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubscriptionPlanItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionPlanItemResponse} obj Optional instance to populate.
   * @return {module:model/SubscriptionPlanItemResponse} The populated <code>SubscriptionPlanItemResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('plan_item_id')) {
        obj['plan_item_id'] = ApiClient.convertToType(data['plan_item_id'], 'String');
      }
      if (data.hasOwnProperty('plan_item_name')) {
        obj['plan_item_name'] = ApiClient.convertToType(data['plan_item_name'], 'String');
      }
      if (data.hasOwnProperty('plan_item_description')) {
        obj['plan_item_description'] = ApiClient.convertToType(data['plan_item_description'], 'String');
      }
      if (data.hasOwnProperty('plan_item_internal_id')) {
        obj['plan_item_internal_id'] = ApiClient.convertToType(data['plan_item_internal_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} plan_item_id
   */
  exports.prototype['plan_item_id'] = undefined;
  /**
   * @member {String} plan_item_name
   */
  exports.prototype['plan_item_name'] = undefined;
  /**
   * @member {String} plan_item_description
   */
  exports.prototype['plan_item_description'] = undefined;
  /**
   * @member {String} plan_item_internal_id
   */
  exports.prototype['plan_item_internal_id'] = undefined;



  return exports;
}));


