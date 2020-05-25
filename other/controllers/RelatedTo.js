'use strict';

var utils = require('../utils/writer.js');
var RelatedTo = require('../service/RelatedToService');

module.exports.getEventsByActivityId = function getEventsByActivityId (req, res, next) {
  var activityId = req.swagger.params['activityId'].value;
  RelatedTo.getEventsByActivityId(activityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
