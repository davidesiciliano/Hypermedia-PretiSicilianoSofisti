'use strict';

let Person = require("../models/Peson")

let sqlDb;

exports.personDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the person table exists");
  return sqlDb.schema.hasTable(Person.getTable)
    .then((exists) => {
      if (!exists) {
        console.log("It does not exist so create it");
        return sqlDb.schema.createTable(Person.getTable, tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer(Person.id);
          tableBuilder.text(Person.name);
          tableBuilder.text(Person.surname);
          tableBuilder.enum(Person.role, ["Founder", "Expert", "Volunteer"]);
          tableBuilder.text(Person.description)
          tableBuilder.text(Person.personImg);
          tableBuilder.integer(Person.contactId);
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
  return sqlDb(Person.getTable)
    .where(Person.id, personId);
}

/**
 * Find people by role
 * Returns all people with a specific role
 *
 * personRole String Role of people to return
 * returns Person
 **/
exports.getPersonByRole = function (personRole) {
  return sqlDb(Person.getTable)
    .where(Person.role, personRole);
}