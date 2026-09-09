
// 28. Simple ATM Menu
// Create the following menu:
// 1. Check Balance
// 2. Deposit Money
// 3. Withdraw Money
// 4. Exit
// Use switch-case.
// Rules:
// ● Check Balance → Display current balance
// ● Deposit → Add money to balance
// ● Withdraw → Check whether sufficient balance exists
// ● Exit → Display a goodbye message
// ● Invalid choice → Display an error message 

let choice = 2;
let balance = 25000;
let depositAmount = 3000;
let withdrawAmount = 5000;

switch (choice){
    case 1:
        console.log("Current Balance: ₹" + balance);
        break;

    case 2:
        balance = balance + depositAmount;
        console.log("Money deposited successfully");
        console.log("Current Balance: ₹" + balance);
        break;

    case 3:
        if (withdrawAmount <= balance){
            balance = balance - withdrawAmount;
            console.log("Withdrawal successful");
            console.log("Current Balance: ₹" + balance);
        } else {
            console.log("Insufficient balance");
        }
        break;

    case 4:
        console.log("Thank you! Goodbye!");
        break;

    default:
        console.log("Invalid choice");
}
