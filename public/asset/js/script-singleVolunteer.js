function loadPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const personId = urlParams.get('personId');

  var volunteerDescription = document.getElementById("volunteerInfo");
  fetch("../v2/people/findById/" + personId).then(function (response) {
    return response.json();
  }).then(function (personJson) {
    let {personIdP, name, surname, role, description, personImg, contactId} = personJson[0];
    fetch("../v2/contacts/findById/" + contactId).then(function (response) {
      return response.json();
    }).then(function (contactJson) {
      let {contactId, email, phoneNumber} = contactJson[0];
      volunteerDescription.innerHTML = addVolunteerData(name, surname, description, personImg, email, phoneNumber);

      var assignedActivities = document.getElementById("volunteerAssignedActivities");
      fetch("../v2/isInvolvedIn/findAssignedActivities/" + personId).then(function (response) {
        return response.json();
      }).then(function (isInvolvedInJson) {
        for (var i = 0; i < isInvolvedInJson.length; i++) {
          let {personIdI, activityId} = isInvolvedInJson[i];
          fetch("../v2/activities/findById/" + activityId).then(function (response) {
            return response.json()
          }).then(function (activityJson) {
            let {activityIdA, name, description, startDate, endDate, activityImg} = activityJson[0];
            assignedActivities.innerHTML += addAssignedActivity(activityId, name, activityImg);
          });
        }
      });
    });
  });


}

function addVolunteerData(name, surname, description, personImg, email, phoneNumber) {
  return `
    <div class="topSection">
      <div class="name"><a href="./people_page.html"><i class="fas fa-chevron-left"></i>` + name + ` ` + surname + `</a></div>
      <div class="navInfo"><a href="./people_page.html">People</a></div>
    </div>
    <img class="personImageResize" src="../asset/img/People/Volunteers/` + personImg + `" alt="">
    <div class="eventDescription">
      <div class="column1">
        <img src="../asset/img/People/Volunteers/` + personImg + `" alt="">
      </div>
      <div class="column2">
        <p>` + description + `</p>
        <h3>Contacts</h3>
        <p>Telephone: ` + phoneNumber + `</p>
        <p>Email: ` + email + `</p>
        <div class="activities-list">
          <h3>Assigned Activities</h3>
          <div class="activities-grid-container" id="volunteerAssignedActivities"></div>
        </div>
      </div>
    </div>
  `;
}

function addAssignedActivity(activityId, name, activityImg) {
  return `
  <div class="activity-card">
    <a href="./singleActivity_page.html?activityId=` + activityId + `">
      <div class="rectangle-container">
      <img src="../asset/img/Activities/` + activityImg + `" alt="">
      </div>
      <h2>` + name + `</h2>
    </a>
  </div>
  `;

}

loadPage();