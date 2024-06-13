document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (name.trim() === "") {
            alert("Please enter your name.");
            event.preventDefault();
        } else if (email.trim() === "" || !validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        } else if (subject.trim() === "") {
            alert("Please enter a subject.");
            event.preventDefault();
        } else if (message.trim() === "") {
            alert("Please enter your message.");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});