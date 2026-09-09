
// 13. Filter Active Users
// Create an array of users containing name and isActive. Use filter() to get only the active users.
// Example:
// Input:
// [
//  { name: "Rahul", isActive: true },
//  { name: "Priya", isActive: false }
// ]
// Output:
// [
//  { name: "Rahul", isActive: true }
// ]

const users = [
    { name: "Rahul", isActive: true },
    { name: "Priya", isActive: false }
] 

let presentStudent = users.filter(user => user.isActive) 

console.log(presentStudent);
