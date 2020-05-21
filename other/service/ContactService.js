'use strict';

let sqlDb;

exports.contactsDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the contact table exists");
  return sqlDb.schema.hasTable("contact")
    .then((exists) => {
      if (!exists) {
        console.log("It does not exist so create it");
        return sqlDb.schema.createTable("contact", tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer("id");
          tableBuilder.text("email");
          tableBuilder.text("phoneNumber");
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
exports.getContactById = function(contactId) {
  return sqlDb("contact")
    .where("id", contactId);
}

