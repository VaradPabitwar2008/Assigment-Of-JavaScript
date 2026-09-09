
// q1 - Handle a Button Click

const btn = document.querySelector("#btn")
btn.addEventListener("click", function(){
    console.log("Button Clicked");
})


// q2 - change text on click
let oldv = document.querySelector("#old")
btn.addEventListener("click", function(){
    oldv.textContent = "Thanks for visiting!"
})


// q3 - Handle a Mouseover Event
const mouseOver = document.querySelector("#mouseOver")
mouseOver.addEventListener("mouseover", function(){
    mouseOver.textContent = "Mouse is over the heading!"
})


// 4. Display the Clicked Element

btn.addEventListener("click", function(event){
    console.log(event.target.tagName);
})


// 5. Display Mouse Coordinates

const mouseCoordinates = document.querySelector("#mouseCoordinates")
mouseCoordinates.addEventListener("mousemove", function(event){
    console.log(event.clientX);
    console.log(event.clientY);
})


// 6. Get the Value of an Input Using the Event Object

const inputBox = document.querySelector("#inputBox")
inputBox.addEventListener("input", function(event){
    console.log(event.target.value);
})


// 7. Remove an Event Listener

const btn2 = document.querySelector("#btn2")
function handleClick(){
    console.log("Button clicked");
}
btn2.addEventListener("click", handleClick)         
btn2.removeEventListener("click",handleClick) 


// 8. Run an Event Only Once

const btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", function(e){
    console.log("Welcome!");
    
}, {once : true})  


// 9 - Stop Event Propagation
const div = document.querySelector("#div")
const btn4 = document.querySelector("#btn4")
div.addEventListener("click", function(){
    console.log("Parent Clicked");
})

btn4.addEventListener("click", function(e){
    e.stopPropagation()
    console.log("Child Clicked");
})


// 10 - Demonstrate Event Bubbling
const Parent = document.querySelector("#parent")
const Child = document.querySelector("#child")
parent.addEventListener("click", function(){
    console.log("Parent Clicked");
})

Child.addEventListener("click", function(e){
    console.log("Button Clicked");
})


// 11 - Demonstrate Event Capturing
const div2 = document.querySelector("#div2")
const btn5 = document.querySelector("#btn5")
div2.addEventListener("click", function(){
    console.log("Parent Clicked");
}, true)

btn5.addEventListener("click", function(e){
    console.log("Button Clicked");
}, true)


// 12 - Handle Multiple Buttons Using Event Delegation
const buttons = document.querySelector("#buttons")
buttons.addEventListener("click", function(e){
    console.log(e.target.textContent);
})


// 13 - Handle a Dynamic List Using Event Delegation
const skills = document.querySelector("#skills")
skills.addEventListener("click", function(e){
    console.log(`You clicked: `,e.target.textContent);
})