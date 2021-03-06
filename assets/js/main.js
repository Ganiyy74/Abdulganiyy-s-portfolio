// When the user clicks on div, open the popup
function myFunction() {
var popup = document.getElementById("myPopup");
popup.classList.toggle("show");
}                        
//MENU SHOW
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
   const  nav = document.getElementById(navId);

    // console.log({ toggle });
    // console.log({ nav });

    if (toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show'); //js css to display menu
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

//active and remove menu mobile//
const navLink = document.querySelectorAll('.nav__link');

console.log({ navLink });

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show'); //When we click on each nav__link, we remove the show class
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============SCROLL REVEAL ANIMATIO*/ 
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});
// SCROLL HOME
sr.reveal('.home__title', {});
sr.reveal('.button', {delay: 200});
sr.reveal('.home__img', {delay: 200});
sr.reveal('.home__social-icon', {interval: 300});

//SCROLL ABOUT
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {delay: 200});
sr.reveal('.about__text', {delay: 200});

//SCROLL SKILLS
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {delay: 200 });
sr.reveal('.skills__data', {interval: 200 });
sr.reveal('.skills__img', {delay: 300 });

//SCROLL WORK
sr.reveal('.work__img', { interval: 200 });

//SCROLL CONTACT
sr.reveal('.contact__input', { interval: 300 });
