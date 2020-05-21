'use strict';

let sqlDb;

exports.farmDbSetup = function (connection) {
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
 * Farm enrolled in the association
 * List of farms in the association
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.farmsGET = function(offset,limit) {
  if (!limit)
    limit = 20;
  return sqlDb("farm")
    .limit(limit)
    .offset(offset);
}


/**
 * Find farm by ID
 * Returns a farm
 *
 * farmId Long ID of farm to return
 * returns Farm
 **/
exports.getFarmById = function(farmId) {
  return sqlDb("farm")
    .where("id", farmId);
}


/**
 * Find farms by name
 * Return farms with the specified name
 *
 * farmName String Name of farms to return
 * returns Farm
 **/
exports.getFarmByName = function(farmName) {
  return sqlDb("farm")
    .where("name", farmName);
}

