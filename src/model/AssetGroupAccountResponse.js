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
    root.DocusignAdmin.AssetGroupAccountResponse = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AssetGroupAccountResponse model module.
   * @module model/AssetGroupAccountResponse
   */

  /**
   * Constructs a new <code>AssetGroupAccountResponse</code>.
   * @alias module:model/AssetGroupAccountResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AssetGroupAccountResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetGroupAccountResponse} obj Optional instance to populate.
   * @return {module:model/AssetGroupAccountResponse} The populated <code>AssetGroupAccountResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assetGroupId')) {
        obj['assetGroupId'] = ApiClient.convertToType(data['assetGroupId'], 'String');
      }
      if (data.hasOwnProperty('assetGroupName')) {
        obj['assetGroupName'] = ApiClient.convertToType(data['assetGroupName'], 'String');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('externalAccountId')) {
        obj['externalAccountId'] = ApiClient.convertToType(data['externalAccountId'], 'Number');
      }
      if (data.hasOwnProperty('compliant')) {
        obj['compliant'] = ApiClient.convertToType(data['compliant'], 'Boolean');
      }
      if (data.hasOwnProperty('siteId')) {
        obj['siteId'] = ApiClient.convertToType(data['siteId'], 'Number');
      }
      if (data.hasOwnProperty('siteName')) {
        obj['siteName'] = ApiClient.convertToType(data['siteName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The asset group id that the asset group account belongs to.
   * @member {String} assetGroupId
   */
  exports.prototype['assetGroupId'] = undefined;
  /**
   * The name of asset group that the asset group account belongs to.
   * @member {String} assetGroupName
   */
  exports.prototype['assetGroupName'] = undefined;
  /**
   * The account id of the asset group account.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * The account name of the asset group account.
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * The external account id of the asset group account.
   * @member {Number} externalAccountId
   */
  exports.prototype['externalAccountId'] = undefined;
  /**
   * The compliant status for the account.
   * @member {Boolean} compliant
   */
  exports.prototype['compliant'] = undefined;
  /**
   * The site id of the asset group account.
   * @member {Number} siteId
   */
  exports.prototype['siteId'] = undefined;
  /**
   * The site name of the asset group account.
   * @member {String} siteName
   */
  exports.prototype['siteName'] = undefined;



  return exports;
}));


