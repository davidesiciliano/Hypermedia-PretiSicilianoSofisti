'use strict';

var utils = require('../utils/writer.js');
var HelpUsForm = require('../service/HelpUsFormService');

module.exports.helpUsFormPOST = function helpUsFormPOST (req, res, next) {
  var helpUsform = req.swagger.params['helpUsform'].value;
  HelpUsForm.helpUsFormPOST(helpUsform)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
