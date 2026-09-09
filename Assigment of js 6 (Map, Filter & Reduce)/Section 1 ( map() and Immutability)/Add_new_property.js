
// 6. Add a New Property Using map()
// Create an array of product objects containing name and price. Use map() to create a new array where
// each product also has an inStock property with the value true.
// Example:
// Input:
// [
//  { name: "Laptop", price: 50000 },
//  { name: "Mouse", price: 500 }
// ]
// Output:
// [
//  { name: "Laptop", price: 50000, inStock: true },
//  { name: "Mouse", price: 500, inStock: true }
// ] 

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 }
]

let updatedProducts = products.map(product => ({
    ...product,
    instock : true
})) 

console.log(updatedProducts);
