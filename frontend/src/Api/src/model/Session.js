/*
 * PollPal API
 * Your project description
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.55
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';

/**
 * The Session model module.
 * @module model/Session
 * @version 1.0.0
 */
export default class Session {
  /**
   * Constructs a new <code>Session</code>.
   * @alias module:model/Session
   * @class
   * @param label {String} 
   */
  constructor(label) {
    this.label = label;
  }

  /**
   * Constructs a <code>Session</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Session} obj Optional instance to populate.
   * @return {module:model/Session} The populated <code>Session</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Session();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Session.prototype.id = undefined;

/**
 * @member {String} label
 */
Session.prototype.label = undefined;

