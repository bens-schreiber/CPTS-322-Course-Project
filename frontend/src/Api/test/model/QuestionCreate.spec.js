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

  describe('(package)', function() {
    describe('QuestionCreate', function() {
      beforeEach(function() {
        instance = new PollPalApi.QuestionCreate();
      });

      it('should create an instance of QuestionCreate', function() {
        // TODO: update the code to test QuestionCreate
        expect(instance).to.be.a(PollPalApi.QuestionCreate);
      });

      it('should have the property prompt (base name: "prompt")', function() {
        // TODO: update the code to test the property prompt
        expect(instance).to.have.property('prompt');
        // expect(instance.prompt).to.be(expectedValueLiteral);
      });

      it('should have the property answers (base name: "answers")', function() {
        // TODO: update the code to test the property answers
        expect(instance).to.have.property('answers');
        // expect(instance.answers).to.be(expectedValueLiteral);
      });

    });
  });

}));