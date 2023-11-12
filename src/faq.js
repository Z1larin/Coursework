const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body = document.body;
const characteristicsListElem = document.querySelector('.characteristics__list');
const characteristicsItemElems = document.querySelectorAll('.characteristics__item');

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

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));