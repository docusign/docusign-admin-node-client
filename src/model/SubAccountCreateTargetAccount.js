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
    define(['ApiClient', 'model/SubAccountCreateTargetAccountAdmin'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubAccountCreateTargetAccountAdmin'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.SubAccountCreateTargetAccount = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.SubAccountCreateTargetAccountAdmin);
  }
}(this, function(ApiClient, SubAccountCreateTargetAccountAdmin) {
  'use strict';


  /**
   * The SubAccountCreateTargetAccount model module.
   * @module model/SubAccountCreateTargetAccount
   */

  /**
   * Constructs a new <code>SubAccountCreateTargetAccount</code>.
   * @alias module:model/SubAccountCreateTargetAccount
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubAccountCreateTargetAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountCreateTargetAccount} obj Optional instance to populate.
   * @return {module:model/SubAccountCreateTargetAccount} The populated <code>SubAccountCreateTargetAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = ApiClient.convertToType(data['region'], 'String');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('site')) {
        obj['site'] = ApiClient.convertToType(data['site'], 'String');
      }
      if (data.hasOwnProperty('admin')) {
        obj['admin'] = SubAccountCreateTargetAccountAdmin.constructFromObject(data['admin']);
      }
    }
    return obj;
  }

  /**
   * The target account id being created. It will be empty Guid if account is not created yet.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the target account.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The region where the target account is in.
   * @member {String} region
   */
  exports.prototype['region'] = undefined;
  /**
   * The country code where the target account is in.
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * The site where the target account is on.
   * @member {String} site
   */
  exports.prototype['site'] = undefined;
  /**
   * The admin user for the target account.
   * @member {module:model/SubAccountCreateTargetAccountAdmin} admin
   */
  exports.prototype['admin'] = undefined;



  return exports;
}));


