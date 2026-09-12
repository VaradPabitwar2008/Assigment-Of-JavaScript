
// 7. Validate a Required Name Field

let formss = document.querySelector("#myform");
    let name = document.querySelector("#valid");
    let error = document.querySelector("#error");

    formss.addEventListener("submit", function(event) {
        event.preventDefault();

        if (valid.value === "") {
            error.textContent = "Name is required.";
        }
    })


// 8. Validate Email Field

let form1 = document.querySelector("#myForms");
    let email = document.querySelector("#email");
    let errors = document.querySelector("#errors");
    form1.addEventListener("submit", function(event) {
        event.preventDefault();
        if (email.value === "") {
            errors.textContent = "Email is required.";
        }
   })


// 9. Validate Password Length

let form2 = document.querySelector("#form");
    let password = document.querySelector("#password");
    let err = document.querySelector("#err");

    form2.addEventListener("submit", function(event) {
        event.preventDefault();
        if (password.value.length < 6) {
            err.textContent = "Password must be at least 6 characters.";
        }
    })


// 10. Validate Multiple Form Fields

let form3 = document.querySelector("#mine");

    let user = document.querySelector("#user");
    let emails = document.querySelector("#emails");
    let password1 = document.querySelector("#password1");

    let errr = document.querySelector("#errr");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (name.value === "") {
            error.textContent = "Name is required.";
        }
        else if (email.value === "") {
            error.textContent = "Email is required.";
        }
        else if (password.value === "") {
            error.textContent = "Password is required.";
        }
        else {
            error.textContent = "Form submitted successfully!";
        }
    })