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
    define(['ApiClient', 'model/AddressInformation', 'model/SubAccountCreateRequestSubAccountCreationTargetAccountAdmin'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressInformation'), require('./SubAccountCreateRequestSubAccountCreationTargetAccountAdmin'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.SubAccountCreateRequestSubAccountCreationTargetAccountDetails = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.AddressInformation, root.DocusignAdmin.SubAccountCreateRequestSubAccountCreationTargetAccountAdmin);
  }
}(this, function(ApiClient, AddressInformation, SubAccountCreateRequestSubAccountCreationTargetAccountAdmin) {
  'use strict';


  /**
   * The SubAccountCreateRequestSubAccountCreationTargetAccountDetails model module.
   * @module model/SubAccountCreateRequestSubAccountCreationTargetAccountDetails
   */

  /**
   * Constructs a new <code>SubAccountCreateRequestSubAccountCreationTargetAccountDetails</code>.
   * @alias module:model/SubAccountCreateRequestSubAccountCreationTargetAccountDetails
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubAccountCreateRequestSubAccountCreationTargetAccountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountCreateRequestSubAccountCreationTargetAccountDetails} obj Optional instance to populate.
   * @return {module:model/SubAccountCreateRequestSubAccountCreationTargetAccountDetails} The populated <code>SubAccountCreateRequestSubAccountCreationTargetAccountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = AddressInformation.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('admin')) {
        obj['admin'] = SubAccountCreateRequestSubAccountCreationTargetAccountAdmin.constructFromObject(data['admin']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = ApiClient.convertToType(data['region'], 'String');
      }
      if (data.hasOwnProperty('site')) {
        obj['site'] = ApiClient.convertToType(data['site'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/AddressInformation} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {module:model/SubAccountCreateRequestSubAccountCreationTargetAccountAdmin} admin
   */
  exports.prototype['admin'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * @member {String} region
   */
  exports.prototype['region'] = undefined;
  /**
   * @member {String} site
   */
  exports.prototype['site'] = undefined;



  return exports;
}));


