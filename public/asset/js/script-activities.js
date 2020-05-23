function loadPage() {
  var activityList = document.querySelector(".grid-container");
  fetch("../v2/activities").then(function (response) {
    return response.json();
  }).then(function (json) {
    for (var i = 0; i < json.length; i++) {
      let {id, name, description, startDate, endDate, activityImg} = json[i];
      activityList.innerHTML += `
        <div class="card">
          <img src="../asset/img/Activities/A1-formaggio.png" alt=""> 
          <div class="container">
            <h4>`+ name +`</h4>
          </div>
        </div>
      `;
    }
  });
}
//TODO SISTEMARE NOME IMMAGINE QUANDO NE AVREMO
loadPage();