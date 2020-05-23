'use strict';

let Activity = require("../models/Activity");

let sqlDb;

exports.activityDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the activity table exists");
  return sqlDb.schema.hasTable(Activity.getTable)
    .then((exists) => {
      if (!exists) {
        console.log("Id does not exist so create it");
        return sqlDb.schema.createTable(Activity.getTable, tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer(Activity.id);
          tableBuilder.text(Activity.name);
          tableBuilder.text(Activity.description);
          tableBuilder.text(Activity.startDate);
          tableBuilder.text(Activity.endDate);
          tableBuilder.text(Activity.activityImg);
        });
      } else {
        console.log("Table already exists");
      }
    }).catch(error => console.log(error));
};

/**
 * Activities of the association
 * List of activities offered by association
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.activityGET = function (offset, limit) {
  if (!limit)
    limit = 20;
  return sqlDb(Activity.getTable)
    .limit(limit)
    .offset(offset);
}


/**
 * Find activity by ID
 * Returns an activity
 *
 * activityId Long ID of activity to return
 * returns Activity
 **/
exports.getActivityById = function (activityId) {
  return sqlDb(Activity.getTable)
    .where(Activity.id, activityId);
}


/**
 * Find activity by Name
 * Returns the activities with a specific name
 *
 * activityName String Name of the activities to return
 * returns Activity
 **/
exports.getActivityByName = function (activityName) {
  return sqlDb(Activity.getTable)
    .where(Activity.name, activityName);
}

