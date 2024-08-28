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
    define(['ApiClient', 'model/SubAccountCreateSubscriptionDetails', 'model/SubAccountCreateTargetAccount', 'model/SubAccountErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubAccountCreateSubscriptionDetails'), require('./SubAccountCreateTargetAccount'), require('./SubAccountErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.SubAccountCreateWorker = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.SubAccountCreateSubscriptionDetails, root.DocusignAdmin.SubAccountCreateTargetAccount, root.DocusignAdmin.SubAccountErrorDetails);
  }
}(this, function(ApiClient, SubAccountCreateSubscriptionDetails, SubAccountCreateTargetAccount, SubAccountErrorDetails) {
  'use strict';


  /**
   * The SubAccountCreateWorker model module.
   * @module model/SubAccountCreateWorker
   */

  /**
   * Constructs a new <code>SubAccountCreateWorker</code>.
   * @alias module:model/SubAccountCreateWorker
   * @class
   * @param targetAccount {module:model/SubAccountCreateTargetAccount} The target account being created
   * @param subscriptionDetails {module:model/SubAccountCreateSubscriptionDetails} The subscription info to create the account
   */
  var exports = function(targetAccount, subscriptionDetails) {
    var _this = this;

    _this['targetAccount'] = targetAccount;    _this['subscriptionDetails'] = subscriptionDetails;
  };

  /**
   * Constructs a <code>SubAccountCreateWorker</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountCreateWorker} obj Optional instance to populate.
   * @return {module:model/SubAccountCreateWorker} The populated <code>SubAccountCreateWorker</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('targetAccount')) {
        obj['targetAccount'] = SubAccountCreateTargetAccount.constructFromObject(data['targetAccount']);
      }
      if (data.hasOwnProperty('subscriptionDetails')) {
        obj['subscriptionDetails'] = SubAccountCreateSubscriptionDetails.constructFromObject(data['subscriptionDetails']);
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
      if (data.hasOwnProperty('createAccountProcessingFailureDetails')) {
        obj['createAccountProcessingFailureDetails'] = SubAccountErrorDetails.constructFromObject(data['createAccountProcessingFailureDetails']);
      }
    }
    return obj;
  }

  /**
   * The target account being created
   * @member {module:model/SubAccountCreateTargetAccount} targetAccount
   */
  exports.prototype['targetAccount'] = undefined;
  /**
   * The subscription info to create the account
   * @member {module:model/SubAccountCreateSubscriptionDetails} subscriptionDetails
   */
  exports.prototype['subscriptionDetails'] = undefined;
  /**
   * The create account work id.
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
   * @member {module:model/SubAccountCreateWorker.AssetGroupWorkTypeEnum} assetGroupWorkType
   */
  exports.prototype['assetGroupWorkType'] = undefined;
  /**
   * The account creation status.
   * @member {module:model/SubAccountCreateWorker.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The order id created by the creation work.
   * @member {String} orderId
   */
  exports.prototype['orderId'] = undefined;
  /**
   * The number of times the work has been attempted.
   * @member {Number} attempts
   */
  exports.prototype['attempts'] = undefined;
  /**
   * The date the account creation work is initiated.
   * @member {Date} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * The name of the initiator of the account creation work.
   * @member {String} createdByName
   */
  exports.prototype['createdByName'] = undefined;
  /**
   * The email of the creator of the account creation work.
   * @member {String} createdByEmail
   */
  exports.prototype['createdByEmail'] = undefined;
  /**
   * The message associated with the account creation work.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The processing failures if the work is in PendingError/ProcessingError status.
   * @member {module:model/SubAccountErrorDetails} createAccountProcessingFailureDetails
   */
  exports.prototype['createAccountProcessingFailureDetails'] = undefined;


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
    accountAssetCreate: "AccountAssetCreate",

    /**
     * value: "SubscriptionSync"
     * @const
     */
    subscriptionSync: "SubscriptionSync"
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
     * value: "ProcessingOnHold"
     * @const
     */
    processingOnHold: "ProcessingOnHold",

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


