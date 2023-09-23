console.log("node 01_Basics/01_variables.js")

const accountId = "123456789"
let accountEmail = "ayushsingh@ayush.com" 
var accountPassword = "12345"
//Prefer not to use var...due to Block & Functional-scope problems...
accountCity = "Jashpur"
let accountState;
//accountState is undefined

//accountId is a constant hence cannot be changed
//accountId = 2
//console.log(accountId);

//Variables can be changes as shown below...
accountEmail = "ayush@singh.com"
accountPassword = "54321"
accountCity = "Bhopal"
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

//Thus, Final output can be...
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

