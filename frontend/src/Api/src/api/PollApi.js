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
import Answer from '../model/Answer';
import Poll from '../model/Poll';
import PollNextQuestion from '../model/PollNextQuestion';
import PollSetAcceptingAnswers from '../model/PollSetAcceptingAnswers';
import PollSubmitResponse from '../model/PollSubmitResponse';
import Response from '../model/Response';

/**
* Poll service.
* @module api/PollApi
* @version 1.0.0
*/
export default class PollApi {

    /**
    * Constructs a new PollApi. 
    * @alias module:api/PollApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {Number} poll_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Answer} and HTTP response
     */
    pollAnswerRetrieveWithHttpInfo(poll_id) {
      
      let postBody = null;
      // verify the required parameter 'poll_id' is set
      if (poll_id === undefined || poll_id === null) {
        throw new Error("Missing the required parameter 'poll_id' when calling pollAnswerRetrieve");
      }

      let pathParams = {
        'poll_id': poll_id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Answer;

      return this.apiClient.callApi(
        '/api/poll/{poll_id}/answer', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {<&vendorExtensions.x-jsdoc-type>} poll_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Answer}
     */
    pollAnswerRetrieve(poll_id) {
      return this.pollAnswerRetrieveWithHttpInfo(poll_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {module:model/PollNextQuestion} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Poll} and HTTP response
     */
    pollNextQuestionCreateWithHttpInfo(body) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pollNextQuestionCreate");
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
      let returnType = Poll;

      return this.apiClient.callApi(
        '/api/poll/next-question', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Poll}
     */
    pollNextQuestionCreate(body) {
      return this.pollNextQuestionCreateWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the poll with the provided poll_id.
     * @param {Number} poll_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Poll} and HTTP response
     */
    pollRetrieveWithHttpInfo(poll_id) {
      
      let postBody = null;
      // verify the required parameter 'poll_id' is set
      if (poll_id === undefined || poll_id === null) {
        throw new Error("Missing the required parameter 'poll_id' when calling pollRetrieve");
      }

      let pathParams = {
        'poll_id': poll_id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Poll;

      return this.apiClient.callApi(
        '/api/poll/{poll_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the poll with the provided poll_id.
     * @param {<&vendorExtensions.x-jsdoc-type>} poll_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Poll}
     */
    pollRetrieve(poll_id) {
      return this.pollRetrieveWithHttpInfo(poll_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the poll from the session with the provided session_id.
     * @param {Number} session_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Poll} and HTTP response
     */
    pollSessionRetrieveWithHttpInfo(session_id) {
      
      let postBody = null;
      // verify the required parameter 'session_id' is set
      if (session_id === undefined || session_id === null) {
        throw new Error("Missing the required parameter 'session_id' when calling pollSessionRetrieve");
      }

      let pathParams = {
        'session_id': session_id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Poll;

      return this.apiClient.callApi(
        '/api/poll/session/{session_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the poll from the session with the provided session_id.
     * @param {<&vendorExtensions.x-jsdoc-type>} session_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Poll}
     */
    pollSessionRetrieve(session_id) {
      return this.pollSessionRetrieveWithHttpInfo(session_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {module:model/PollSetAcceptingAnswers} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Poll} and HTTP response
     */
    pollSetAcceptingAnswerPartialUpdateWithHttpInfo(body) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pollSetAcceptingAnswerPartialUpdate");
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
      let returnType = Poll;

      return this.apiClient.callApi(
        '/api/poll/set-accepting-answer', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Poll}
     */
    pollSetAcceptingAnswerPartialUpdate(body) {
      return this.pollSetAcceptingAnswerPartialUpdateWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {module:model/PollSubmitResponse} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    pollSubmitResponseUpdateWithHttpInfo(body) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pollSubmitResponseUpdate");
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
      let returnType = Response;

      return this.apiClient.callApi(
        '/api/poll/submit-response', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    pollSubmitResponseUpdate(body) {
      return this.pollSubmitResponseUpdateWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}