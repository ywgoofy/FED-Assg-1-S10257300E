// Get all the navigation buttons
const navButtons = document.querySelectorAll('.w3-bar-item');

// Add event listeners to each button
navButtons.forEach(button => {
    button.addEventListener('mouseenter', addGlow);
    button.addEventListener('mouseleave', removeGlow);
});

// Function to add glow effect
function addGlow() {
    this.classList.add('glow');
}

// Function to remove glow effect
function removeGlow() {
    this.classList.remove('glow');
}


// Get all social icons
const socialIcons = document.querySelectorAll('.social-icon');

// Add event listeners to each social icon
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', addHoverEffect);
    icon.addEventListener('mouseleave', removeHoverEffect);
});

// Function to add hover effect
function addHoverEffect() {
    this.classList.add('hover');
}

// Function to remove hover effect
function removeHoverEffect() {
    this.classList.remove('hover');
}


