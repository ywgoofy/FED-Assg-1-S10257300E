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


function toggleDropdown() {
    var dropdownContent = document.getElementById("socialMediaContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.w3-button')) {
        var dropdowns = document.getElementsByClassName("w3-dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}