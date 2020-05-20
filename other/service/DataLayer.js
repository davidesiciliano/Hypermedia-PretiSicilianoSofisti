let { personDbSetup } = require("./PersonService");
let { faqDbSetup } = require("./FAQService")

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
  return personDbSetup(sqlDb)
    .then(faqDbSetup(sqlDb)); //qua poi faccio then e uso le altre funzioni
}

module.exports = {database: sqlDb, setupDataLayer};
