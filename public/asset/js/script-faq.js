function loadPage() {
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

loadPage();