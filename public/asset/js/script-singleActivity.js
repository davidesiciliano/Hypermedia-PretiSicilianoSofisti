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
          peopleList.innerHTML += addAssignedVolunteer(id, name, surname, personImg);
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
            let {id, name, date, hours, location, smallDescription, completeDescription, eventImg, personId} = eventJson[0];
            eventsList.innerHTML += addRelatedEvent(id, name, eventImg);
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
              let {id, name, description, openingTimes, farmImg, contactId} = farmJson[0];
              farmsList.innerHTML += addInterestedFarm(id, name, farmImg);
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
      <div class="name"><a href="../pages/activities_page.html"><i class="fas fa-chevron-left"></i>`+ name +`</a></div>
      <div class="navInfo"><a href="../pages/activities_page.html">Activities</a></div>
    </div>
    <img class="personImageResize" src="../asset/img/Activities/` + activityImg + `" alt="">
    <div class="eventDescription">
      <div class="column1">
        <img src="../asset/img/Activities/` + activityImg + `" alt="">
      </div>
      <div class="column2">
        <h4>`+ startDate +` - `+ endDate +`</h4>
        <p>`+ description +`</p>
        <div class="contacts">
          <div class="columnA">
            <h3>Assigned volunteers</h3>
            <div class="people people-grid-container" id="assignedVolunteersToActivity"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="nextEvents">
      <h2>Related events</h2>
      <ul id="relatedEventsToActivity"></ul>
    </div>
    <div class="farm-section">
      <h2>Interested farms</h2>
      <ul id="involvedFarmsToActivity"></ul>
    </div>
  `;
}

function addAssignedVolunteer(id, name, surname, personImg) {
  return `
    <div class="person-card">
      <a href="./singleVolunteer_page.html?personId=` + id + `">
        <div class="circle-container">
          <img src="../asset/img/People/Volunteers/` + personImg + `" alt="">
          <h2>` + name + ` ` + surname + `</h2>
        </div>
      </a>
    </div>
  `;
}

function addRelatedEvent(id, name) {
  return `
    <li><a href="./singleEvent_page.html?eventId=`+ id +`"><p>`+ name +`</p></a></li>
  `;
}

function addInterestedFarm(id, name) {
  return `
    <li><a href="./singleFarm_page.html?farmId=`+ id +`"><p>`+ name +`</p></a></li>
  `;
}

loadPage();