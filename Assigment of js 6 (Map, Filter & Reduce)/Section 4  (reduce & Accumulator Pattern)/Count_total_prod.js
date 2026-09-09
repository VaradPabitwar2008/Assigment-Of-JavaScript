
// 16. Count Total Products
// Create an array of product names and use reduce() with an accumulator to count the total number of
// products.
// Example:
// Input:
// ["Laptop", "Mouse", "Keyboard"]
// Output:
// 3 

let products = ["Laptop", "Mouse", "Keyboard"];

let totalProducts = products.reduce((count, product) => count + 1, 0);

console.log(totalProducts);

