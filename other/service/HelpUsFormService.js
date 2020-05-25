'use strict';

let HelpUs = require("../models/HelpUsForm")

let sqlDb;

exports.helpUsFormDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the helpUsForm table exists");
  return sqlDb.schema.hasTable(HelpUs.getTable)
    .then((exists) => {
      if (!exists) {
        console.log("It does not exist so create it");
        return sqlDb.schema.createTable(HelpUs.getTable, tableBuilder => {
          tableBuilder.increments();
          tableBuilder.text(HelpUs.name);
          tableBuilder.text(HelpUs.surname);
          tableBuilder.text(HelpUs.birthDate);
          tableBuilder.text(HelpUs.address)
          tableBuilder.text(HelpUs.city);
          tableBuilder.text(HelpUs.province);
          tableBuilder.text(HelpUs.phoneNumber);
          tableBuilder.text(HelpUs.email);
          tableBuilder.text(HelpUs.skills);
          tableBuilder.text(HelpUs.description);
        });
      } else {
        console.log("Table already exists");
      }
    }).catch(error => console.log(error));
};

/**
 * HelpUs form
 * Send a form to be recontacted
 *
 * helpUsform HelpUsForm the form to insert (optional)
 * no response value expected for this operation
 **/
exports.helpUsFormPOST = function (helpUsForm) {
  return sqlDb(HelpUs.getTable)
    .insert({
      name: helpUsForm.name,
      surname: helpUsForm.surname,
      birthDate: helpUsForm.birthDate,
      address: helpUsForm.address,
      city: helpUsForm.city,
      province: helpUsForm.province,
      phoneNumber: helpUsForm.phoneNumber,
      email: helpUsForm.email,
      skills: helpUsForm.skills,
      description: helpUsForm.description
    });
}

