/* 
   1. MOBILE MENU
   When the menu button is clicked, show or hide the nav links.
   */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () 
{
  navLinks.classList.toggle("open");//toggle open means close and close means
});

/* 
   2. CONTACT FORM
   When the form is submitted, stop the page from reloading
   and show a simple "thank you" message instead.
 */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");


