// ========== Dark Mode Toggle with Local Storage ==========
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save mode preference to local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Alert when clicking a navigation link
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            alert(`You are navigating to ${this.innerText}`);
        });
    });

    updateClock(); // Start clock immediately
    setInterval(updateClock, 1000); // Update clock every second
});

// ========== Real-Time Clock ==========
function updateClock() {
    const clock = document.getElementById("clock");
    if (clock) {
        const now = new Date();
        clock.innerText = now.toLocaleTimeString();
    }
}

// ========== Button Animation ==========
function animateButton(button) {
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 200);
}

// ========== Alert on Button Click ==========
function showAlert() {
    animateButton(document.getElementById("alertButton"));
    alert("Hello! This is an interactive website.");
}

// ========== Random Background Color Changer ==========
function changeBackgroundColor() {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#a133ff", "#33fff5"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// ========== Smooth Scroll to Top ==========
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ========== Simple Form Validation ==========
function validateForm(event) {
    event.preventDefault(); // Prevents form from submitting automatically

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
