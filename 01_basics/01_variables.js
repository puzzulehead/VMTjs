const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
let accountCity = "Jaipur"
let accountState;
//var let const are preassigned keywords which is the difference between a js and text file
// accountId = 2 not allowed

accountEmail = "vmt@gmailcom"
accountCity = "banglore"
console.log([accountId, accountEmail, accountPassword, accountCity]);
/*
prefer not to use var
because of issue in block scope('{}') and functional scope
*/
console.log(accountState);