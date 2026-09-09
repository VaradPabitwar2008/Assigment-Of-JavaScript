
// 25. Movie Ticket System
// Take:
// age
// numberOfTickets
// Ticket prices:
// Age below 12 → ₹100
// Age 12–59 → ₹200
// Age 60+ → ₹120
// Calculate the total ticket price.
// Example:
// Age: 25
// Tickets: 3
// Total: ₹600 

let age = 25;
let numberOfTickets = 3;

let ticketPrice; 

if (age < 12) {
    ticketPrice = 100;
} else if (age <= 59){
    ticketPrice = 120;
} else {
    ticketPrice = 200;
}

let totalPrice = ticketPrice * numberOfTickets;

console.log("Ticket Price: ₹" + ticketPrice);
console.log("Number of Tickets:", numberOfTickets);
console.log("Total Ticket Price: ₹" + totalPrice);
