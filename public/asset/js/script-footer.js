function loadFooter() {
  var header = document.querySelector(".footer");
  header.innerHTML = `
    <div class="footer-content">
    
      <div class="footer-section about">
        <h2>Contacts</h2>
        <p>Contact us for more information:</p>
        <div class="contact">
          <span><a class="fas fa-phone">&nbsp;</a><a href="tel:+39 02 50204018">02 50204018</a></span>
          <span><a class="fas fa-envelope">&nbsp;</a><a href="mailto: info@volontariatodimontagna.it">info@volontariatodimontagna.it</a></span>
        </div>
        <div class="socials">
          <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
          <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
          <a href="https://youtube.com/"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
  
      <div class="footer-section links">
        <h2>Quick Links</h2>
        <br>
        <ul>
          <li><a href="../../pages/terms_page.html">Terms</a></li>
          <li><a href="../../pages/FAQ_page.html">FAQ</a></li>
        </ul>
      </div>
  
      <div class="footer-section contact-form">
        <h2>Contact Us</h2>
        <br>
        <form action="" method="post">
          <input type="email" name="email" class="text-input contact-input" placeholder="Your email address..."></input>
          <textarea name="message" class="text-input contact-input" placeholder="Your message..."></textarea>
          <button type="submit" class="btn btn-big contact-btn">
            <i class="fas fa-envelope">&nbsp;</i><a>Send</a>
          </button>
        </form>
      </div>
  
    </div>
    <div class="footer-bottom">
      &copy; volontariatodimontagna.com | Designed by Preti Siciliano Sofisti
    </div>
    `;
}

loadFooter();