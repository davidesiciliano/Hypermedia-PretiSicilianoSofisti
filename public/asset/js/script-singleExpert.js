function loadPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const personId = urlParams.get('personId');

  var expertDescription = document.getElementById("expertInfo");
  fetch("../v2/people/findById/" + personId).then(function (response) {
    return response.json();
  }).then(function (personJson) {
    let {personIdP, name, surname, role, description, personImg, contactId} = personJson[0];
    fetch("../v2/contacts/findById/" + contactId).then(function (response) {
      return response.json();
    }).then(function (contactJson) {
      let {contactId, email, phoneNumber} = contactJson[0];
      expertDescription.innerHTML = addExpertData(name, surname, description, personImg, email, phoneNumber);

      var relatedEvents = document.getElementById("expertRelatedEvent");
      fetch("../v2/events/findByPersonId/" + personId).then(function (response) {
        return response.json();
      }).then(function (eventsJson) {
        for (var i = 0; i < eventsJson.length; i++) {
          let {eventId, name, date, hours, location, smallDescription, completeDescription, eventImg, personIdE} = eventsJson[i];
          relatedEvents.innerHTML += addRelatedEvent(eventId, name, eventImg);
        }
      })
    });
  });
}

function addExpertData(name, surname, description, personImg, email, phoneNumber) {
  return `
    <div class="topSection">
      <div class="name"><a href="./people_page.html"><i class="fas fa-chevron-left"></i> ` + name + ` ` + surname + `</a></div>
      <div class="navInfo"><a href="./people_page.html">People</a></div>
    </div>
    <img class="personImageResize" src="../asset/img/People/Experts/` + personImg + `" alt="">
    <div class="personDescription">
      <div class="column1">
        <img src="../asset/img/People/Experts/` + personImg + `" alt="">
      </div>
      <div class="column2">
        <p>` + description + `</p>
        <h3>Contacts</h3>
          <div class="personContact">
          <span>
            <a class="fas fa-phone"></a><a href="tel:` + phoneNumber + `">` + phoneNumber + `</a>
          </span>
          <span>
            <a class="fas fa-envelope"></a><a href="mailto: ` + email + `">` + email + `</a>
          </span>
        </div>
        <div class="activities-list">
          <h3>Related Events</h3>
          <div class="activities-grid-container" id="expertRelatedEvent"></div>
        </div>
      </div>
    </div>
  `;
}

function addRelatedEvent(eventId, name, eventImg) {
  return `
  <div class="activity-card">
    <a href="./singleEvent_page.html?eventId=` + eventId + `">
      <div class="rectangle-container">
      <img src="../asset/img/Events/` + eventImg + `" alt="">
      </div>
      <h2>` + name + `</h2>
    </a>
  </div>
  `;
}

loadPage();