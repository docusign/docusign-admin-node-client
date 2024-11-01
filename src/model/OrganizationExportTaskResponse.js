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
    define(['ApiClient', 'model/OETRErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OETRErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignAdmin) {
      root.DocusignAdmin = {};
    }
    root.DocusignAdmin.OrganizationExportTaskResponse = factory(root.DocusignAdmin.ApiClient, root.DocusignAdmin.OETRErrorDetails);
  }
}(this, function(ApiClient, OETRErrorDetails) {
  'use strict';


  /**
   * The OrganizationExportTaskResponse model module.
   * @module model/OrganizationExportTaskResponse
   */

  /**
   * Constructs a new <code>OrganizationExportTaskResponse</code>.
   * @alias module:model/OrganizationExportTaskResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OrganizationExportTaskResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationExportTaskResponse} obj Optional instance to populate.
   * @return {module:model/OrganizationExportTaskResponse} The populated <code>OrganizationExportTaskResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('site_id')) {
        obj['site_id'] = ApiClient.convertToType(data['site_id'], 'Number');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('number_rows')) {
        obj['number_rows'] = ApiClient.convertToType(data['number_rows'], 'Number');
      }
      if (data.hasOwnProperty('size_bytes')) {
        obj['size_bytes'] = ApiClient.convertToType(data['size_bytes'], 'Number');
      }
      if (data.hasOwnProperty('error_details')) {
        obj['error_details'] = OETRErrorDetails.constructFromObject(data['error_details']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} site_id
   */
  exports.prototype['site_id'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {Number} number_rows
   */
  exports.prototype['number_rows'] = undefined;
  /**
   * @member {Number} size_bytes
   */
  exports.prototype['size_bytes'] = undefined;
  /**
   * @member {module:model/OETRErrorDetails} error_details
   */
  exports.prototype['error_details'] = undefined;



  return exports;
}));


