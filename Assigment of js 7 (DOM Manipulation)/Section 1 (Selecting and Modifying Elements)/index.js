
// 1. Select an Element by ID
let title = document.getElementById("title")
title.textContent = "Hello JavaScript"


// 2. Select an Element Using querySelector()
let des = document.querySelector('.description')
des.textContent = "New Description"


// 3. Select Multiple Elements Using querySelectorAll()
let list = document.querySelectorAll(".item")
list.forEach(function (singleItem) {
    singleItem.style.color = 'red';
});


// 4. Change Content Using textContent
let msg = document.querySelector("#message")
msg.textContent = "Welcome to JavaScript!"


// 5. Add HTML Using innerHTML
let body = document.querySelector("body");
let container = document.createElement("div");
container.id = "container";
container.innerHTML = `
    <h2>My Website</h2>
    <p>Welcome to my website!</p>`
body.appendChild(container);


// 6. Change an Attribute Using setAttribute()
