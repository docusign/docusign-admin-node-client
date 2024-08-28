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
    define(['ApiClient', 'model/DocuSignAccountDomainModelAddress', 'model/SubscriptionProvisionModelAccountCreateAccountAdmin', 'model/SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocuSignAccountDomainModelAddress'), require('./SubscriptionProvisionModelAccountCreateAccountAdmin'), require('./SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.SubscriptionProvisionModelAccountCreateCreateSubAccountDetails = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.DocuSignAccountDomainModelAddress, root.DocusignAdmin.SubscriptionProvisionModelAccountCreateAccountAdmin, root.DocusignAdmin.SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails);
  }
}(this, function(ApiClient, DocuSignAccountDomainModelAddress, SubscriptionProvisionModelAccountCreateAccountAdmin, SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails) {
  'use strict';


  /**
   * The SubscriptionProvisionModelAccountCreateCreateSubAccountDetails model module.
   * @module model/SubscriptionProvisionModelAccountCreateCreateSubAccountDetails
   */

  /**
   * Constructs a new <code>SubscriptionProvisionModelAccountCreateCreateSubAccountDetails</code>.
   * @alias module:model/SubscriptionProvisionModelAccountCreateCreateSubAccountDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubscriptionProvisionModelAccountCreateCreateSubAccountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionProvisionModelAccountCreateCreateSubAccountDetails} obj Optional instance to populate.
   * @return {module:model/SubscriptionProvisionModelAccountCreateCreateSubAccountDetails} The populated <code>SubscriptionProvisionModelAccountCreateCreateSubAccountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SubscriptionDetails')) {
        obj['SubscriptionDetails'] = SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails.constructFromObject(data['SubscriptionDetails']);
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('CountryCode')) {
        obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
      }
      if (data.hasOwnProperty('Region')) {
        obj['Region'] = ApiClient.convertToType(data['Region'], 'String');
      }
      if (data.hasOwnProperty('Site')) {
        obj['Site'] = ApiClient.convertToType(data['Site'], 'String');
      }
      if (data.hasOwnProperty('Address')) {
        obj['Address'] = DocuSignAccountDomainModelAddress.constructFromObject(data['Address']);
      }
      if (data.hasOwnProperty('AdminUser')) {
        obj['AdminUser'] = SubscriptionProvisionModelAccountCreateAccountAdmin.constructFromObject(data['AdminUser']);
      }
      if (data.hasOwnProperty('BillingProfileType')) {
        obj['BillingProfileType'] = ApiClient.convertToType(data['BillingProfileType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SubscriptionProvisionModelAccountCreateCreateAccountSubscriptionDetails} SubscriptionDetails
   */
  exports.prototype['SubscriptionDetails'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} CountryCode
   */
  exports.prototype['CountryCode'] = undefined;
  /**
   * @member {String} Region
   */
  exports.prototype['Region'] = undefined;
  /**
   * @member {String} Site
   */
  exports.prototype['Site'] = undefined;
  /**
   * @member {module:model/DocuSignAccountDomainModelAddress} Address
   */
  exports.prototype['Address'] = undefined;
  /**
   * @member {module:model/SubscriptionProvisionModelAccountCreateAccountAdmin} AdminUser
   */
  exports.prototype['AdminUser'] = undefined;
  /**
   * @member {module:model/SubscriptionProvisionModelAccountCreateCreateSubAccountDetails.BillingProfileTypeEnum} BillingProfileType
   */
  exports.prototype['BillingProfileType'] = undefined;


  /**
   * Allowed values for the <code>billingProfileType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BillingProfileTypeEnum = {
    /**
     * value: "Web"
     * @const
     */
    web: "Web",

    /**
     * value: "Direct"
     * @const
     */
    direct: "Direct"
  };


  return exports;
}));


