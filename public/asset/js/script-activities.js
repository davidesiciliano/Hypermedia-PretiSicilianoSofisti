function loadPage() {
  var activityList = document.getElementById("activitiesGrid");
  fetch("../v2/activities").then(function (response) {
    return response.json();
  }).then(function (activityJson) {
    for (var i = 0; i < activityJson.length; i++) {
      let {id, name, description, startDate, endDate, activityImg} = activityJson[i];
      activityList.innerHTML += addActivity(id, name, activityImg);
    }
  });
}

function addActivity(id, name, activityImg) {
  return `
  <div class="activity-card">
    <a href="./singleActivity_page.html?activityId=` + id + `">
      <div class="rectangle-container">
        <img src="../asset/img/Activities/` + activityImg + `" alt="` + name + ` activity image">
      </div>
      <h2>` + name + `</h2>
    </a>
  </div>
  `;
}

loadPage();