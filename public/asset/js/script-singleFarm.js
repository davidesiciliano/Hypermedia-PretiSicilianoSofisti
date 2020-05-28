function loadPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const farmId = urlParams.get('farmId');

  var farmDescription = document.getElementById("farmInfo");
  fetch("../v2/farms/findById/" + farmId).then(function (response) {
    return response.json();
  }).then(function (farmJson) {
    let {id, farmName, ownerName, shortDescription, completeDescription, address, coordinates, openingTimes, gallery, farmImg, contactId} = farmJson[0];

    fetch("../v2/contacts/findById/" + contactId).then(function (response) {
      return response.json();
    }).then(function (contactJson) {
      let {contactIdC, email, phoneNumber} = contactJson[0];
      farmDescription.innerHTML += addFarmDescription(farmName, ownerName, completeDescription, address, coordinates, openingTimes, farmImg, email, phoneNumber);
      myMap(coordinates[0], coordinates[1]);

      for (var i = 0; i < gallery.length; i++) {
        if (i === 7)
          var galleryColumn = document.getElementById("galleryColumn3");
        else
          var galleryColumn = document.getElementById("galleryColumn" + i%3);
        galleryColumn.innerHTML += addGalleryImage(gallery[i]);
      }

      var activitiesGrid = document.getElementById("activitiesGrid");
      fetch("../v2/offers/findRelatedActivities/" + farmId).then(function (response) {
        return response.json();
      }).then(function (offersJson) {
        for (var i = 0; i < offersJson.length; i++) {
          let {farmIdO, activityId} = offersJson[i];
          fetch("../v2/activities/findById/" + activityId).then(function (response) {
            return response.json();
          }).then(function (activityJson) {
            let {id, name, description, startDate, endDate, activityImg} = activityJson[0];
            activitiesGrid.innerHTML += addActivity(id, name, activityImg);
          });
        }
      });
    });
  });
}

loadPage();

function addFarmDescription(farmName, ownerName, completeDescription, address, coordinates, openingTimes, farmImg, email, phoneNumber) {
  return `
  <div class="topImage">
    <img src="../asset/img/Farms/` + farmImg + `" alt="text text" style="width:100%">
    <div class="name"><a href="../pages/farms_page.html"><i class="fas fa-chevron-left"></i> ` + farmName + `</a></div>
    <div class="navInfo"><a href="../pages/farms_page.html">Farms</a></div>
  </div>

  <div class="upper-section">
    <h2>The Farm</h2>
    <p>` + completeDescription + `</p>
  </div>

  <div class="activities-list">
    <h2>Activities</h2>
    <div class="activities-grid-container" id="activitiesGrid">
    </div>
  </div>

  <div class="gallery">
    <h2>Gallery</h2>
    <div class="row">
      <div class="column" id="galleryColumn0"></div>
      <div class="column" id="galleryColumn1"></div>
      <div class="column" id="galleryColumn2"></div>
      <div class="column" id="galleryColumn3"></div>
    </div>
  </div>

  <div class="bottom-section">
    <div class="column">
      <h3>Location</h3>
      <div class="map" id="googleMap"></div>
    </div>
    <div class="column">
      <h3>Contacts</h3>
      <p>Farmer Name: ` + ownerName + `</p>
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

function myMap(x, y) {
  var mapProp = {
    center: new google.maps.LatLng(x, y),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function addGalleryImage(galleryImg) {
  return `
    <img src="../asset/img/Farms/` + galleryImg + `" alt="">
  `;
}

function addActivity(id, name, activityImg) {
  return `
  <div class="activity-card">
    <a href="./singleActivity_page.html?activityId=` + id + `">
      <div class="rectangle-container">
        <img src="../asset/img/Activities/` + activityImg + `" alt="">
      </div>
      <h2>` + name + `</h2>
    </a>
  </div>
  `;
}
