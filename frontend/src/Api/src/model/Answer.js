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
 * The Answer model module.
 * @module model/Answer
 * @version 1.0.0
 */
export default class Answer {
  /**
   * Constructs a new <code>Answer</code>.
   * @alias module:model/Answer
   * @class
   * @param id {Number} 
   * @param question {Number} 
   */
  constructor(id, question) {
    this.id = id;
    this.question = question;
  }

  /**
   * Constructs a <code>Answer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Answer} obj Optional instance to populate.
   * @return {module:model/Answer} The populated <code>Answer</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Answer();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('answer'))
        obj.answer = ApiClient.convertToType(data['answer'], 'String');
      if (data.hasOwnProperty('is_correct'))
        obj.is_correct = ApiClient.convertToType(data['is_correct'], 'Boolean');
      if (data.hasOwnProperty('question'))
        obj.question = ApiClient.convertToType(data['question'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Answer.prototype.id = undefined;

/**
 * @member {String} answer
 */
Answer.prototype.answer = undefined;

/**
 * @member {Boolean} is_correct
 */
Answer.prototype.is_correct = undefined;

/**
 * @member {Number} question
 */
Answer.prototype.question = undefined;
