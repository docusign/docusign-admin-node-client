/**
 * DocuSign Admin API
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
    define(['ApiClient', 'model/AssetGroupAccountCloneSourceAccount', 'model/AssetGroupAccountCloneTargetAccount', 'model/CloneErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssetGroupAccountCloneSourceAccount'), require('./AssetGroupAccountCloneTargetAccount'), require('./CloneErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.AssetGroupAccountClone = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.AssetGroupAccountCloneSourceAccount, root.DocusignAdmin.AssetGroupAccountCloneTargetAccount, root.DocusignAdmin.CloneErrorDetails);
  }
}(this, function(ApiClient, AssetGroupAccountCloneSourceAccount, AssetGroupAccountCloneTargetAccount, CloneErrorDetails) {
  'use strict';


  /**
   * The AssetGroupAccountClone model module.
   * @module model/AssetGroupAccountClone
   */

  /**
   * Constructs a new <code>AssetGroupAccountClone</code>.
   * @alias module:model/AssetGroupAccountClone
   * @class
   * @param sourceAccount {module:model/AssetGroupAccountCloneSourceAccount} The source account to be cloned from.
   * @param targetAccount {module:model/AssetGroupAccountCloneTargetAccount} The target account to clone to.
   */
  var exports = function(sourceAccount, targetAccount) {
    var _this = this;

    _this['sourceAccount'] = sourceAccount;    _this['targetAccount'] = targetAccount;
  };

  /**
   * Constructs a <code>AssetGroupAccountClone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetGroupAccountClone} obj Optional instance to populate.
   * @return {module:model/AssetGroupAccountClone} The populated <code>AssetGroupAccountClone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sourceAccount')) {
        obj['sourceAccount'] = AssetGroupAccountCloneSourceAccount.constructFromObject(data['sourceAccount']);
      }
      if (data.hasOwnProperty('targetAccount')) {
        obj['targetAccount'] = AssetGroupAccountCloneTargetAccount.constructFromObject(data['targetAccount']);
      }
      if (data.hasOwnProperty('assetGroupWorkId')) {
        obj['assetGroupWorkId'] = ApiClient.convertToType(data['assetGroupWorkId'], 'String');
      }
      if (data.hasOwnProperty('assetGroupId')) {
        obj['assetGroupId'] = ApiClient.convertToType(data['assetGroupId'], 'String');
      }
      if (data.hasOwnProperty('assetGroupWorkType')) {
        obj['assetGroupWorkType'] = ApiClient.convertToType(data['assetGroupWorkType'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('cloneRequestId')) {
        obj['cloneRequestId'] = ApiClient.convertToType(data['cloneRequestId'], 'String');
      }
      if (data.hasOwnProperty('orderId')) {
        obj['orderId'] = ApiClient.convertToType(data['orderId'], 'String');
      }
      if (data.hasOwnProperty('attempts')) {
        obj['attempts'] = ApiClient.convertToType(data['attempts'], 'Number');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
      }
      if (data.hasOwnProperty('createdByName')) {
        obj['createdByName'] = ApiClient.convertToType(data['createdByName'], 'String');
      }
      if (data.hasOwnProperty('createdByEmail')) {
        obj['createdByEmail'] = ApiClient.convertToType(data['createdByEmail'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('cloneProcessingFailureDetails')) {
        obj['cloneProcessingFailureDetails'] = CloneErrorDetails.constructFromObject(data['cloneProcessingFailureDetails']);
      }
    }
    return obj;
  }

  /**
   * The source account to be cloned from.
   * @member {module:model/AssetGroupAccountCloneSourceAccount} sourceAccount
   */
  exports.prototype['sourceAccount'] = undefined;
  /**
   * The target account to clone to.
   * @member {module:model/AssetGroupAccountCloneTargetAccount} targetAccount
   */
  exports.prototype['targetAccount'] = undefined;
  /**
   * The account clone work id.
   * @member {String} assetGroupWorkId
   */
  exports.prototype['assetGroupWorkId'] = undefined;
  /**
   * The asset group id the accounts belong to.
   * @member {String} assetGroupId
   */
  exports.prototype['assetGroupId'] = undefined;
  /**
   * The type of asset group work.
   * @member {module:model/AssetGroupAccountClone.AssetGroupWorkTypeEnum} assetGroupWorkType
   */
  exports.prototype['assetGroupWorkType'] = undefined;
  /**
   * The clone status.
   * @member {module:model/AssetGroupAccountClone.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The account entitlement/setting mirror request id created by the clone work.
   * @member {String} cloneRequestId
   */
  exports.prototype['cloneRequestId'] = undefined;
  /**
   * The order id created by the clone work.
   * @member {String} orderId
   */
  exports.prototype['orderId'] = undefined;
  /**
   * The number of times the work has been worked on.
   * @member {Number} attempts
   */
  exports.prototype['attempts'] = undefined;
  /**
   * The date the account clone work is created.
   * @member {Date} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * The name of the creator of the account clone work.
   * @member {String} createdByName
   */
  exports.prototype['createdByName'] = undefined;
  /**
   * The email of the creator of the account clone work.
   * @member {String} createdByEmail
   */
  exports.prototype['createdByEmail'] = undefined;
  /**
   * The message associated with the account clone work.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The processing failures if the work is in PendingError/ProcessingError status.
   * @member {module:model/CloneErrorDetails} cloneProcessingFailureDetails
   */
  exports.prototype['cloneProcessingFailureDetails'] = undefined;


  /**
   * Allowed values for the <code>assetGroupWorkType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AssetGroupWorkTypeEnum = {
    /**
     * value: "Undefined"
     * @const
     */
    _undefined: "Undefined",

    /**
     * value: "GroupAssetFulfillment"
     * @const
     */
    groupAssetFulfillment: "GroupAssetFulfillment",

    /**
     * value: "AccountAssetFulfillment"
     * @const
     */
    accountAssetFulfillment: "AccountAssetFulfillment",

    /**
     * value: "AccountAssetClone"
     * @const
     */
    accountAssetClone: "AccountAssetClone",

    /**
     * value: "AccountAssetCreate"
     * @const
     */
    accountAssetCreate: "AccountAssetCreate"
  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Undefined"
     * @const
     */
    _undefined: "Undefined",

    /**
     * value: "Pending"
     * @const
     */
    pending: "Pending",

    /**
     * value: "Processing"
     * @const
     */
    processing: "Processing",

    /**
     * value: "PendingError"
     * @const
     */
    pendingError: "PendingError",

    /**
     * value: "ProcessingError"
     * @const
     */
    processingError: "ProcessingError",

    /**
     * value: "Completed"
     * @const
     */
    completed: "Completed",

    /**
     * value: "Canceled"
     * @const
     */
    canceled: "Canceled",

    /**
     * value: "PermanentFailure"
     * @const
     */
    permanentFailure: "PermanentFailure"
  };


  return exports;
}));


