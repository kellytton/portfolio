window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 100) {
        navbar.classList.add('scrolled'); // Add the background when scrolled past threshold
    } else {
        navbar.classList.remove('scrolled'); // Remove background when above threshold
    }
});
