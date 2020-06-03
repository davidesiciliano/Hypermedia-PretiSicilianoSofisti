function loadPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get('eventId');

  var eventDescription = document.getElementById("eventInfo");
  fetch("../v2/events/findById/" + eventId).then(function (response) {
    return response.json();
  }).then(function (eventJson) {
    let {eventIdE, name, date, hours, location, smallDescriptionEvent, completeDescription, eventImg, personId, farmId} = eventJson[0];
    fetch("../v2/farms/findById/" + farmId).then(function (response) {
      return response.json();
    }).then(function (farmJson) {
      let {farmIdF, farmName, ownerName, shortDescription, completeDescriptionFarm, address, coordinates, openingTimes, gallery, farmImg, contactId} = farmJson[0];
      fetch("../v2/contacts/findById/" + contactId).then(function (response) {
        return response.json();
      }).then(function (contactJson) {
        let {contactIdC, email, phoneNumber} = contactJson[0];
        eventDescription.innerHTML += addEventData(
          name, date, hours, location, completeDescription, eventImg,
          farmId, farmName, ownerName, address, shortDescription, farmImg, email, phoneNumber);
        var relatedActivities = document.getElementById("relatedActivitiesGrid");
        fetch("../v2/relatedTo/findRelatedActivities/" + eventId).then(function (response) {
          return response.json();
        }).then(function (relatedToJson) {
          for (var i = 0; i < relatedToJson.length; i++) {
            let {eventId, activityId} = relatedToJson[i];
            fetch("../v2/activities/findById/" + activityId).then(function (response) {
              return response.json();
            }).then(function (activityJson) {
              let {activityIdA, name, description, startDate, endDate, activityImg} = activityJson[0];
              relatedActivities.innerHTML += addActivity(activityId, name, activityImg);
            });
          }
        });
      });
    });
  });
}

function addEventData(name, date, hours, location, completeDescriptionEvent, eventImg,
                      farmId, farmName, ownerName, address, shortDescriptionFarm, farmImg, email, phoneNumber) {
  var parts = date.split("-");
  return `
  <div class="topSection">
    <div class="name"><a href="./events_page.html"><i class="fas fa-chevron-left"></i> ` + name + `</a></div>
    <div class="navInfo"><a href="./events_page.html">Events</a></div>
  </div>
  <div class= "eventImageResizeContainer">
    <img class="eventImageResize"  src="../asset/img/Events/` + eventImg + `"  alt="">
  </div>
  <div class="eventDescription">
    <div class="column1">
      <img src="../asset/img/Events/` + eventImg + `" alt="">
    </div>
    <div class="column2">
      <h4>` + parts[2] + `/` + parts[1] + `/` + parts[0] + `, ` + hours + `</h4>
      <h4>` + location + `</h4>
      <p class="event-description"><br>` + completeDescriptionEvent + `</p>
      <div class="contacts">
        <div class="columnA">
          <h3>Contacts</h3>
          <p>Farmer Name: ` + ownerName + `</p>
          <p>Address: ` + address + `</p>
        </div>
        <div class="columnB">
          <div class="personContact">
            <span>
              <a class="fas fa-phone"></a><a href="tel:` + phoneNumber + `"> ` + phoneNumber + `</a>
            </span>
            <span>
              <a class="fas fa-envelope"></a><a href="mailto: ` + email + `"> ` + email + `</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="activities-list">
    <h2>Activities</h2>
    <div class="activities-grid-container" id="relatedActivitiesGrid"></div>
  </div>

  <div class="bottomImage">
    <img src="../asset/img/Farms/` + farmImg + `" alt="text text" style="width:100%">
  </div>

  <div class="farm-section-event">
    <h2><a href="./singleFarm_page.html?farmId=` + farmId + `">` + farmName + `</a></h2>
    <p>` + shortDescriptionFarm + `</p>
  </div>
  `;
}

function addActivity(id, name, activityImg) {
  return `
  <div class="activity-card">
    <a href="./singleActivity_page.html?activityId=` + id + `">
      <div class="rectangle-container">
        <img src="../asset/img/Activities/` + activityImg + `" alt="">
      </div>
      <h2>` + name + `</h2>
    </a>
  </div>
  `;
}

loadPage();