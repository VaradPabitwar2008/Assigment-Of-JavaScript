
// 10. Create an Element Using createElement()
let body = document.querySelector("body");
let element = document.createElement("p")
element.textContent = "Varad Pabitwar"

body.appendChild(element)


// 11. Add an Element Using appendChild()
let list = document.querySelector("#skills")
let add = document.createElement("li")
add.textContent = "HTML , CSS , JavaScript"

list.appendChild(add)


// 12. Add Elements Using append() and prepend()
let LIST = document.querySelector(".list")
let last = document.textContent = " , React"
LIST.append(last)

let start = document.textContent = "HTML , "
LIST.prepend(start)


// 13. Insert an Element Using insertBefore()
const List = document.getElementById('myList');
const secondItem = List.children[1];
const newItem = document.createElement('li');
newItem.textContent = 'CSS';

List.insertBefore(newItem, secondItem);