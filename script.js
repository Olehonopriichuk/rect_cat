document.getElementById('menuToggle').addEventListener('click', function () {
    let menu = document.getElementById('navMenu');
    
    // Toggle menu visibility
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    }

    // Toggle active class for arrow rotation
    this.classList.toggle('active');
});
