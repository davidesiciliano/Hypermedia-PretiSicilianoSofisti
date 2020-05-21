'use strict';


/**
 * Farm enrolled in the association
 * List of farms in the association
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.farmsGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "name" : "Rossi's Farm",
  "description" : "Farm managed by Rossi's Family",
  "openingTimes" : "7.00 - 14.00, 17.00 - 19.30",
  "FarmImg" : "Img0",
  "contactId" : 0
}, {
  "id" : 0,
  "name" : "Rossi's Farm",
  "description" : "Farm managed by Rossi's Family",
  "openingTimes" : "7.00 - 14.00, 17.00 - 19.30",
  "FarmImg" : "Img0",
  "contactId" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find farm by ID
 * Returns a farm
 *
 * farmId Long ID of farm to return
 * returns Farm
 **/
exports.getFarmById = function(farmId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "Rossi's Farm",
  "description" : "Farm managed by Rossi's Family",
  "openingTimes" : "7.00 - 14.00, 17.00 - 19.30",
  "FarmImg" : "Img0",
  "contactId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find farms by name
 * Return farms with the specified name
 *
 * farmName String Name of farms to return
 * returns Farm
 **/
exports.getFarmByName = function(farmName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "Rossi's Farm",
  "description" : "Farm managed by Rossi's Family",
  "openingTimes" : "7.00 - 14.00, 17.00 - 19.30",
  "FarmImg" : "Img0",
  "contactId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

