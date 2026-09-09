
// 9. Largest of Three Numbers
// Take three numbers and find the largest number using if-else.
// Do not use arrays or any built-in maximum function

let num1 = 70;
let num2 = 71;
let num3 = 72; 

if(num1 > num2 && num1 > num3){
    console.log("First Number is Largest"); 
}else if(num2 > num1 && num2 > num3){
    console.log("Second Number is Largest");
}else if(num3 > num1 && num3 > num2){
    console.log("Third Number is Largest");   
}else{
    console.log("All three numbers are equal");
}