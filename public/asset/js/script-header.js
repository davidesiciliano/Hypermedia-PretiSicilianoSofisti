function loadHeader() {
  var header = document.querySelector(".header");
  const currentPage = header.id.replace("Header", "");
  header.innerHTML = `
    <div class="logo">
      <a href="../../index.html">
        <img src="../../asset/img/Logo.png" alt="logo"/>
      </a>
      <h1><a href="../../index.html">Volontariato di Montagna</a></h1>
    </div>
    <ul class="nav-links">
      <li id="association"><a href="../../pages/association_page.html">Association</a></li>
      <li id="farms"><a href="../../pages/farms_page.html">Farms</a></liid>
      <li id ="activities"><a href="../../pages/activities_page.html">Activities</a></li>
      <li id="events"><a href="../../pages/events_page.html">Events</a></li>
      <li id="people"><a href="../../pages/people_page.html">People</a></li>
      <li id="helpUs"><a href="../../pages/helpUs_page.html">Help Us</a></li>
      <li id="faq" class="FAQLink"><a href="../../pages/FAQ_page.html">FAQ</a></li>
      <li id="terms" class="TermsLink"><a href="../../pages/terms_page.html">Terms</a></li>
    </ul>
    <div class="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  `;

  document.getElementById(currentPage).classList.add("selected");
}

loadHeader();