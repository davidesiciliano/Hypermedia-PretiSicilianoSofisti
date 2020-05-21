'use strict';

var utils = require('../utils/writer.js');
var Activity = require('../service/ActivityService');

module.exports.activityGET = function activityGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Activity.activityGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActivityById = function getActivityById (req, res, next) {
  var activityId = req.swagger.params['activityId'].value;
  Activity.getActivityById(activityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActivityByName = function getActivityByName (req, res, next) {
  var activityName = req.swagger.params['activityName'].value;
  Activity.getActivityByName(activityName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
