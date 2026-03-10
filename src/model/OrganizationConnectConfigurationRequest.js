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
    define(['ApiClient', 'model/ConnectEventData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConnectEventData'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.OrganizationConnectConfigurationRequest = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.ConnectEventData);
  }
}(this, function(ApiClient, ConnectEventData) {
  'use strict';


  /**
   * The OrganizationConnectConfigurationRequest model module.
   * @module model/OrganizationConnectConfigurationRequest
   */

  /**
   * Constructs a new <code>OrganizationConnectConfigurationRequest</code>.
   * @alias module:model/OrganizationConnectConfigurationRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OrganizationConnectConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationConnectConfigurationRequest} obj Optional instance to populate.
   * @return {module:model/OrganizationConnectConfigurationRequest} The populated <code>OrganizationConnectConfigurationRequest</code> instance.
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
      if (data.hasOwnProperty('allowEnvelopePublish')) {
        obj['allowEnvelopePublish'] = ApiClient.convertToType(data['allowEnvelopePublish'], 'String');
      }
      if (data.hasOwnProperty('urlToPublishTo')) {
        obj['urlToPublishTo'] = ApiClient.convertToType(data['urlToPublishTo'], 'String');
      }
      if (data.hasOwnProperty('deliveryMode')) {
        obj['deliveryMode'] = ApiClient.convertToType(data['deliveryMode'], 'String');
      }
      if (data.hasOwnProperty('events')) {
        obj['events'] = ApiClient.convertToType(data['events'], ['String']);
      }
      if (data.hasOwnProperty('associatedFilterSelection')) {
        obj['associatedFilterSelection'] = ApiClient.convertToType(data['associatedFilterSelection'], 'String');
      }
      if (data.hasOwnProperty('groupIds')) {
        obj['groupIds'] = ApiClient.convertToType(data['groupIds'], ['String']);
      }
      if (data.hasOwnProperty('accountIds')) {
        obj['accountIds'] = ApiClient.convertToType(data['accountIds'], ['String']);
      }
      if (data.hasOwnProperty('userIds')) {
        obj['userIds'] = ApiClient.convertToType(data['userIds'], ['String']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('signMessageWithX509Certificate')) {
        obj['signMessageWithX509Certificate'] = ApiClient.convertToType(data['signMessageWithX509Certificate'], 'String');
      }
      if (data.hasOwnProperty('includeOAuth')) {
        obj['includeOAuth'] = ApiClient.convertToType(data['includeOAuth'], 'String');
      }
      if (data.hasOwnProperty('includeHMAC')) {
        obj['includeHMAC'] = ApiClient.convertToType(data['includeHMAC'], 'String');
      }
      if (data.hasOwnProperty('pausePublish')) {
        obj['pausePublish'] = ApiClient.convertToType(data['pausePublish'], 'String');
      }
      if (data.hasOwnProperty('eventData')) {
        obj['eventData'] = ConnectEventData.constructFromObject(data['eventData']);
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
   * @member {String} allowEnvelopePublish
   */
  exports.prototype['allowEnvelopePublish'] = undefined;
  /**
   * @member {String} urlToPublishTo
   */
  exports.prototype['urlToPublishTo'] = undefined;
  /**
   * @member {String} deliveryMode
   */
  exports.prototype['deliveryMode'] = undefined;
  /**
   * @member {Array.<String>} events
   */
  exports.prototype['events'] = undefined;
  /**
   * @member {String} associatedFilterSelection
   */
  exports.prototype['associatedFilterSelection'] = undefined;
  /**
   * @member {Array.<String>} groupIds
   */
  exports.prototype['groupIds'] = undefined;
  /**
   * @member {Array.<String>} accountIds
   */
  exports.prototype['accountIds'] = undefined;
  /**
   * @member {Array.<String>} userIds
   */
  exports.prototype['userIds'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} signMessageWithX509Certificate
   */
  exports.prototype['signMessageWithX509Certificate'] = undefined;
  /**
   * @member {String} includeOAuth
   */
  exports.prototype['includeOAuth'] = undefined;
  /**
   * @member {String} includeHMAC
   */
  exports.prototype['includeHMAC'] = undefined;
  /**
   * @member {String} pausePublish
   */
  exports.prototype['pausePublish'] = undefined;
  /**
   * @member {module:model/ConnectEventData} eventData
   */
  exports.prototype['eventData'] = undefined;



  return exports;
}));


