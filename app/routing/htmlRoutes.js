//var express = require("express");
//var app = express();
var path = require("path");
//var router = express.Router();

module.exports = function(app){



  app.get("/", function(request, response) {

      response.sendFile(path.join(__dirname + "/../public/home.html"));
  });

  app.get("/survey", function(request, response) {

      response.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

}
