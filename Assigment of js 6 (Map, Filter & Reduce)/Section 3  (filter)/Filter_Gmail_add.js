
// 14. Filter Gmail Addresses
// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com".
// Example:
// Input:
// ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]
// Output:
// ["rahul@gmail.com", "aman@gmail.com"]

let emails = [
    "rahul@gmail.com",
    "priya@yahoo.com",
    "aman@gmail.com"
];

let gmailUsers = emails.filter(email => email.endsWith("@gmail.com"));

console.log(gmailUsers);