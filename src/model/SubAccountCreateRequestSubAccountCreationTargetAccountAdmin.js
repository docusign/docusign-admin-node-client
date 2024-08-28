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
    define(['ApiClient', 'model/AddressInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.SubAccountCreateRequestSubAccountCreationTargetAccountAdmin = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.AddressInformation);
  }
}(this, function(ApiClient, AddressInformation) {
  'use strict';


  /**
   * The SubAccountCreateRequestSubAccountCreationTargetAccountAdmin model module.
   * @module model/SubAccountCreateRequestSubAccountCreationTargetAccountAdmin
   */

  /**
   * Constructs a new <code>SubAccountCreateRequestSubAccountCreationTargetAccountAdmin</code>.
   * @alias module:model/SubAccountCreateRequestSubAccountCreationTargetAccountAdmin
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubAccountCreateRequestSubAccountCreationTargetAccountAdmin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountCreateRequestSubAccountCreationTargetAccountAdmin} obj Optional instance to populate.
   * @return {module:model/SubAccountCreateRequestSubAccountCreationTargetAccountAdmin} The populated <code>SubAccountCreateRequestSubAccountCreationTargetAccountAdmin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = AddressInformation.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AddressInformation} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {module:model/SubAccountCreateRequestSubAccountCreationTargetAccountAdmin.LocaleEnum} locale
   */
  exports.prototype['locale'] = undefined;


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


