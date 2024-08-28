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
    define(['ApiClient', 'model/SubAccountCreateWorker'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubAccountCreateWorker'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.SubAccountCreateWorkerResponse = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.SubAccountCreateWorker);
  }
}(this, function(ApiClient, SubAccountCreateWorker) {
  'use strict';


  /**
   * The SubAccountCreateWorkerResponse model module.
   * @module model/SubAccountCreateWorkerResponse
   */

  /**
   * Constructs a new <code>SubAccountCreateWorkerResponse</code>.
   * @alias module:model/SubAccountCreateWorkerResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubAccountCreateWorkerResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountCreateWorkerResponse} obj Optional instance to populate.
   * @return {module:model/SubAccountCreateWorkerResponse} The populated <code>SubAccountCreateWorkerResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assetGroupWorks')) {
        obj['assetGroupWorks'] = ApiClient.convertToType(data['assetGroupWorks'], [SubAccountCreateWorker]);
      }
    }
    return obj;
  }

  /**
   * The list of create acccount processes
   * @member {Array.<module:model/SubAccountCreateWorker>} assetGroupWorks
   */
  exports.prototype['assetGroupWorks'] = undefined;



  return exports;
}));


