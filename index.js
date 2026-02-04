const menuToggle = document.getElementById('menu-toggle');
const navContainer = document.getElementById('nav-container');

menuToggle.addEventListener('click', function() {
  navContainer.classList.toggle('active');

  //changing the symbol of the menu toggle button

  // Cross symbol
  if (navContainer.classList.contains('active')) {
    menuToggle.innerHTML = '&#10005;'; 
  } 
  // Hamburger symbol
  else {
    menuToggle.innerHTML = '&#9776;'; 
  }

})