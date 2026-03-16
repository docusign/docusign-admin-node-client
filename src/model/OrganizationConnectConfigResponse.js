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
    root.DocusignAdmin.OrganizationConnectConfigResponse = factory(root.DocusignAdmin.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The OrganizationConnectConfigResponse model module.
   * @module model/OrganizationConnectConfigResponse
   */

  /**
   * Constructs a new <code>OrganizationConnectConfigResponse</code>.
   * @alias module:model/OrganizationConnectConfigResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OrganizationConnectConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationConnectConfigResponse} obj Optional instance to populate.
   * @return {module:model/OrganizationConnectConfigResponse} The populated <code>OrganizationConnectConfigResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('connectId')) {
        obj['connectId'] = ApiClient.convertToType(data['connectId'], 'String');
      }
      if (data.hasOwnProperty('configurationType')) {
        obj['configurationType'] = ApiClient.convertToType(data['configurationType'], 'String');
      }
      if (data.hasOwnProperty('disabledBy')) {
        obj['disabledBy'] = ApiClient.convertToType(data['disabledBy'], 'String');
      }
      if (data.hasOwnProperty('allowSalesforcePublish')) {
        obj['allowSalesforcePublish'] = ApiClient.convertToType(data['allowSalesforcePublish'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('allowEnvelopePublish')) {
        obj['allowEnvelopePublish'] = ApiClient.convertToType(data['allowEnvelopePublish'], 'String');
      }
      if (data.hasOwnProperty('siteId')) {
        obj['siteId'] = ApiClient.convertToType(data['siteId'], 'Number');
      }
      if (data.hasOwnProperty('pausePublish')) {
        obj['pausePublish'] = ApiClient.convertToType(data['pausePublish'], 'String');
      }
      if (data.hasOwnProperty('requiresAcknowledgement')) {
        obj['requiresAcknowledgement'] = ApiClient.convertToType(data['requiresAcknowledgement'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} connectId
   */
  exports.prototype['connectId'] = undefined;
  /**
   * @member {String} configurationType
   */
  exports.prototype['configurationType'] = undefined;
  /**
   * @member {String} disabledBy
   */
  exports.prototype['disabledBy'] = undefined;
  /**
   * @member {String} allowSalesforcePublish
   */
  exports.prototype['allowSalesforcePublish'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * @member {String} allowEnvelopePublish
   */
  exports.prototype['allowEnvelopePublish'] = undefined;
  /**
   * @member {Number} siteId
   */
  exports.prototype['siteId'] = undefined;
  /**
   * @member {String} pausePublish
   */
  exports.prototype['pausePublish'] = undefined;
  /**
   * @member {String} requiresAcknowledgement
   */
  exports.prototype['requiresAcknowledgement'] = undefined;



  return exports;
}));


