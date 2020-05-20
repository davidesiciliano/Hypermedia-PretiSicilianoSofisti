'use strict';


/**
 * Activities of the association
 * List of activities offered by association
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.activityGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "name" : "Harvest",
  "description" : "Harvest description",
  "startDate" : "2020-07-01",
  "endDate" : "2020-09-30",
  "activityImg" : "img1"
}, {
  "id" : 0,
  "name" : "Harvest",
  "description" : "Harvest description",
  "startDate" : "2020-07-01",
  "endDate" : "2020-09-30",
  "activityImg" : "img1"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find activity by ID
 * Returns an activity
 *
 * activityId Long ID of activity to return
 * returns Activity
 **/
exports.getActivityById = function(activityId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "Harvest",
  "description" : "Harvest description",
  "startDate" : "2020-07-01",
  "endDate" : "2020-09-30",
  "activityImg" : "img1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

