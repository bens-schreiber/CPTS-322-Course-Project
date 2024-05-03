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
    describe('SessionStart', function() {
      beforeEach(function() {
        instance = new PollPalApi.SessionStart();
      });

      it('should create an instance of SessionStart', function() {
        // TODO: update the code to test SessionStart
        expect(instance).to.be.a(PollPalApi.SessionStart);
      });

      it('should have the property session (base name: "session")', function() {
        // TODO: update the code to test the property session
        expect(instance).to.have.property('session');
        // expect(instance.session).to.be(expectedValueLiteral);
      });

      it('should have the property question (base name: "question")', function() {
        // TODO: update the code to test the property question
        expect(instance).to.have.property('question');
        // expect(instance.question).to.be(expectedValueLiteral);
      });

    });
  });

}));
