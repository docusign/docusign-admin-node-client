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
    define(['ApiClient', 'model/DocuSignAccountDomainModelAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocuSignAccountDomainModelAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.SubscriptionProvisionModelAccountCreateAccountAdmin = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.DocuSignAccountDomainModelAddress);
  }
}(this, function(ApiClient, DocuSignAccountDomainModelAddress) {
  'use strict';


  /**
   * The SubscriptionProvisionModelAccountCreateAccountAdmin model module.
   * @module model/SubscriptionProvisionModelAccountCreateAccountAdmin
   */

  /**
   * Constructs a new <code>SubscriptionProvisionModelAccountCreateAccountAdmin</code>.
   * @alias module:model/SubscriptionProvisionModelAccountCreateAccountAdmin
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubscriptionProvisionModelAccountCreateAccountAdmin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionProvisionModelAccountCreateAccountAdmin} obj Optional instance to populate.
   * @return {module:model/SubscriptionProvisionModelAccountCreateAccountAdmin} The populated <code>SubscriptionProvisionModelAccountCreateAccountAdmin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('EmailAddress')) {
        obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('Locale')) {
        obj['Locale'] = ApiClient.convertToType(data['Locale'], 'String');
      }
      if (data.hasOwnProperty('Address')) {
        obj['Address'] = DocuSignAccountDomainModelAddress.constructFromObject(data['Address']);
      }
    }
    return obj;
  }

  /**
   * @member {String} EmailAddress
   */
  exports.prototype['EmailAddress'] = undefined;
  /**
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * @member {module:model/SubscriptionProvisionModelAccountCreateAccountAdmin.LocaleEnum} Locale
   */
  exports.prototype['Locale'] = undefined;
  /**
   * @member {module:model/DocuSignAccountDomainModelAddress} Address
   */
  exports.prototype['Address'] = undefined;


  /**
   * Allowed values for the <code>locale</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocaleEnum = {
    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "zh_cn"
     * @const
     */
    zhCn: "zh_cn",

    /**
     * value: "zh_tw"
     * @const
     */
    zhTw: "zh_tw",

    /**
     * value: "nl"
     * @const
     */
    nl: "nl",

    /**
     * value: "en"
     * @const
     */
    en: "en",

    /**
     * value: "fr"
     * @const
     */
    fr: "fr",

    /**
     * value: "de"
     * @const
     */
    de: "de",

    /**
     * value: "it"
     * @const
     */
    it: "it",

    /**
     * value: "ja"
     * @const
     */
    ja: "ja",

    /**
     * value: "ko"
     * @const
     */
    ko: "ko",

    /**
     * value: "pt"
     * @const
     */
    pt: "pt",

    /**
     * value: "pt_br"
     * @const
     */
    ptBr: "pt_br",

    /**
     * value: "ru"
     * @const
     */
    ru: "ru",

    /**
     * value: "es"
     * @const
     */
    es: "es",

    /**
     * value: "pl"
     * @const
     */
    pl: "pl"
  };


  return exports;
}));


