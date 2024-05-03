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
import ApiClient from "../ApiClient";
import Question from '../model/Question';
import QuestionCreate from '../model/QuestionCreate';

/**
* Question service.
* @module api/QuestionApi
* @version 1.0.0
*/
export default class QuestionApi {

    /**
    * Constructs a new QuestionApi. 
    * @alias module:api/QuestionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a question with the provided prompt and answers.
     * @param {module:model/QuestionCreate} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Question} and HTTP response
     */
    questionCreateCreateWithHttpInfo(body) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling questionCreateCreate");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Question;

      return this.apiClient.callApi(
        '/api/question/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a question with the provided prompt and answers.
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Question}
     */
    questionCreateCreate(body) {
      return this.questionCreateCreateWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}