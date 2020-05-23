'use strict';


/**
 * Find all events related to a specific activity
 * Returns a list of events
 *
 * activityId Long ID of the considered activity
 * returns RelatedTo
 **/
exports.getEventsByActivityId = function(activityId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "personId" : 6,
  "activityId" : 3
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

