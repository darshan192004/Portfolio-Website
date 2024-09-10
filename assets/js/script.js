// const navbar = document.querySelector("[data-navbar]");
const navTogglerElements = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const themeBtn = document.querySelector('#theme-btn')
const body = document.querySelector('body')
const getAllDividers = document.querySelectorAll('.divider')

function handleElementsOnClick(elements, eventType, callbackFunc) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callbackFunc);
  }
}

function handleToggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

handleElementsOnClick(navTogglerElements, "click", handleToggleNavbar);


themeBtn.addEventListener('click', ()=> {
  if(body.getAttribute('class') === 'black') {
      body.classList.remove('black')
      body.classList.add('blue')

      getAllDividers.forEach(item=> {
          item.setAttribute('data-theme', 'blue')
      })
  } else if(body.getAttribute('class') === 'blue'){
      body.classList.remove('blue')
      body.classList.add('violet')
      getAllDividers.forEach(item=> {
          item.setAttribute('data-theme', 'violet')
      })

  } else if(body.getAttribute('class') === 'violet'){
      body.classList.remove('violet')
      body.classList.add('black') 

      getAllDividers.forEach(item=> {
          item.setAttribute('data-theme', 'black')
      })
  }
})

// window.addEventListener('scroll', () => {
//   const navbar = document.querySelector('.navbar');
  
//   if (window.scrollY > 100) {  // Adjust value as needed
//     navbar.style.visibility = 'visible';
//     navbar.style.left = '0';  // Slide in the navbar
//   } else {
//     navbar.style.visibility = 'hidden';
//     navbar.style.left = '-300px';  // Hide it again
//   }
// });

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;
let isScrolling;
const scrollDelay = 5000; // 5 seconds

function handleNavbarVisibility() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('hide');
  } else {
    // Scrolling up
    navbar.classList.remove('hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  
  // Clear any previous timeout to hide the navbar
  clearTimeout(isScrolling);
  
  // Set a timeout to hide the navbar after 5 seconds of inactivity
  isScrolling = setTimeout(() => {
    navbar.classList.add('hide');
  }, scrollDelay);
}

window.addEventListener('scroll', handleNavbarVisibility);
