'use strict';

let RelatedTo = require("../models/RelatedTo");

let sqlDb;

exports.relatedToDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the event table exists");
  return sqlDb.schema.hasTable(RelatedTo.getTable)
    .then((exists) => {
      if (!exists) {
        console.log("It does not exist so create it");
        return sqlDb.schema.createTable(RelatedTo.getTable, tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer(RelatedTo.eventId);
          tableBuilder.text(RelatedTo.activityId);
        });
      } else {
        console.log("Table already exists");
      }
    }).catch(error => console.log(error));
};

/**
 * Find all events related to a specific activity
 * Returns a list of events
 *
 * activityId Long ID of the considered activity
 * returns RelatedTo
 **/
exports.getEventsByActivityId = function(activityId) {
  return sqlDb(RelatedTo.getTable)
    .where(RelatedTo.activityId, activityId);
}

