
// 26. Restaurant Menu
// Create the following menu:
// 1. Burger → ₹150
// 2. Pizza → ₹250
// 3. Pasta → ₹180
// 4. Sandwich → ₹120
// Take the customer’s choice and quantity.
// Use switch-case to calculate the total price.
// Example:
// Choice: 2
// Quantity: 3
// Total: ₹750

let choice = 4;
let quantity = 9;

let price; 

switch (choice) {
    case 1: 
        price = 150;
        break;
    case 2: 
        price = 250;
        break;
    case 3: 
        price = 180;
        break;
    case 4: 
        price = 120;
        break;
    default:
        console.log("Invalid choice");
}

if (price !== undefined){
    let totalPrice = price * quantity;
    console.log("Total Price: ₹" + totalPrice);
}