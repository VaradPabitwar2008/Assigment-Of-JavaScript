
// 17. Calculate the Total Quantity
// Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total
// quantity of all items.
// Example:
// Input:
// [
//  { name: "Laptop", quantity: 1 },
//  { name: "Mouse", quantity: 2 }
//  ]
// Output:
// 3

let cart = [
    { name: "Laptop", quantity: 1 },
    { name: "Mouse", quantity: 2 }
]

let totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
)

console.log(totalQuantity);