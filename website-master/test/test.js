'use strict';

var expect  = require("chai").expect;
var request = require("request");

  describe("All tabs work / ", function() {

    var dashBoardUrl = "http://localhost:8000/#/index/main";

    it("Dashboard is working", function() {
      request(dashBoardUrl, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });

	var leaderBoardUrl = "http://localhost:8000/#/index/minor";

	it("Leaderboard is working", function() {
      request(leaderBoardUrl, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });

    var calendarUrl = "http://localhost:8000/#/index/calendar";

	it("Calendar is working", function() {
      request(calendarUrl, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });



  });
