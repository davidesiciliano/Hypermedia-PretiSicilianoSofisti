'use strict';

let sqlDb;

exports.eventDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the event table exists");
  return sqlDb.schema.hasTable("event")
    .then((exists) => {
      if (!exists) {
        console.log("It does not exist so create it");
        return sqlDb.schema.createTable("event", tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer("id");
          tableBuilder.text("name");
          tableBuilder.text("description");
          tableBuilder.text("openingTimes");
          tableBuilder.text("farmImg")
          tableBuilder.integer("contactId");
        });
      } else {
        console.log("Table already exists");
      }
    }).catch(error => console.log(error));
};

/**
 * Events organized by the association
 * List of events of the association
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.eventsGET = function (offset, limit) {
  if (!limit)
    limit = 20;
  return sqlDb("event")
    .limit(limit)
    .offset(offset);
}


/**
 * Find event by ID
 * Returns an event
 *
 * eventId Long ID of event to return
 * returns Event
 **/
exports.getEventById = function (eventId) {
  return sqlDb("event")
    .where("id", eventId);
}


/**
 * Find evens by name
 * Returns events with a specific name
 *
 * eventName String Name of events to return
 * returns Event
 **/
exports.getEventByName = function (eventName) {
  return sqlDb("event")
    .where("name", eventName);
}

