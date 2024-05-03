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
 * The PatchedPollSetAcceptingAnswersRequest model module.
 * @module model/PatchedPollSetAcceptingAnswersRequest
 * @version 1.0.0
 */
export default class PatchedPollSetAcceptingAnswersRequest {
  /**
   * Constructs a new <code>PatchedPollSetAcceptingAnswersRequest</code>.
   * @alias module:model/PatchedPollSetAcceptingAnswersRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PatchedPollSetAcceptingAnswersRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatchedPollSetAcceptingAnswersRequest} obj Optional instance to populate.
   * @return {module:model/PatchedPollSetAcceptingAnswersRequest} The populated <code>PatchedPollSetAcceptingAnswersRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PatchedPollSetAcceptingAnswersRequest();
      if (data.hasOwnProperty('poll'))
        obj.poll = ApiClient.convertToType(data['poll'], 'Number');
      if (data.hasOwnProperty('is_accepting_answers'))
        obj.isAcceptingAnswers = ApiClient.convertToType(data['is_accepting_answers'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Number} poll
 */
PatchedPollSetAcceptingAnswersRequest.prototype.poll = undefined;

/**
 * @member {Boolean} isAcceptingAnswers
 */
PatchedPollSetAcceptingAnswersRequest.prototype.isAcceptingAnswers = undefined;

