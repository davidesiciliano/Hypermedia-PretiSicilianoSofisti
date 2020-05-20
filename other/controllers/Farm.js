'use strict';

var utils = require('../utils/writer.js');
var Farm = require('../service/FarmService');

module.exports.farmsGET = function farmsGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Farm.farmsGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFarmById = function getFarmById (req, res, next) {
  var farmId = req.swagger.params['farmId'].value;
  Farm.getFarmById(farmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
