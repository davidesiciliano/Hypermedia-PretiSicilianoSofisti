'use strict';

var utils = require('../utils/writer.js');
var Contact = require('../service/ContactService');

module.exports.getContactById = function getContactById (req, res, next) {
  var contactId = req.swagger.params['contactId'].value;
  Contact.getContactById(contactId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
