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
    root.DocusignAdmin.DocuSignAccountDomainModelAddress = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DocuSignAccountDomainModelAddress model module.
   * @module model/DocuSignAccountDomainModelAddress
   */

  /**
   * Constructs a new <code>DocuSignAccountDomainModelAddress</code>.
   * @alias module:model/DocuSignAccountDomainModelAddress
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocuSignAccountDomainModelAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocuSignAccountDomainModelAddress} obj Optional instance to populate.
   * @return {module:model/DocuSignAccountDomainModelAddress} The populated <code>DocuSignAccountDomainModelAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Address1')) {
        obj['Address1'] = ApiClient.convertToType(data['Address1'], 'String');
      }
      if (data.hasOwnProperty('Address2')) {
        obj['Address2'] = ApiClient.convertToType(data['Address2'], 'String');
      }
      if (data.hasOwnProperty('City')) {
        obj['City'] = ApiClient.convertToType(data['City'], 'String');
      }
      if (data.hasOwnProperty('StateProvince')) {
        obj['StateProvince'] = ApiClient.convertToType(data['StateProvince'], 'String');
      }
      if (data.hasOwnProperty('Country')) {
        obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
      }
      if (data.hasOwnProperty('PostalCode')) {
        obj['PostalCode'] = ApiClient.convertToType(data['PostalCode'], 'String');
      }
      if (data.hasOwnProperty('Phone')) {
        obj['Phone'] = ApiClient.convertToType(data['Phone'], 'String');
      }
      if (data.hasOwnProperty('Fax')) {
        obj['Fax'] = ApiClient.convertToType(data['Fax'], 'String');
      }
      if (data.hasOwnProperty('ZipPlus4')) {
        obj['ZipPlus4'] = ApiClient.convertToType(data['ZipPlus4'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Address1
   */
  exports.prototype['Address1'] = undefined;
  /**
   * @member {String} Address2
   */
  exports.prototype['Address2'] = undefined;
  /**
   * @member {String} City
   */
  exports.prototype['City'] = undefined;
  /**
   * @member {String} StateProvince
   */
  exports.prototype['StateProvince'] = undefined;
  /**
   * @member {String} Country
   */
  exports.prototype['Country'] = undefined;
  /**
   * @member {String} PostalCode
   */
  exports.prototype['PostalCode'] = undefined;
  /**
   * @member {String} Phone
   */
  exports.prototype['Phone'] = undefined;
  /**
   * @member {String} Fax
   */
  exports.prototype['Fax'] = undefined;
  /**
   * @member {String} ZipPlus4
   */
  exports.prototype['ZipPlus4'] = undefined;



  return exports;
}));


