
// 14. Remove an Element
const list = document.getElementById('myList');
const itemToRemove = list.children[1];

itemToRemove.remove();


// Clone an Element Using cloneNode()
let btn = document.querySelector('#btn')
let clonedButton = btn.cloneNode(true);
clonedButton.id = 'btn-cloned';
document.body.appendChild(clonedButton);