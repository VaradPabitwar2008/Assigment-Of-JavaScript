
// 4. Shopping Bill
// Create variables for:
// ● Product price
// ● Quantity
// Calculate the total bill.
// Then apply a discount of 10% and display:
// ● Original bill
// ● Discount amount
// ● Final bill

let productPrice = 1000;
let quantity = 10;

let originalBill = productPrice + quantity;
let discount = originalBill * 10 / 100;
let FinalBill = originalBill - discount;

console.log("Originsl Bill: ", originalBill);
console.log("Discount amount: ", discount);
console.log("Final Bill: ", FinalBill);
