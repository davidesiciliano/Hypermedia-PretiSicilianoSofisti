function loadPage() {
  var faqList = document.querySelector(".accordion");
  fetch("../v2/faq").then(function (response) {
    return response.json();
  }).then(function (json) {
    for (var i = 0; i < json.length; i++) {
      let {id, question, answer} = json[i];
      var externalDiv = document.createElement("div");
      externalDiv.className = "accordion-item";
      externalDiv.setAttribute("id", id)

      //questionBackground
      var questionBackgroundDiv = document.createElement("div");
      questionBackgroundDiv.className = "questionBackground";

      //questionText
      var questionText = document.createElement("a");
      questionText.className = "accordion-link";
      questionText.setAttribute("href", `#${id}`)
      questionText.appendChild(document.createTextNode(`${question}`));
      var i1 = document.createElement("i")
      i1.className = "fas fa-plus";
      questionText.appendChild(i1);
      var i2 = document.createElement("i")
      i2.className = "fas fa-minus";
      questionText.appendChild(i2);

      //answerDiv
      var answerDiv = document.createElement("div");
      answerDiv.className = "answer";
      var answerText = document.createElement("p");
      answerText.appendChild(document.createTextNode(`${answer}`))
      answerDiv.appendChild(answerText);

      externalDiv.appendChild(questionBackgroundDiv);
      externalDiv.appendChild(questionText)
      externalDiv.appendChild(answerDiv);
      faqList.appendChild(externalDiv);
    }
  });
}

//loadPage();

function loadPage2() {
  var faqList = document.querySelector(".accordion");
  fetch("../v2/faq").then(function (response) {
    return response.json();
  }).then(function (json) {
    for (var i = 0; i < json.length; i++) {
      let {id, question, answer} = json[i];
      faqList.innerHTML += `
        <div class="accordion">
          <div class="accordion-item" id="`+ id +`">
             <div class="questionBackground"></div>
             <a class="accordion-link" href="#`+ id +`">
               `+ question +`
              <i class="fas fa-plus"></i>
              <i class="fas fa-minus"></i>
             </a>
             <div class="answer">
              <p>`+ answer +`</p>
            </div>
          </div>
        </div>
      `;
    }
  });
}

loadPage2();
