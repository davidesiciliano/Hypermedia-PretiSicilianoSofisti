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
    host: "ec2-54-75-229-28.eu-west-1.compute.amazonaws.com",
    user: "oadjrnyacucwph",
    password: "752b6af6f00406587f8c938ebdb19fb4a4d3543dde57b03d73db254a1c5ef5e2",
    database: "de7d4m7pa098l4",
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