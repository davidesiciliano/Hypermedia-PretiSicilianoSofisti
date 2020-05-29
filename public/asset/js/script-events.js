function loadPage() {
  let eventList = document.getElementById("eventsGrid");
  fetch("../v2/events").then(function (response) {
    return response.json();
  }).then(function (eventsJson) {
    for (var i = 0; i < eventsJson.length; i++) {
      let {id, name, date, hours, location, smallDescription, completeDescription, eventImg, personId, farmId} = eventsJson[i];
      var parts = date.split("-");
      var monthList = document.getElementById("eventsMonth" + parts[1]);
      if (monthList == null) {
        eventList.innerHTML += addMonthSection(parts[1], parts[0]);
      }
      monthList = document.getElementById("eventsMonth" + parts[1]);
      monthList.innerHTML += insertEvent(id, name, date, smallDescription, eventImg);
    }
  })
}

function addMonthSection(month, year) {
  let monthName = getMonthName(month);
  return `
    <h2>` + monthName + ` ` + year + `</h2>
    <div class="detailed-grid-container" id="eventsMonth` + month + `"></div>
  `;
}

function getMonthName(month) {
  switch (month) {
    case "01":
      return "January";
    case "02":
      return "February";
    case "03":
      return "March";
    case "04":
      return "April";
    case "05":
      return "May";
    case "06":
      return "June";
    case "07":
      return "July";
    case "08":
      return "August";
    case "09":
      return "September";
    case "10":
      return "October";
    case "11":
      return "November";
    case "12":
      return "December";
    default:
      return "Error"
  }
}

function insertEvent(id, name, date, smallDescription, eventImg) {
  var parts = date.split("-");
  return `
  <div class="detailed-card">
    <a href="./singleEvent_page.html?eventId=` + id + `">
      <div class="rectangle-container">
        <img src="../asset/img/Events/` + eventImg + `" alt="">
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