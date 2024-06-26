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
 * The SessionStart model module.
 * @module model/SessionStart
 * @version 1.0.0
 */
export default class SessionStart {
  /**
   * Constructs a new <code>SessionStart</code>.
   * @alias module:model/SessionStart
   * @class
   * @param session {Number} 
   * @param question {Number} 
   */
  constructor(session, question) {
    this.session = session;
    this.question = question;
  }

  /**
   * Constructs a <code>SessionStart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SessionStart} obj Optional instance to populate.
   * @return {module:model/SessionStart} The populated <code>SessionStart</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SessionStart();
      if (data.hasOwnProperty('session'))
        obj.session = ApiClient.convertToType(data['session'], 'Number');
      if (data.hasOwnProperty('question'))
        obj.question = ApiClient.convertToType(data['question'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} session
 */
SessionStart.prototype.session = undefined;

/**
 * @member {Number} question
 */
SessionStart.prototype.question = undefined;

