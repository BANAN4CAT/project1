const form = document.getElementById("registrationForm");
const notification = document.getElementById("notification");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const confirmEmail = document.getElementById("confirmEmail").value.trim();

    const userId = document.getElementById("userId").value.trim();
    const confirmUserId = document.getElementById("confirmUserId").value.trim();

    if (email !== confirmEmail) {
        alert("Email addresses do not match.");
        return;
    }

    if (userId !== confirmUserId) {
        alert("User IDs do not match.");
        return;
    }

    const userIdPattern = /^[A-Za-z][A-Za-z0-9_]{7,19}$/;

    if (!userIdPattern.test(userId)) {
        alert("User ID must be 8–20 characters and start with a letter.");
        return;
    }

    notification.classList.add("show");

    form.reset();

    setTimeout(function() {
        notification.classList.remove("show");
    }, 5000);
});

function closeNotification() {
    notification.classList.remove("show");
}