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
    define(['ApiClient', 'model/SubscriptionProvisionModelAccountCreateCreateAccountDetails', 'model/SubscriptionProvisionModelAccountCreateCreateSubAccountDetails', 'model/SubscriptionProvisionModelChangeEvent', 'model/SubscriptionProvisionModelServiceErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubscriptionProvisionModelAccountCreateCreateAccountDetails'), require('./SubscriptionProvisionModelAccountCreateCreateSubAccountDetails'), require('./SubscriptionProvisionModelChangeEvent'), require('./SubscriptionProvisionModelServiceErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.SubscriptionProvisionModelAssetGroupWork = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.SubscriptionProvisionModelAccountCreateCreateAccountDetails, root.DocusignAdmin.SubscriptionProvisionModelAccountCreateCreateSubAccountDetails, root.DocusignAdmin.SubscriptionProvisionModelChangeEvent, root.DocusignAdmin.SubscriptionProvisionModelServiceErrorDetails);
  }
}(this, function(ApiClient, SubscriptionProvisionModelAccountCreateCreateAccountDetails, SubscriptionProvisionModelAccountCreateCreateSubAccountDetails, SubscriptionProvisionModelChangeEvent, SubscriptionProvisionModelServiceErrorDetails) {
  'use strict';


  /**
   * The SubscriptionProvisionModelAssetGroupWork model module.
   * @module model/SubscriptionProvisionModelAssetGroupWork
   */

  /**
   * Constructs a new <code>SubscriptionProvisionModelAssetGroupWork</code>.
   * @alias module:model/SubscriptionProvisionModelAssetGroupWork
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubscriptionProvisionModelAssetGroupWork</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionProvisionModelAssetGroupWork} obj Optional instance to populate.
   * @return {module:model/SubscriptionProvisionModelAssetGroupWork} The populated <code>SubscriptionProvisionModelAssetGroupWork</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AssetGroupWorkId')) {
        obj['AssetGroupWorkId'] = ApiClient.convertToType(data['AssetGroupWorkId'], 'String');
      }
      if (data.hasOwnProperty('AssetGroupId')) {
        obj['AssetGroupId'] = ApiClient.convertToType(data['AssetGroupId'], 'String');
      }
      if (data.hasOwnProperty('AssetGroupWorkType')) {
        obj['AssetGroupWorkType'] = ApiClient.convertToType(data['AssetGroupWorkType'], 'String');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('OrderId')) {
        obj['OrderId'] = ApiClient.convertToType(data['OrderId'], 'String');
      }
      if (data.hasOwnProperty('TargetAccountId')) {
        obj['TargetAccountId'] = ApiClient.convertToType(data['TargetAccountId'], 'String');
      }
      if (data.hasOwnProperty('SourceAccountId')) {
        obj['SourceAccountId'] = ApiClient.convertToType(data['SourceAccountId'], 'String');
      }
      if (data.hasOwnProperty('SourceAccountExternalId')) {
        obj['SourceAccountExternalId'] = ApiClient.convertToType(data['SourceAccountExternalId'], 'Number');
      }
      if (data.hasOwnProperty('SourceAccountName')) {
        obj['SourceAccountName'] = ApiClient.convertToType(data['SourceAccountName'], 'String');
      }
      if (data.hasOwnProperty('SourceAccountSite')) {
        obj['SourceAccountSite'] = ApiClient.convertToType(data['SourceAccountSite'], 'String');
      }
      if (data.hasOwnProperty('CloneRequestId')) {
        obj['CloneRequestId'] = ApiClient.convertToType(data['CloneRequestId'], 'String');
      }
      if (data.hasOwnProperty('CloneAccountDetails')) {
        obj['CloneAccountDetails'] = SubscriptionProvisionModelAccountCreateCreateAccountDetails.constructFromObject(data['CloneAccountDetails']);
      }
      if (data.hasOwnProperty('CreateSubAccountDetails')) {
        obj['CreateSubAccountDetails'] = SubscriptionProvisionModelAccountCreateCreateSubAccountDetails.constructFromObject(data['CreateSubAccountDetails']);
      }
      if (data.hasOwnProperty('Attempts')) {
        obj['Attempts'] = ApiClient.convertToType(data['Attempts'], 'Number');
      }
      if (data.hasOwnProperty('RetryOn')) {
        obj['RetryOn'] = ApiClient.convertToType(data['RetryOn'], 'Date');
      }
      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
      if (data.hasOwnProperty('CreatedByName')) {
        obj['CreatedByName'] = ApiClient.convertToType(data['CreatedByName'], 'String');
      }
      if (data.hasOwnProperty('CreatedByEmail')) {
        obj['CreatedByEmail'] = ApiClient.convertToType(data['CreatedByEmail'], 'String');
      }
      if (data.hasOwnProperty('ErrorDetails')) {
        obj['ErrorDetails'] = SubscriptionProvisionModelServiceErrorDetails.constructFromObject(data['ErrorDetails']);
      }
      if (data.hasOwnProperty('OldAssetGroupSubscriptionId')) {
        obj['OldAssetGroupSubscriptionId'] = ApiClient.convertToType(data['OldAssetGroupSubscriptionId'], 'String');
      }
      if (data.hasOwnProperty('NewAssetGroupSubscriptionId')) {
        obj['NewAssetGroupSubscriptionId'] = ApiClient.convertToType(data['NewAssetGroupSubscriptionId'], 'String');
      }
      if (data.hasOwnProperty('SourceSystem')) {
        obj['SourceSystem'] = ApiClient.convertToType(data['SourceSystem'], 'String');
      }
      if (data.hasOwnProperty('SourceId')) {
        obj['SourceId'] = ApiClient.convertToType(data['SourceId'], 'String');
      }
      if (data.hasOwnProperty('CreatedBy')) {
        obj['CreatedBy'] = ApiClient.convertToType(data['CreatedBy'], 'String');
      }
      if (data.hasOwnProperty('CreatedByType')) {
        obj['CreatedByType'] = ApiClient.convertToType(data['CreatedByType'], 'Number');
      }
      if (data.hasOwnProperty('CreatedDate')) {
        obj['CreatedDate'] = ApiClient.convertToType(data['CreatedDate'], 'Date');
      }
      if (data.hasOwnProperty('UpdatedBy')) {
        obj['UpdatedBy'] = ApiClient.convertToType(data['UpdatedBy'], 'String');
      }
      if (data.hasOwnProperty('UpdatedByType')) {
        obj['UpdatedByType'] = ApiClient.convertToType(data['UpdatedByType'], 'Number');
      }
      if (data.hasOwnProperty('UpdatedDate')) {
        obj['UpdatedDate'] = ApiClient.convertToType(data['UpdatedDate'], 'Date');
      }
      if (data.hasOwnProperty('UpdateHistory')) {
        obj['UpdateHistory'] = ApiClient.convertToType(data['UpdateHistory'], [SubscriptionProvisionModelChangeEvent]);
      }
    }
    return obj;
  }

  /**
   * @member {String} AssetGroupWorkId
   */
  exports.prototype['AssetGroupWorkId'] = undefined;
  /**
   * @member {String} AssetGroupId
   */
  exports.prototype['AssetGroupId'] = undefined;
  /**
   * @member {module:model/SubscriptionProvisionModelAssetGroupWork.AssetGroupWorkTypeEnum} AssetGroupWorkType
   */
  exports.prototype['AssetGroupWorkType'] = undefined;
  /**
   * @member {module:model/SubscriptionProvisionModelAssetGroupWork.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {String} OrderId
   */
  exports.prototype['OrderId'] = undefined;
  /**
   * @member {String} TargetAccountId
   */
  exports.prototype['TargetAccountId'] = undefined;
  /**
   * @member {String} SourceAccountId
   */
  exports.prototype['SourceAccountId'] = undefined;
  /**
   * @member {Number} SourceAccountExternalId
   */
  exports.prototype['SourceAccountExternalId'] = undefined;
  /**
   * @member {String} SourceAccountName
   */
  exports.prototype['SourceAccountName'] = undefined;
  /**
   * @member {String} SourceAccountSite
   */
  exports.prototype['SourceAccountSite'] = undefined;
  /**
   * @member {String} CloneRequestId
   */
  exports.prototype['CloneRequestId'] = undefined;
  /**
   * @member {module:model/SubscriptionProvisionModelAccountCreateCreateAccountDetails} CloneAccountDetails
   */
  exports.prototype['CloneAccountDetails'] = undefined;
  /**
   * @member {module:model/SubscriptionProvisionModelAccountCreateCreateSubAccountDetails} CreateSubAccountDetails
   */
  exports.prototype['CreateSubAccountDetails'] = undefined;
  /**
   * @member {Number} Attempts
   */
  exports.prototype['Attempts'] = undefined;
  /**
   * @member {Date} RetryOn
   */
  exports.prototype['RetryOn'] = undefined;
  /**
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;
  /**
   * @member {String} CreatedByName
   */
  exports.prototype['CreatedByName'] = undefined;
  /**
   * @member {String} CreatedByEmail
   */
  exports.prototype['CreatedByEmail'] = undefined;
  /**
   * @member {module:model/SubscriptionProvisionModelServiceErrorDetails} ErrorDetails
   */
  exports.prototype['ErrorDetails'] = undefined;
  /**
   * @member {String} OldAssetGroupSubscriptionId
   */
  exports.prototype['OldAssetGroupSubscriptionId'] = undefined;
  /**
   * @member {String} NewAssetGroupSubscriptionId
   */
  exports.prototype['NewAssetGroupSubscriptionId'] = undefined;
  /**
   * @member {String} SourceSystem
   */
  exports.prototype['SourceSystem'] = undefined;
  /**
   * @member {String} SourceId
   */
  exports.prototype['SourceId'] = undefined;
  /**
   * @member {String} CreatedBy
   */
  exports.prototype['CreatedBy'] = undefined;
  /**
   * 0 stands for Application, 1 stands for User, 2 stands for Generic, 3 stands for RestAPIAuth, 4 stands for Resource, 5 stands for Restricted
   * @member {module:model/SubscriptionProvisionModelAssetGroupWork.CreatedByTypeEnum} CreatedByType
   */
  exports.prototype['CreatedByType'] = undefined;
  /**
   * @member {Date} CreatedDate
   */
  exports.prototype['CreatedDate'] = undefined;
  /**
   * @member {String} UpdatedBy
   */
  exports.prototype['UpdatedBy'] = undefined;
  /**
   * 0 stands for Application, 1 stands for User, 2 stands for Generic, 3 stands for RestAPIAuth, 4 stands for Resource, 5 stands for Restricted
   * @member {module:model/SubscriptionProvisionModelAssetGroupWork.UpdatedByTypeEnum} UpdatedByType
   */
  exports.prototype['UpdatedByType'] = undefined;
  /**
   * @member {Date} UpdatedDate
   */
  exports.prototype['UpdatedDate'] = undefined;
  /**
   * @member {Array.<module:model/SubscriptionProvisionModelChangeEvent>} UpdateHistory
   */
  exports.prototype['UpdateHistory'] = undefined;


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

  /**
   * Allowed values for the <code>createdByType</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.CreatedByTypeEnum = {
    /**
     * value: 0
     * @const
     */
    _0: 0,

    /**
     * value: 1
     * @const
     */
    _1: 1,

    /**
     * value: 2
     * @const
     */
    _2: 2,

    /**
     * value: 3
     * @const
     */
    _3: 3,

    /**
     * value: 4
     * @const
     */
    _4: 4,

    /**
     * value: 5
     * @const
     */
    _5: 5
  };

  /**
   * Allowed values for the <code>updatedByType</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.UpdatedByTypeEnum = {
    /**
     * value: 0
     * @const
     */
    _0: 0,

    /**
     * value: 1
     * @const
     */
    _1: 1,

    /**
     * value: 2
     * @const
     */
    _2: 2,

    /**
     * value: 3
     * @const
     */
    _3: 3,

    /**
     * value: 4
     * @const
     */
    _4: 4,

    /**
     * value: 5
     * @const
     */
    _5: 5
  };


  return exports;
}));


