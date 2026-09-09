
// 11. Driving Eligibility
// Take:
// age
// hasLicense
// A person can drive only when:
// ● Age is 18 or above
// ● They have a valid license
// Use a logical operator.

let age = 18;
let validLicense = true; 

if(age >= 18 && validLicense === true){
    console.log("You can drive");
}else {
    console.log("You have no valid license or age");
}