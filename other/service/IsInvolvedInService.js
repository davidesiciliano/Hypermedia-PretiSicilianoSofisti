'use strict';


/**
 * Find all people involved in a specific activity
 * Returns a list of people
 *
 * activityId Long ID of the considered activity
 * returns IsInvolvedIn
 **/
exports.getPeopleByActivityId = function(activityId) {
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

