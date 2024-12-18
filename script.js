// Get the button and the dropdown menu
const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Add a click event listener to the menu button
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function (event) {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        menuButton.classList.remove('active');
        dropdownMenu.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const personalInfo = document.querySelector('.personal-info');
    const personalInfoTop = personalInfo.offsetTop;  // Get the position of the personal-info div
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Check if we're near the personal-info section
        if (scrollTop >= personalInfoTop - 200 && scrollTop <= personalInfoTop + 200) {
            // If near the personal-info div, remove the hidden-border class
            navbar.classList.remove('hidden-border');
        } else {
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                navbar.classList.add('hidden-border');
            } else {
                // Scrolling up
                navbar.classList.add('hidden-border');
            }
        }
        lastScrollTop = scrollTop;
    });
});
