
// 6. Change an Attribute Using setAttribute()
let profileImage = document.querySelector("#profileImage")
profileImage.setAttribute("src" , "new.jpg")
profileImage.setAttribute("alt" , "New Image")


// 7. Add and Remove Classes Using classList
let btn = document.querySelector("#btn")
btn.classList.add("classAdd")
console.log('Class added:', btn.className); 

btn.classList.remove("classRemove")
console.log('Class Remove:', btn.className); 


// 8. Modify Element Style
let heading = document.querySelector("#heading")
heading.style.color = "red";
heading.style.fontSize = "75px";
heading.style.backgroundColor = "aqua";


// 9. Read Data Using dataset
let productBtn = document.querySelector("#productBtn")
let productId = productBtn.dataset.id;
console.log(productId);