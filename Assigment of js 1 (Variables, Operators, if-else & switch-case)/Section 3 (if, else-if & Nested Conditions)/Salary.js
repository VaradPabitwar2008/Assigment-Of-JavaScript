
// 17. Salary Bonus
// Take an employee’s:
// ● Salary
// ● Years of experience
// Bonus rules:
// Experience >= 10 years → 20% bonus
// Experience >= 5 years → 10% bonus
// Experience >= 2 years → 5% bonus
// Below 2 years → No bonus
// Calculate and display:
// ● Original salary
// ● Bonus
// ● Final salary 

let salary = 75000;
let experience = 5; 

let bonus = 0; 

if (experience >= 10){
    bonus = salary * 20 / 100;
} else if (experience >= 5){
    bonus = salary * 10 / 100;
} else if (experience >= 2){
    bonus = salary * 5 / 100;
} else {
    bonus = 0;
} 

let finalsalary = salary + bonus;

console.log("Original Salary: ", salary);
console.log("Bonus: ", bonus);
console.log("Final Salary: ", finalsalary);
