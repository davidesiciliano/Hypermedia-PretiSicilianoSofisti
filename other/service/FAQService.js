'use strict';

let sqlDb;

exports.faqDbSetup = function (connection) {
  sqlDb = connection;
  console.log("Checking if the faq table exists");
  return sqlDb.schema.hasTable("faq")
    .then((exists) => {
      if (!exists) {
        console.log("It does not exist so create it");
        return sqlDb.schema.createTable("faq", tableBuilder => {
          tableBuilder.increments();
          tableBuilder.integer("id");
          tableBuilder.text("question");
          tableBuilder.text("answer");
        });
      } else {
        console.log("Table already exists");
      }
    }).catch(error => console.log(error));
};

/**
 * FAQs of the Association
 * List of Frequent Asked Questions
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.faqGET = function (offset, limit) {
  if (!limit)
    limit = 20;
  return sqlDb("faq")
    .limit(limit)
    .offset(offset);
};

