function loadPage() {
  var founders = document.getElementById("founderGrid");
  fetch("../v2/people/findByRole/Founder").then(function (result) {
    return result.json();
  }).then(function (foundersJson) {
    for (var i = 0; i < foundersJson.length; i++) {
      let {id, name, surname, role, description, personImg, contactId} = foundersJson[i];
      founders.innerHTML += insertFounder(id, name, surname, personImg);
    }
  });

  var experts = document.getElementById("expertGrid");
  fetch("../v2/people/findByRole/Expert").then(function (result) {
    return result.json();
  }).then(function (expertJson) {
    for (var i = 0; i < expertJson.length; i++) {
      let {id, name, surname, role, description, personImg, contactId} = expertJson[i];
      experts.innerHTML += insertExpert(id, name, surname, personImg);
    }
  });

  var volunteer = document.getElementById("volunteerGrid");
  fetch("../v2/people/findByRole/Volunteer").then(function (result) {
    return result.json();
  }).then(function (volunteerJson) {
    for (var i = 0; i < volunteerJson.length; i++) {
      let {id, name, surname, role, description, personImg, contactId} = volunteerJson[i];
      volunteer.innerHTML += insertVolunteer(id, name, surname, personImg);
    }
  });


}

function insertFounder(id, name, surname, personImg) {
  return `
    <div class="person-card">
      <a href="./singleFounder_page.html?personId=` + id + `">
        <div class="circle-container">
          <img src="../asset/img/People/Founders/` + personImg + `" alt="">
          <h2>` + name + ` ` + surname + `</h2>
        </div>
      </a>
    </div>
  `;
}

function insertExpert(id, name, surname, personImg) {
  return `
    <div class="person-card">
      <a href="./singleExpert_page.html?personId=` + id + `">
        <div class="circle-container">
          <img src="../asset/img/People/Experts/` + personImg + `" alt="">
          <h2>` + name + ` ` + surname + `</h2>
        </div>
      </a>
    </div>
  `;
}

function insertVolunteer(id, name, surname, personImg) {
  return `
    <div class="person-card">
      <a href="./singleVolunteer_page.html?personId=` + id + `">
        <div class="circle-container">
          <img src="../asset/img/People/Volunteers/` + personImg + `" alt="">
          <h2>` + name + ` ` + surname + `</h2>
        </div>
      </a>
    </div>
  `;
}

loadPage();