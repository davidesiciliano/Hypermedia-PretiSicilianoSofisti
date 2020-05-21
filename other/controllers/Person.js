'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');

module.exports.getPersonById = function getPersonById (req, res, next) {
  var personId = req.swagger.params['personId'].value;
  Person.getPersonById(personId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPersonByRole = function getPersonByRole (req, res, next) {
  var personRole = req.swagger.params['personRole'].value;
  Person.getPersonByRole(personRole)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peopleGET = function peopleGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Person.peopleGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
