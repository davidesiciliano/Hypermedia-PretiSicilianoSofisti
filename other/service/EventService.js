'use strict';

let Event = require("../models/Event")

let sqlDb;

exports.eventDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the event table exists");
  return sqlDb.schema.hasTable(Event.getTable)
    .then((exists) => {
      if (!exists) {
        console.log("It does not exist so create it");
        return sqlDb.schema.createTable(Event.getTable, tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer(Event.id);
          tableBuilder.text(Event.name);
          tableBuilder.text(Event.date);
          tableBuilder.text(Event.hours);
          tableBuilder.text(Event.location);
          tableBuilder.text(Event.smallDescription);
          tableBuilder.text(Event.completeDescription);
          tableBuilder.text(Event.eventImg);
          tableBuilder.integer(Event.personId);
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
  return sqlDb(Event.getTable)
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
  return sqlDb(Event.getTable)
    .where(Event.id, eventId);
}


/**
 * Find evens by name
 * Returns events with a specific name
 *
 * eventName String Name of events to return
 * returns Event
 **/
exports.getEventByName = function (eventName) {
  return sqlDb(Event.getTable)
    .where(Event.name, eventName);
}

/**
 * Find events related to a personId
 * Returns events related to a person
 *
 * personId Integer PersonId of considered person
 * returns Event
 **/
exports.getEventsByPersonId = function(personId) {
  return sqlDb(Event.getTable)
    .where(Event.personId, personId);
}