
// 13. Student Grade
// Take a student’s percentage.
// Assign a grade:
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// 40–59 → E
// Below 40 → F
// Also check for invalid percentages below 0 or above 100.  

let percentage = 101;

if (percentage < 0 || percentage > 100){
    console.log("Invalid Percentage");
} else if(percentage >= 90){
    console.log("Grade A");
} else if(percentage >= 80){
    console.log("Grade B");
} else if(percentage >= 70){
    console.log("Grade C");
} else if(percentage >= 60){
    console.log("Grade D");
} else if(percentage >= 40){
    console.log("Grade E");
} else {
    console.log("Grade F");
}