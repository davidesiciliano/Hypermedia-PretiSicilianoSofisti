function loadPage() {
  let farmsList = document.getElementById("eventsGrid");
  fetch("../v2/events").then(function (response) {
    return response.json();
  }).then(function (eventsJson) {
    for (var i = 0; i < eventsJson.length; i++) {
      let {id, name, date, hours, location, smallDescription, completeDescription, eventImg, personId, farmId} = eventsJson[i];
      farmsList.innerHTML += insertEvent(id, name, smallDescription, eventImg);
    }
  })
}

function insertEvent(id, name, smallDescription, eventImg) {
  return `
  <div class="detailed-card">
    <a href="./singleEvent_page.html?eventId=` + id + `">
      <div class="rectangle-container">
        <img src="../asset/img/Event/` + eventImg + `" alt="">
      </div>
      <div class="card-content">
        <h2>` + name + `</h2>
        <p>` + smallDescription + `</p>
      </div>
    </a>
  </div>
  `;
}

loadPage();