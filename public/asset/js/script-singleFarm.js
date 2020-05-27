function loadPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const farmId = urlParams.get('farmId');

  var farmDescription = document.getElementById("farmInfo");
  fetch("..v2/farms/findByName/" + farmId).then(function (response) {
    return response.json();
  }).then(function (farmJson) {
    let {id, farmName, ownerName, shortDescription, completeDescription, address, coordinates, openingTimes, gallery, farmImg, contactId} = farmJson[0];
    fetch("../b2/contacts/findById/" + contactId).then(function (response) {
      return response.json();
    }).then(function (contactJson) {
      let {contactIdC, email, phoneNumber} = contactJson[0];
      farmDescription.innerHTML += addFarmDescription(farmName, ownerName, completeDescription, address, coordinates, openingTimes, farmImg);
      //TODO ADD GALLERY
      //TODO SISTEMO MAPPA

      //TODO FETCH ACTIVITIES, ADD ACTIVITIES
    })
  })
}

function addFarmDescription(farmName, ownerName, completeDescription, address, coordinates, openingTimes, farmImg) {
  return `
  <div class="topImage">
    <img src="../asset/img/image_carusel/3.jpg" alt="text text" style="width:100%">
    <div class="name"><a href="../pages/people_page.html"><i class="fas fa-chevron-left"></i>` + farmName + `</a></div>
    <div class="navInfo"><a href="../pages/farms_page.html">Farms</a></div>
  </div>

  <div class="upper-section">
    <h2>The Farm</h2>
    <p>` + completeDescription + `</p>
  </div>

  <div class="activities" id="activitiesGrid">
    <h2>Activities</h2>
  </div>

  <div class="gallery">
    <h2>Gallery</h2>
    <div class="row" id="activityGallery"></div>
  </div>

  <div class="bottom-section">
    <div class="column">
      <h3>Location</h3>
      <div class="map" id="googleMap"></div>
    </div>
    <div class="column">
      <h3>Contacts</h3>
      <p>Farmer Name: ` + ownerName + `/p>
      <p>Address: ` + address + `</p>
      <div class="personContact">
      <span>
        <a class="fas fa-phone"></a><a href="tel:` + phoneNumber + `"> ` + phoneNumber + `</a>
      </span>
      <span>
        <a class="fas fa-envelope"></a><a href="mailto: ` + email + `"> ` + email + `</a>
      </span>
    </div>
      <h3>Opening Times</h3>
      <p>` + openingTimes + `</p>
    </div>
  </div>
  `;
}

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51, 0),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

myMap();