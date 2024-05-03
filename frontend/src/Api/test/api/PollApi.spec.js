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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PollPalApi);
  }
}(this, function(expect, PollPalApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PollPalApi.PollApi();
  });

  describe('(package)', function() {
    describe('PollApi', function() {
      describe('pollAnswerRetrieve', function() {
        it('should call pollAnswerRetrieve successfully', function(done) {
          // TODO: uncomment, update parameter values for pollAnswerRetrieve call
          /*

          instance.pollAnswerRetrieve(pollId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('pollNextQuestionCreate', function() {
        it('should call pollNextQuestionCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for pollNextQuestionCreate call and complete the assertions
          /*

          instance.pollNextQuestionCreate(body, poll, question, poll, question, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PollPalApi.PollNextQuestion);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('pollSetAcceptingAnswerPartialUpdate', function() {
        it('should call pollSetAcceptingAnswerPartialUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for pollSetAcceptingAnswerPartialUpdate call and complete the assertions
          /*
          var opts = {};

          instance.pollSetAcceptingAnswerPartialUpdate(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PollPalApi.PollSetAcceptingAnswers);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('pollSubmitResponseUpdate', function() {
        it('should call pollSubmitResponseUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for pollSubmitResponseUpdate call and complete the assertions
          /*

          instance.pollSubmitResponseUpdate(body, poll, answer, poll, answer, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PollPalApi.PollSubmitResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));