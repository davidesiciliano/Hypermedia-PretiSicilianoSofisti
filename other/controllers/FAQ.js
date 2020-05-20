'use strict';

var utils = require('../utils/writer.js');
var FAQ = require('../service/FAQService');

module.exports.faqGET = function faqGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  FAQ.faqGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
