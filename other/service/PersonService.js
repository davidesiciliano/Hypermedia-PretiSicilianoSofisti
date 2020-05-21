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
  return sqlDb("person")
    .where("id", personId);
}

/**
 * Find people by role
 * Returns all people with a specific role
 *
 * personRole String Role of people to return
 * returns Person
 **/
exports.getPersonByRole = function (personRole) {
  return sqlDb("person")
    .where("role", personRole);
}