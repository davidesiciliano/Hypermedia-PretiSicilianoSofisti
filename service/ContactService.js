'use strict';


/**
 * Contact of Person or Farm
 * List of contacts
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.contactGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "email" : "davide@siciliano.it",
  "phoneNumber" : "12345"
}, {
  "id" : 0,
  "email" : "davide@siciliano.it",
  "phoneNumber" : "12345"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find contact by ID
 * Returns a contact
 *
 * contactId Long ID of contact to return
 * returns Contact
 **/
exports.getContactById = function(contactId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "email" : "davide@siciliano.it",
  "phoneNumber" : "12345"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

