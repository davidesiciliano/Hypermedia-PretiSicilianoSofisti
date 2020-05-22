let {activityDbSetup} = require("./ActivityService")
let {contactsDbSetup} = require("./ContactService");
let {eventDbSetup} = require("./EventService")
let {faqDbSetup} = require("./FAQService")
let {farmDbSetup} = require("./FarmService")
let {helpUsFormDbSetup} = require("./HelpUsFormService")
let {personDbSetup} = require("./PersonService");

const sqlDbFactory = require("knex");

let sqlDb = sqlDbFactory({
  client: "pg",
  connection: { //process.env.DATABASE_URL,
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "VolontariatoDiMontagnaDB",
  },
  debug: true,
  ssl: true
});

function setupDataLayer() {
  console.log("Setting up data layer");
  return activityDbSetup(sqlDb)
    .then(contactsDbSetup(sqlDb))
    .then(eventDbSetup(sqlDb))
    .then(faqDbSetup(sqlDb))
    .then(farmDbSetup(sqlDb))
    .then(helpUsFormDbSetup(sqlDb))
    .then(personDbSetup(sqlDb));
}

module.exports = {database: sqlDb, setupDataLayer};