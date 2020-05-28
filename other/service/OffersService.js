'use strict';

let Offers = require("../models/Offers");

let sqlDb;

exports.offersDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the event table exists");
  return sqlDb.schema.hasTable(Offers.getTable)
    .then((exists) => {
      if (!exists) {
        console.log("It does not exist so create it");
        return sqlDb.schema.createTable(Offers.getTable, tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer(Offers.farmId);
          tableBuilder.text(Offers.activityId);
        });
      } else {
        console.log("Table already exists");
      }
    }).catch(error => console.log(error));
};

/**
 * Find all farms interested by a specific activity
 * Returns a list of farms
 *
 * activityId Long ID of the considered activity
 * returns Offers
 **/
exports.getFarmsByActivityId = function(activityId) {
  return sqlDb(Offers.getTable)
    .where(Offers.activityId, activityId);
}

/**
 * Find all activities offered by a farm
 * Returns a list of activities
 *
 * farmId Long ID of the considered farm
 * returns Offers
 **/
exports.getActivitiesByFarmId = function(farmId) {
  return sqlDb(Offers.getTable)
    .where(Offers.farmId, farmId);
}