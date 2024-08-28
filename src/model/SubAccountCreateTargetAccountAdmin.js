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
    root.DocusignAdmin.SubAccountCreateTargetAccountAdmin = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SubAccountCreateTargetAccountAdmin model module.
   * @module model/SubAccountCreateTargetAccountAdmin
   */

  /**
   * Constructs a new <code>SubAccountCreateTargetAccountAdmin</code>.
   * @alias module:model/SubAccountCreateTargetAccountAdmin
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubAccountCreateTargetAccountAdmin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountCreateTargetAccountAdmin} obj Optional instance to populate.
   * @return {module:model/SubAccountCreateTargetAccountAdmin} The populated <code>SubAccountCreateTargetAccountAdmin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
   * The email of the target account's admin user.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The first name of the target account's admin user.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * The last name of the target account's admin user.
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * The locale of the target account's admin user.
   * @member {module:model/SubAccountCreateTargetAccountAdmin.LocaleEnum} locale
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


