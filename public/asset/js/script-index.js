function loadPage() {
  var nextEvents = document.getElementById("nextEventsGrid");
  fetch("../v2/events").then(function (response) {
    return response.json();
  }).then(function (eventsJson) {
    for (var i = 0; i < 3 && i < eventsJson.length; i++) {
      let {id, name, date, hours, location, smallDescription, completeDescription, eventImg, personId, farmId} = eventsJson[i];
      nextEvents.innerHTML += insertEvent(id, name, date, smallDescription, eventImg);
    }
  })
}

function insertEvent(id, name, date, smallDescription, eventImg) {
  var parts = date.split("-");
  return `
  <div class="detailed-card">
    <a href="./pages/singleEvent_page.html?eventId=` + id + `">
      <div class="rectangle-container">
        <img src="./asset/img/Events/` + eventImg + `" alt="">
      </div>
      <div class="card-content">
        <h2>` + name + `</h2>
         <h4>` + parts[2] + `/` + parts[1] + `/` + parts[0] + `</h4>
        <p>` + smallDescription + `</p>
      </div>
    </a>
  </div>
  `;
}

loadPage();