let {activityDbSetup} = require("./ActivityService")
let {contactsDbSetup} = require("./ContactService");
let {eventDbSetup} = require("./EventService");
let {faqDbSetup} = require("./FAQService");
let {farmDbSetup} = require("./FarmService");
let {helpUsFormDbSetup} = require("./HelpUsFormService");
let {isInvolvedInDbSetup} = require("./IsInvolvedInService");
let {offersDbSetup} = require("./OffersService");
let {personDbSetup} = require("./PersonService");
let {relatedToDbSetup} = require("./RelatedToService");

const sqlDbFactory = require("knex");

/*let sqlDb = sqlDbFactory({
  client: "pg",
  connection: {
    host: "ec2-176-34-97-213.eu-west-1.compute.amazonaws.com",
    user: "pkuvwhdfluphfy",
    password: "6662683a4619db58d3a01906492e70bb6a7593d0a9d6ea37e8db93c72dbf1239",
    database: "d1eh20mpmvnvc3",
    ssl: { rejectUnauthorized: false }
  },
  debug: true,
})*/

let sqlDb = sqlDbFactory({
  client: "pg",
  connection: process.env.DATABASE_URL,
  debug: true,
  ssl :true
})

function setupDataLayer() {
  console.log("Setting up data layer");
  return activityDbSetup(sqlDb)
    .then(contactsDbSetup(sqlDb))
    .then(eventDbSetup(sqlDb))
    .then(faqDbSetup(sqlDb))
    .then(farmDbSetup(sqlDb))
    .then(helpUsFormDbSetup(sqlDb))
    .then(isInvolvedInDbSetup(sqlDb))
    .then(offersDbSetup(sqlDb))
    .then(personDbSetup(sqlDb))
    .then(relatedToDbSetup(sqlDb));
}

module.exports = {database: sqlDb, setupDataLayer};