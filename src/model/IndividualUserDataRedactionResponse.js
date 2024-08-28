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
    define(['ApiClient', 'model/MembershipDataRedactionResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MembershipDataRedactionResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.IndividualUserDataRedactionResponse = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.MembershipDataRedactionResponse);
  }
}(this, function(ApiClient, MembershipDataRedactionResponse) {
  'use strict';


  /**
   * The IndividualUserDataRedactionResponse model module.
   * @module model/IndividualUserDataRedactionResponse
   */

  /**
   * Constructs a new <code>IndividualUserDataRedactionResponse</code>.
   * @alias module:model/IndividualUserDataRedactionResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>IndividualUserDataRedactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IndividualUserDataRedactionResponse} obj Optional instance to populate.
   * @return {module:model/IndividualUserDataRedactionResponse} The populated <code>IndividualUserDataRedactionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('membership_results')) {
        obj['membership_results'] = ApiClient.convertToType(data['membership_results'], [MembershipDataRedactionResponse]);
      }
    }
    return obj;
  }

  /**
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {module:model/IndividualUserDataRedactionResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<module:model/MembershipDataRedactionResponse>} membership_results
   */
  exports.prototype['membership_results'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "unknown"
     * @const
     */
    unknown: "unknown",

    /**
     * value: "pending"
     * @const
     */
    pending: "pending",

    /**
     * value: "failure"
     * @const
     */
    failure: "failure",

    /**
     * value: "success"
     * @const
     */
    success: "success",

    /**
     * value: "already_redacted"
     * @const
     */
    alreadyRedacted: "already_redacted"
  };


  return exports;
}));


