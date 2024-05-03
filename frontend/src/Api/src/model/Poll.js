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
 * The Poll model module.
 * @module model/Poll
 * @version 1.0.0
 */
export default class Poll {
  /**
   * Constructs a new <code>Poll</code>.
   * @alias module:model/Poll
   * @class
   * @param id {Number} 
   * @param session {Number} 
   */
  constructor(id, session) {
    this.id = id;
    this.session = session;
  }

  /**
   * Constructs a <code>Poll</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Poll} obj Optional instance to populate.
   * @return {module:model/Poll} The populated <code>Poll</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Poll();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('is_accepting_answers'))
        obj.is_accepting_answers = ApiClient.convertToType(data['is_accepting_answers'], 'Boolean');
      if (data.hasOwnProperty('session'))
        obj.session = ApiClient.convertToType(data['session'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Poll.prototype.id = undefined;

/**
 * @member {Boolean} is_accepting_answers
 */
Poll.prototype.is_accepting_answers = undefined;

/**
 * @member {Number} session
 */
Poll.prototype.session = undefined;

