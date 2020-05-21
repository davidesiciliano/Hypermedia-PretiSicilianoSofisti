'use strict';

let sqlDb;

exports.activityDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the activity table exists");
  return sqlDb.schema.hasTable("activity")
    .then((exists) => {
      if (!exists) {
        console.log("Id does not exist so create it");
        return sqlDb.schema.createTable("activity", tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer("id");
          tableBuilder.text("name");
          tableBuilder.text("description");
          tableBuilder.text("startDate");
          tableBuilder.text("endDate");
          tableBuilder.text("activityImg");
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
  return sqlDb("activity")
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
  return sqlDb("activity")
    .where("id", activityId);
}


/**
 * Find activity by Name
 * Returns the activities with a specific name
 *
 * activityName String Name of the activities to return
 * returns Activity
 **/
exports.getActivityByName = function (activityName) {
  return sqlDb("activity")
    .where("name", activityName);
}

