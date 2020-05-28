'use strict';

var utils = require('../utils/writer.js');
var Offers = require('../service/OffersService');

module.exports.getActivitiesByFarmId = function getActivitiesByFarmId (req, res, next) {
  var farmId = req.swagger.params['farmId'].value;
  Offers.getActivitiesByFarmId(farmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFarmsByActivityId = function getFarmsByActivityId (req, res, next) {
  var activityId = req.swagger.params['activityId'].value;
  Offers.getFarmsByActivityId(activityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
