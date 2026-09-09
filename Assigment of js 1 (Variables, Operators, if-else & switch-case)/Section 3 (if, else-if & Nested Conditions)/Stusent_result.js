
// 14. Student Result
// Take marks of three subjects.
// A student passes only when they score 40 or more in every subject.
// If the student passes, calculate the average and display:
// Average >= 75 → Distinction
// Average >= 60 → First Division
// Average >= 50 → Second Division
// Otherwise → Pass
// If any subject is below 40:
// Result: Fail 

let math = 65;
let science = 85;
let english = 70; 

if (math < 50 || science < 50 || english < 50){
    console.log("Result: Fail");
} else {
    let average = (math + science + english) / 3;
    console.log("Average: ", average);
    
    if(average >= 75){
        console.log("Distinction");
    } else if(average >= 60){
        console.log("First Division");    
    } else if(average >= 50) {
        console.log("Second Division");
    } else {
        console.log("Pass");
    }
}