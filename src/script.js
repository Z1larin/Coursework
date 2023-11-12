const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body = document.body;

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

  
  const isMenuActive = menu.classList.contains('active');

  
  if (isMenuActive) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});
const swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
document.addEventListener("DOMContentLoaded", function() {
  const navigationLinks = document.querySelectorAll(".navigation-link");
  
  navigationLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        const offsetTop = targetSection.getBoundingClientRect().top;
        const scrollOptions = {
          behavior: "smooth",
          block: "start"
        };
          
        window.scrollTo({
          top: window.scrollY + offsetTop,
          ...scrollOptions
        });
      }
    });
  });
});

const changeImageSrc = () => {
  const image1 = document.querySelector(".photo1");
  const image2 = document.querySelector(".photo2");
  const image3 = document.querySelector(".photo3");
  
  if (window.innerWidth < 375) {
    image1.src = "/img/Group 27.jpg";
    image2.src = "/img/Group 22.jpg";
    image3.src = "/img/Group 23.jpg";
  }
}