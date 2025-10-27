// ========== Dark Mode Toggle with Local Storage ==========
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save mode preference to local storage
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateClock(); // Start clock immediately
    setInterval(updateClock, 1000); // Update clock every second

    // Alert when clicking a navigation link
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function() {
            alert(`You are navigating to ${this.innerText}`);
        });
    });

    // Show scroll-to-top button dynamically
    window.addEventListener("scroll", toggleScrollButton);
});

// ========== Real-Time Clock ==========
function updateClock() {
    const clock = document.getElementById("clock");
    if (clock) {
        const now = new Date();
        clock.innerText = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    }
}

// ========== Button Animation ==========
function animateButton(button) {
    button.style.transform = "scale(0.9)";
    setTimeout(() => button.style.transform = "scale(1)", 200);
}

// ========== Alert on Button Click ==========
function showAlert() {
    animateButton(document.getElementById("alertButton"));
    alert("Hello! This is an interactive website.");
}

// ========== Random Background Color Changer ==========
function changeBackgroundColor() {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#a133ff", "#33fff5"];
    let currentColor = document.body.style.backgroundColor;
    let newColor;

    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor); // Ensures a different color

    document.body.style.backgroundColor = newColor;
}

// ========== Smooth Scroll to Top ==========
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide scroll-to-top button dynamically
function toggleScrollButton() {
    const scrollBtn = document.getElementById("scrollToTop");
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// ========== Simple Form Validation ==========
function validateForm(event) {
    event.preventDefault(); // Prevents form from submitting automatically

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
