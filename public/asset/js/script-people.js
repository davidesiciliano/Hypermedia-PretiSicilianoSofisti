function loadPage() {
  var founders = document.getElementById("founderGrid");
  fetch("../v2/people/findByRole/Founder").then(function (result) {
    return result.json();
  }).then(function (foundersJson) {
    for (var i=0; i<foundersJson.length; i++) {
      let {id, name, surname, role, description, personImg, contactId} = foundersJson[i];
      founders.innerHTML += insertFounder(id, name, surname, personImg);
    }
  });

}

function insertFounder(id, name, surname, personImg) {
  return `
    <div class="person-card">
      <a href="./singleFounder_page.html?activityId=`+ id +`">
        <div class="circle-container">
          <img src="../asset/img/Founders/1.jfif">
          <h2>Davide Siciliano</h2>
        </div>
      </a>
    </div>
    
  `;
}

loadPage();