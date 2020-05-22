function popUp() {
  alert("Due to the currrent COVID-19 situation all the association activities are suspended!");
}

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active');

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = 'navLinkFade 0.5s ease forwards 0.2s';
      }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();
