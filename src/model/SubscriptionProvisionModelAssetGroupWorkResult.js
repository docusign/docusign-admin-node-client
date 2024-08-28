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
    define(['ApiClient', 'model/SubscriptionProvisionModelAssetGroupWork'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubscriptionProvisionModelAssetGroupWork'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.SubscriptionProvisionModelAssetGroupWorkResult = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.SubscriptionProvisionModelAssetGroupWork);
  }
}(this, function(ApiClient, SubscriptionProvisionModelAssetGroupWork) {
  'use strict';


  /**
   * The SubscriptionProvisionModelAssetGroupWorkResult model module.
   * @module model/SubscriptionProvisionModelAssetGroupWorkResult
   */

  /**
   * Constructs a new <code>SubscriptionProvisionModelAssetGroupWorkResult</code>.
   * @alias module:model/SubscriptionProvisionModelAssetGroupWorkResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubscriptionProvisionModelAssetGroupWorkResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionProvisionModelAssetGroupWorkResult} obj Optional instance to populate.
   * @return {module:model/SubscriptionProvisionModelAssetGroupWorkResult} The populated <code>SubscriptionProvisionModelAssetGroupWorkResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AssetGroupWork')) {
        obj['AssetGroupWork'] = SubscriptionProvisionModelAssetGroupWork.constructFromObject(data['AssetGroupWork']);
      }
      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
      if (data.hasOwnProperty('Success')) {
        obj['Success'] = ApiClient.convertToType(data['Success'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SubscriptionProvisionModelAssetGroupWork} AssetGroupWork
   */
  exports.prototype['AssetGroupWork'] = undefined;
  /**
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;
  /**
   * @member {Boolean} Success
   */
  exports.prototype['Success'] = undefined;



  return exports;
}));


