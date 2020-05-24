function loadPage() {
  var activityList = document.querySelector(".grid-container");
  fetch("../v2/activities").then(function (response) {
    return response.json();
  }).then(function (activityJson) {
    for (var i = 0; i < activityJson.length; i++) {
      let {id, name, description, startDate, endDate, activityImg} = activityJson[i];
      activityList.innerHTML += `
        <div class="card">
          <a href="./singleActivity_page.html?activityId=`+ id +`"> 
            <img src="../asset/img/Activities/A1-formaggio.png" alt=""> 
            <div class="container">
              <h4>`+ name +`</h4>
            </div>
          </a>
        </div>
      `;
    }
  });
}
//TODO SISTEMARE NOME IMMAGINE QUANDO NE AVREMO
loadPage();