
// 8. Create a New Array Using map()
// Using the same array of frontend technologies, use map() to create a new array where every technology
// is converted to uppercase.
// Example:
// Input:
// ["html", "css", "javascript"]
// Output:
// ["HTML", "CSS", "JAVASCRIPT"]

const technologies = ["html", "css", "javascript"];

let uppercaseTechnology = technologies.map(function(technology) {
    return technology.toUpperCase();
});  

console.log(uppercaseTechnology);