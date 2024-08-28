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
    define(['ApiClient', 'model/MembershipDataRedactionRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MembershipDataRedactionRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.IndividualUserDataRedactionRequest = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.MembershipDataRedactionRequest);
  }
}(this, function(ApiClient, MembershipDataRedactionRequest) {
  'use strict';


  /**
   * The IndividualUserDataRedactionRequest model module.
   * @module model/IndividualUserDataRedactionRequest
   */

  /**
   * Constructs a new <code>IndividualUserDataRedactionRequest</code>.
   * @alias module:model/IndividualUserDataRedactionRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>IndividualUserDataRedactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IndividualUserDataRedactionRequest} obj Optional instance to populate.
   * @return {module:model/IndividualUserDataRedactionRequest} The populated <code>IndividualUserDataRedactionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('memberships')) {
        obj['memberships'] = ApiClient.convertToType(data['memberships'], [MembershipDataRedactionRequest]);
      }
    }
    return obj;
  }

  /**
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {Array.<module:model/MembershipDataRedactionRequest>} memberships
   */
  exports.prototype['memberships'] = undefined;



  return exports;
}));


