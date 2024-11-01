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
    root.DocusignAdmin.AssetGroupAccountCloneSourceAccount = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AssetGroupAccountCloneSourceAccount model module.
   * @module model/AssetGroupAccountCloneSourceAccount
   */

  /**
   * Constructs a new <code>AssetGroupAccountCloneSourceAccount</code>.
   * @alias module:model/AssetGroupAccountCloneSourceAccount
   * @class
   * @param id {String} The source account id to clone from.
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>AssetGroupAccountCloneSourceAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetGroupAccountCloneSourceAccount} obj Optional instance to populate.
   * @return {module:model/AssetGroupAccountCloneSourceAccount} The populated <code>AssetGroupAccountCloneSourceAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('externalAccountId')) {
        obj['externalAccountId'] = ApiClient.convertToType(data['externalAccountId'], 'Number');
      }
      if (data.hasOwnProperty('site')) {
        obj['site'] = ApiClient.convertToType(data['site'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The source account id to clone from.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The external account id of the source account.
   * @member {Number} externalAccountId
   */
  exports.prototype['externalAccountId'] = undefined;
  /**
   * The site the source account is on.
   * @member {String} site
   */
  exports.prototype['site'] = undefined;
  /**
   * The name of the source account.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


