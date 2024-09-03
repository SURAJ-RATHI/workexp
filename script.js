const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const brandTitle = document.querySelector('.brand-title');

toggleButton.addEventListener('click', () => {
    // Toggle the display of the navigation links
    navbarLinks.classList.toggle('active');
    
    // Toggle the reduced width when the menu is active
    if (navbarLinks.classList.contains('active')) {
        // Apply reduced width directly via inline style
        navbarLinks.style.width = '50%';
        toggleButton.classList.add('top-right');
        brandTitle.classList.add('hide');
    } else {
        // Reset the width to 100% when the menu is not active
        navbarLinks.style.width = '100%';
        toggleButton.classList.remove('top-right');
        brandTitle.classList.remove('hide');
    }
});
