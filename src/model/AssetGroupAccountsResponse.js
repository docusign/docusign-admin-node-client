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
    define(['ApiClient', 'model/AssetGroupAccountResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssetGroupAccountResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.AssetGroupAccountsResponse = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.AssetGroupAccountResponse);
  }
}(this, function(ApiClient, AssetGroupAccountResponse) {
  'use strict';


  /**
   * The AssetGroupAccountsResponse model module.
   * @module model/AssetGroupAccountsResponse
   */

  /**
   * Constructs a new <code>AssetGroupAccountsResponse</code>.
   * @alias module:model/AssetGroupAccountsResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AssetGroupAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetGroupAccountsResponse} obj Optional instance to populate.
   * @return {module:model/AssetGroupAccountsResponse} The populated <code>AssetGroupAccountsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assetGroupAccounts')) {
        obj['assetGroupAccounts'] = ApiClient.convertToType(data['assetGroupAccounts'], [AssetGroupAccountResponse]);
      }
    }
    return obj;
  }

  /**
   * The list of asset group accounts.
   * @member {Array.<module:model/AssetGroupAccountResponse>} assetGroupAccounts
   */
  exports.prototype['assetGroupAccounts'] = undefined;



  return exports;
}));


