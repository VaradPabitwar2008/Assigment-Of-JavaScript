
// 15. Find an Index Using findIndex()
// Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya".
// Example:
// [
//  { name: "Rahul", age: 20 },
//  { name: "Priya", age: 22 }
// ] 

let users = [
    {name: "Rahul",age: 20},
    {name: "Varad",age: 18},
    {name: "Priya",age: 22}
] 

let varadIndex = users.findIndex(user => user.name === "Varad");
console.log(varadIndex);

