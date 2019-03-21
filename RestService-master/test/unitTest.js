'use strict';

var expect  = require("chai").expect;
var request = require("request");

  describe("All tabs work / ", function() {

    var dashBoardUrl = "http://localhost/";

    it("Rest API is working", function() {
      request(dashBoardUrl, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });




  });
