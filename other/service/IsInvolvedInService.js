'use strict';

let IsInvolvedIn = require("../models/IsInvolvedIn");

let sqlDb;

exports.isInvolvedInDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the event table exists");
  return sqlDb.schema.hasTable(IsInvolvedIn.getTable)
    .then((exists) => {
      if (!exists) {
        console.log("It does not exist so create it");
        return sqlDb.schema.createTable(IsInvolvedIn.getTable, tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer(IsInvolvedIn.personId);
          tableBuilder.text(IsInvolvedIn.activityId);
        });
      } else {
        console.log("Table already exists");
      }
    }).catch(error => console.log(error));
};

/**
 * Find all people involved in a specific activity
 * Returns a list of people
 *
 * activityId Long ID of the considered activity
 * returns IsInvolvedIn
 **/
exports.getPeopleByActivityId = function(activityId) {
  return sqlDb(IsInvolvedIn.getTable)
    .where(IsInvolvedIn.activityId, activityId);
}

