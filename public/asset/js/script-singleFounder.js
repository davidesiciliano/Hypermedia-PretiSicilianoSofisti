function loadPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const personId = urlParams.get('personId');

  var founderDescription = document.getElementById("founderInfo");
  fetch("../v2/people/findById/" + personId).then(function (response) {
    return response.json();
  }).then(function (personJson) {
    let {personId, name, surname, role, description, personImg, contactId} = personJson[0];
    fetch("../v2/contacts/findById/" + contactId).then(function (response) {
      return response.json();
    }).then(function (contactJson) {
      let {contactId, email, phoneNumber} = contactJson[0];
      founderDescription.innerHTML = addFounderData(name, surname, description, personImg, email, phoneNumber);
    });
  });
}

function addFounderData(name, surname, description, personImg, email, phoneNumber) {
  return `
    <div class="topSection">
      <div class="name"><a href="./people_page.html"><i class="fas fa-chevron-left"></i>` + name + ` ` + surname + `</a></div>
      <div class="navInfo"><a href="./people_page.html">People</a></div>
    </div>
    <img class="personImageResize" src="../asset/img/Founders/` + personImg + `" alt="">
    <div class="eventDescription">
      <div class="column1">
        <img src="../asset/img/Founders/` + personImg + `" alt="">
      </div>
      <div class="column2">
        <p>` + description + `</p>
        <h3>Contacts</h3>
        <p>Telephone: ` + phoneNumber + `</p>
        <p>Email: ` + email + `</p>
      </div>
    </div>
  `;
}

loadPage();