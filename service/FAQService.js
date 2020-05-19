'use strict';


/**
 * FAQs of the Association
 * List of Frequent Asked Questions
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.faqGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "question" : "How to contact us",
  "answer" : "Use the contact form"
}, {
  "id" : 0,
  "question" : "How to contact us",
  "answer" : "Use the contact form"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

