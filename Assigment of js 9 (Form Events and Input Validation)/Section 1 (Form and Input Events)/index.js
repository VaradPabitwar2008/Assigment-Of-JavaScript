
//  1 - Handle Form Submit Event

let form = document.querySelector("#myForm");
let message = document.querySelector("#message");
form.addEventListener("click", function () {
    message.textContent = "Form submitted successfully!"
})


// 2. Prevent Form Submission

let forms = document.querySelector("#my");
forms.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted without page reload");
})


// 3. Display Input Using the input Event

let input = document.querySelector("#languages");
let output = document.querySelector("#output");
input.addEventListener("input", function () {
    output.textContent = "You entered: " + input.value;
})


// 4. Detect Changes Using the change Event

let language = document.querySelector("#language");
    let result = document.querySelector("#result");
    language.addEventListener("change", function() {
        result.textContent = "Selected Language: " + select.value;
})


// 5. Handle the focus Event

let input1 = document.querySelector("#focusInput");
 input1.addEventListener("focus", function() {
        input1.style.backgroundColor = "lightblue";
        input1.style.border = "2px solid blue";
})


// 6. Handle the blur Event

let input2 = document.querySelector("#blur");
    let reply = document.querySelector("#reply");
    input2.addEventListener("blur", function() {
        reply.textContent = "You left the input field.";
})