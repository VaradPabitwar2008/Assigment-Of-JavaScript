
// 19. Create a Comma-Separated String
// Create an array of frontend technologies and use reduce() to combine them into a single
// comma-separated string.
// Example:
// Input:
// ["HTML", "CSS", "JavaScript"]
// Output:
// "HTML, CSS, JavaScript" 

let technologies = ["HTML", "CSS", "JavaScript"];

let result = technologies.reduce(
    (str, tech) => str + (str ? ", " : "") + tech,
    ""
)

console.log(result);
