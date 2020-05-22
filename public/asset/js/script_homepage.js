const carouselSlide = document.querySelector('.slider');
const carouselImages = document.querySelectorAll('.slider img');

//Buttons
//const prevBtn = document.querySelector('#prevBtn');
//const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button Listener
/*nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1)
    counter = 1;
  carouselSlide.style.transform = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});*/

/*prevBtn.addEventListener('click', () => {
  if (counter <= 0)
    counter = carouselImages.length - 2;
  carouselSlide.style.transform = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});*/

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transform = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transform = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})

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
