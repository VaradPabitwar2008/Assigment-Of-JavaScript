
// 9. Get Object Entries
// Create a settings object and use Object.entries() to convert its properties into key-value pairs.
// Example:
// Input:
// const settings = {
//  theme: "dark",
//  language: "English",
//  notifications: true
// };
// Expected Output:
// [
//  ["theme", "dark"],
//  ["language", "English"],
//  ["notifications", true]
// ]

const settings = {
    theme: "dark",
    language: "English",
    notifications: true
} 

console.log(Object.entries(settings));
