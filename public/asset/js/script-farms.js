function loadPage() {
  var farmsList = document.getElementById("farmsGrid");
  fetch("../v2/farms").then(function (response) {
    return response.json();
  }).then(function (farmsJson) {
    for (var i = 0; i < farmsJson.length; i++) {
      let {id, farmName, ownerName, shortDescription, completeDescription, address, coordinates, openingTimes, gallery, farmImg, contactId} = farmsJson[i];
      farmsList.innerHTML += insertFarm(id, farmName, shortDescription, address, farmImg);
    }
  })
}

function insertFarm(id, farmName, shortDescription, address, farmImg) {
  return `
  <div class="detailed-card">
    <a href="./singleFarm_page.html?farmId=` + id + `">
      <div class="rectangle-container">
        <img src="../asset/img/Farms/` + farmImg + `" alt="` + farmName + ` farm image">
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