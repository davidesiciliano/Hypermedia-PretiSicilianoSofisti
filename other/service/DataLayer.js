let {activityDbSetup} = require("./ActivityService")
let {contactsDbSetup} = require("./ContactService");

let {faqDbSetup} = require("./FAQService")
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
    .then(faqDbSetup(sqlDb))
    .then(personDbSetup(sqlDb)); //qua poi faccio then e uso le altre funzioni
}

module.exports = {database: sqlDb, setupDataLayer};
