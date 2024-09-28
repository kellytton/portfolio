// Scroll -> navbar becomes more opaque

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 100) {
        navbar.classList.add('scrolled'); // Add the background when scrolled past threshold
    } else {
        navbar.classList.remove('scrolled'); // Remove background when above threshold
    }
});


// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar"); // Select the navbar

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbar.classList.toggle("active"); // Toggle the active class on the navbar
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navbar.classList.remove("active"); // Remove the active class when a link is clicked
}));
