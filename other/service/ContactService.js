'use strict';

let Contact = require("../models/Contact")

let sqlDb;

exports.contactsDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the contact table exists");
  return sqlDb.schema.hasTable(Contact.getTable)
    .then((exists) => {
      if (!exists) {
        console.log("It does not exist so create it");
        return sqlDb.schema.createTable(Contact.getTable, tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer(Contact.id);
          tableBuilder.text(Contact.email);
          tableBuilder.text(Contact.phoneNumber);
        });
      } else {
        console.log("Table already exists");
      }
    }).catch(error => console.log(error));
};

/**
 * Find contact by ID
 * Returns a contact
 *
 * contactId Long ID of contact to return
 * returns Contact
 **/
exports.getContactById = function (contactId) {
  return sqlDb(Contact.getTable)
    .where(Contact.id, contactId);
}

