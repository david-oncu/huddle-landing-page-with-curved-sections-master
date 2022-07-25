const email = document.getElementById("email");
const submit = document.getElementById("submit-btn");
const error = document.getElementById("form-error");



submit.addEventListener("click", (e) => {
    if (email.validity.typeMismatch) {
        e.preventDefault();
        error.style.display = "block";
        email.style.border = "2px solid hsl(0, 100%, 63%)";
    } else {
        error.style.display = "none";
        email.style.border = "none";
    }
});

