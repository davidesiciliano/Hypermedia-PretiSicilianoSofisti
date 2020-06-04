function loadPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const activityId = urlParams.get('activityId');

  var singleActivity = document.getElementById("farmDescription");
  fetch("../v2/activities/findById/" + activityId).then(function (response) {
    return response.json();
  }).then(function (activityJson) {
    let {id, name, description, startDate, endDate, activityImg} = activityJson[0];
    singleActivity.innerHTML = addActivityData(name, description, startDate, endDate, activityImg);
    fetch("../v2/isInvolvedIn/findInvolvedPeople/" + activityId).then(function (response) { //fetch involved people
      return response.json();
    }).then(function (involvedPeopleJson) {
      var peopleList = document.getElementById("assignedVolunteersToActivity");
      for (var i=0; i<involvedPeopleJson.length; i++) {
        let personId = involvedPeopleJson[i].personId;
        fetch("../v2/people/findById/" + personId).then(function (response) {
          return response.json();
        }).then(function (personJson) {
          let {id, name, surname, role, description, personImg, contactId} = personJson[0];
          peopleList.innerHTML += addAssignedVolunteer(id, name, surname);
        });
      }
      fetch("../v2/relatedTo/findRelatedEvents/" + activityId).then(function (response) { //fetch related events
        return response.json();
      }).then(function (relatedEventsJson) {
        var eventsList = document.getElementById("relatedEventsToActivity");
        for (var i=0; i<relatedEventsJson.length; i++) {
          let eventId = relatedEventsJson[i].eventId;
          fetch("../v2/events/findById/" + eventId).then(function (response) {
            return response.json();
          }).then(function (eventJson) {
            let {id, name, date, hours, location, smallDescription, completeDescription, eventImg, personId, farmId} = eventJson[0];
            eventsList.innerHTML += addRelatedEvent(id, name, smallDescription, eventImg);
          });
        }
        fetch("../v2/offers/findInterestedFarms/" +activityId).then(function (response) { //fetch interested farms
          return response.json();
        }).then(function (interestedFarmsJson) {
          var farmsList = document.getElementById("involvedFarmsToActivity");
          for (var i=0; i<interestedFarmsJson.length; i++) {
            let farmId = interestedFarmsJson[i].farmId;
            fetch("../v2/farms/findById/" + farmId).then(function (response) {
              return response.json();
            }).then(function (farmJson) {
              let {id, farmName, ownerName, shortDescription, completeDescription, address, coordinates, openingTimes, farmImg, contactId} = farmJson[0];
              farmsList.innerHTML += addInterestedFarm(id, farmName, shortDescription, address, farmImg);
            });
          }
        });
      });
    });
  });
}

function addActivityData(name, description, startDate, endDate, activityImg) {
  return `
    <div class="topSection">
      <div class="name"><a href="../pages/activities_page.html"><i class="fas fa-chevron-left"></i> `+ name +`</a></div>
      <div class="navInfo"><a href="../pages/activities_page.html">Activities</a></div>
    </div>
    <div class= "eventImageResizeContainer">
      <img class="eventImageResize" src="../asset/img/Activities/` + activityImg + `" alt="` + name + ` activity image">
    </div>
    <div class="eventDescription">
      <div class="column1">
        <img src="../asset/img/Activities/` + activityImg + `" alt="` + name + ` activity image">
      </div>
      <div class="column2">
        <h4>`+ startDate +` - `+ endDate +`</h4>
        <p>`+ description +`</p>
        <div class="contacts">
          <div class="columnA people">
            <h3>Assigned volunteers</h3>
            <ul class="people-list" id="assignedVolunteersToActivity"></ul>
          </div>
        </div>
      </div>
    </div>
    <div class="related-events single-page-list shadow-inset">
      <h2>Related events</h2>
      <div class="events-list">
        <div class="detailed-grid-container" id="relatedEventsToActivity"></div>
      </div>
    </div>
    <div class="farm-section single-page-list">
      <h2>Interested farms</h2>
      <div class="farms-list">
        <div class="detailed-grid-container" id="involvedFarmsToActivity"></div>
      </div>
    </div>
  `;
}

function addAssignedVolunteer(id, name, surname) {
  return `
    <li><a href="./singleVolunteer_page.html?personId=`+ id +`"><p>`+ name +` `+ surname +`</p></a></li>
  `;
}

function addRelatedEvent(id, name, smallDescription, eventImg) {
  return `
  <div class="detailed-card">
    <a href="./singleEvent_page.html?eventId=` + id + `">
      <div class="rectangle-container">
        <img src="../asset/img/Events/` + eventImg + `" alt="` + name + ` related event image">
      </div>
      <div class="card-content">
        <h2>` + name + `</h2>
        <p>` + smallDescription + `</p>
      </div>
    </a>
  </div>
  `;
}

function addInterestedFarm(id, farmName, shortDescription, address, farmImg) {
  return `
  <div class="detailed-card">
    <a href="./singleFarm_page.html?farmId=` + id + `">
      <div class="rectangle-container">
        <img src="../asset/img/Farms/` + farmImg + `" alt="` + farmName + ` interested farm image">
      </div>
      <div class="card-content">
        <h2>` + farmName + `</h2>
        <h4>` + address + `</h4>
        <p>` + shortDescription + `</p>
      </div>
    </a>
  </div>
  `;
}

loadPage();
