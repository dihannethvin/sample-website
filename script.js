// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Show an alert when a navigation link is clicked
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            alert(`You are navigating to ${this.innerText}`);
        });
    });
});

// Real-Time Clock
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000); // Update every second

// Button Animation
function animateButton(button) {
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 200);
}

// Alert on Button Click
function showAlert() {
    animateButton(document.getElementById("alertButton"));
    alert("Hello! This is an interactive website.");
}
