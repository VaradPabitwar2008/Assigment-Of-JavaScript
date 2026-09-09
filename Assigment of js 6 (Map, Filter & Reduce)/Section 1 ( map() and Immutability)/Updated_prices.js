
// 4. Create Updated Product Prices
// Create an array of product prices. Use map() to create a new array where every price is increased by
// 10%. Keep the original array unchanged.
// Example:
// Input:
// [100, 200, 300]
// Output:
// Original: [100, 200, 300]
// New: [110, 220, 330] 

const prices = [100, 200, 300];

let newPrices = prices.map(price => price + (price * 10 / 100));

console.log("Original:", prices);
console.log("New:", newPrices)
