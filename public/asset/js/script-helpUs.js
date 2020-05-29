function loadPage() {
  //TODO aggiungere messaggio quando viene inviato correttamente

  var button = document.getElementById("sendForm");
  button.onclick = function () {

    var name = document.getElementById("inputName").value;
    var surname = document.getElementById("inputSurname").value;
    var birthDate = document.getElementById("inputBirthDate").value;
    var address = document.getElementById("inputAddress").value;
    var city = document.getElementById("inputCity").value;
    var province = document.getElementById("inputProvince").value;
    var phoneNumber = document.getElementById("inputPhoneNumber").value;
    var email = document.getElementById("inputEmail").value;
    var skills = document.getElementById("inputSkills").value;
    var description = document.getElementById("inputDescription").value;

    const data = {
      name: name,
      surname: surname,
      birthDate: birthDate,
      address: address,
      city: city,
      province: province,
      phoneNumber: phoneNumber,
      email: email,
      skills: skills,
      description: description
    };

    fetch("../v2/helpUsForm/sendForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

loadPage();