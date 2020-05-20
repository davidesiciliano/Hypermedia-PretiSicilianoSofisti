'use strict';

let sqlDb;

exports.personDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the person table exists");
  return sqlDb.schema.hasTable("person")
    .then((exists) => {
      if (!exists) {
        console.log("It does not exist so create it");
        return sqlDb.schema.createTable("person", tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer("id");
          tableBuilder.text("name");
          tableBuilder.text("surname");
          tableBuilder.enum("role", ["Founder", "Expert", "Volunteer"]);
          tableBuilder.text("personImg");
          tableBuilder.integer("contactId");
        });
      } else {
        console.log("Table already exists");
      }
    }).catch(error => console.log(error));
};

/**
 * Find person by ID
 * Returns a person
 *
 * personId Long ID of person to return
 * returns Person
 **/
exports.getPersonById = function (personId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "id": 0,
      "name": "Davide",
      "surname": "Siciliano",
      "role": "Founder",
      "personImg": "Img0",
      "contactId": 0
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * People who work for the association
 * List of people in the association
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.peopleGET = function (offset, limit) {
  if (!limit)
    limit = 10;
  return sqlDb("person")
    .limit(limit)
    .offset(offset);
};

