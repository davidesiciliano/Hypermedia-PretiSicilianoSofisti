'use strict';


/**
 * Events organized by the association
 * List of events of the association
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.eventsGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "name" : "ViggionFestival",
  "date" : "2020-07-25",
  "hours" : "21:00",
  "location" : "Viggiona",
  "smallDescritpion" : "small description",
  "completeDescription" : "complete description",
  "eventImg" : "Img0",
  "personId" : 1
}, {
  "id" : 0,
  "name" : "ViggionFestival",
  "date" : "2020-07-25",
  "hours" : "21:00",
  "location" : "Viggiona",
  "smallDescritpion" : "small description",
  "completeDescription" : "complete description",
  "eventImg" : "Img0",
  "personId" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find event by ID
 * Returns an event
 *
 * eventId Long ID of event to return
 * returns Event
 **/
exports.getEventById = function(eventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "ViggionFestival",
  "date" : "2020-07-25",
  "hours" : "21:00",
  "location" : "Viggiona",
  "smallDescritpion" : "small description",
  "completeDescription" : "complete description",
  "eventImg" : "Img0",
  "personId" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find evens by name
 * Returns events with a specific name
 *
 * eventName String Name of events to return
 * returns Event
 **/
exports.getEventByName = function(eventName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "ViggionFestival",
  "date" : "2020-07-25",
  "hours" : "21:00",
  "location" : "Viggiona",
  "smallDescritpion" : "small description",
  "completeDescription" : "complete description",
  "eventImg" : "Img0",
  "personId" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

