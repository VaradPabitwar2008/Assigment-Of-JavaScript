
// 22. Menu-Based Calculator
// Create this menu:
// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
// 5. Modulus
// Take the user’s choice and two numbers.
// Use switch-case to perform the selected operation. 

let choice = 0;
let num1 = 28; 
let num2 = 1;

switch (choice){
    case 1:
        console.log("Addition:", num1 + num2);
        break;
    case 2:
        console.log("Subtraction:", num1 - num2);
        break;
    case 3:
        console.log("Multiplication:", num1 * num2);
        break;
    case 4:
        if(num2 === 0){
            console.log("Cannot divide by zero");
        } else {
            console.log("Division:", num1 / num2);
            
        }
        break;
    case 5:
        if(num2 === 0){
            console.log("Cannot divide by zero");
        } else {
            console.log("Modulus:", num1 % num2);
            
        }
        break;
    default:
        console.log("Invalid choice");
}