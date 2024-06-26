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
 * The PollSetAcceptingAnswers model module.
 * @module model/PollSetAcceptingAnswers
 * @version 1.0.0
 */
export default class PollSetAcceptingAnswers {
  /**
   * Constructs a new <code>PollSetAcceptingAnswers</code>.
   * @alias module:model/PollSetAcceptingAnswers
   * @class
   * @param poll {Number} 
   * @param is_accepting_answers {Boolean} 
   */
  constructor(poll, is_accepting_answers) {
    this.poll = poll;
    this.is_accepting_answers = is_accepting_answers;
  }

  /**
   * Constructs a <code>PollSetAcceptingAnswers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PollSetAcceptingAnswers} obj Optional instance to populate.
   * @return {module:model/PollSetAcceptingAnswers} The populated <code>PollSetAcceptingAnswers</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PollSetAcceptingAnswers();
      if (data.hasOwnProperty('poll'))
        obj.poll = ApiClient.convertToType(data['poll'], 'Number');
      if (data.hasOwnProperty('is_accepting_answers'))
        obj.is_accepting_answers = ApiClient.convertToType(data['is_accepting_answers'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Number} poll
 */
PollSetAcceptingAnswers.prototype.poll = undefined;

/**
 * @member {Boolean} is_accepting_answers
 */
PollSetAcceptingAnswers.prototype.is_accepting_answers = undefined;

