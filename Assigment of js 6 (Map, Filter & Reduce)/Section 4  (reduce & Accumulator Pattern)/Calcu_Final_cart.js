
// 20. Calculate Final Cart Total
// Create an array of cart items containing name, price, and quantity. Use reduce() to calculate the final
// cart total by multiplying the price and quantity of each item.
// Example
// Input:
// [
//  { name: "Mouse", price: 500, quantity: 2 },
//  { name: "Keyboard", price: 1000, quantity: 1 }
// ]
// Output:
// 2000

let cart = [
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1000, quantity: 1 }
]

let total = cart.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
)

console.log(total);