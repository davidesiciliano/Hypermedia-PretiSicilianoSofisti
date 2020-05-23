'use strict';


/**
 * Find all farms interested by a specific activity
 * Returns a list of farms
 *
 * activityId Long ID of the considered activity
 * returns Offers
 **/
exports.getFarmsByActivityId = function(activityId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "farmId" : 2,
  "activityId" : 3
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

