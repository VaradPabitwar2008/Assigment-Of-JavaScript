
// 20. Simple Calculator
// Take:
// ● First number
// ● Second number
// ● Operator
// Supported operators:
// +
// -
// *
// /
// %
// Use switch-case.
// Example:
// First number: 20
// Second number: 5
// Operator: *
// Output: 100
// Also handle division by zero. 

let FirstNumber = 20;
let SecondNumber = 5;
let Operator = "*";

switch (Operator){
    case "+":
        console.log("Output:", FirstNumber + SecondNumber);
        break;
    case "-":
        console.log("Output:", FirstNumber - SecondNumber);
        break;
    case "*":
        console.log("Output:", FirstNumber * SecondNumber);
        break;
    case "/":
        if(SecondNumber === 0){
            console.log("Cannot divide by zero");
        } else {
            console.log("Output:", FirstNumber / SecondNumber);
        }
        break;
    case "%":
        if(SecondNumber === 0){
            console.log("Cannot divide by zero");
        } else {
            console.log("Output:", FirstNumber % SecondNumber);
        }
        break;
    default:
        console.log("Invalid operator");
}
