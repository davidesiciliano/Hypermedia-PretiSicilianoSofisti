'use strict';

var utils = require('../utils/writer.js');
var IsInvolvedIn = require('../service/IsInvolvedInService');

module.exports.getPeopleByActivityId = function getPeopleByActivityId (req, res, next) {
  var activityId = req.swagger.params['activityId'].value;
  IsInvolvedIn.getPeopleByActivityId(activityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
