const accountId = 144553
let accountEmail = "prajwal@google.com"
var accountPassward = "123456"
accountCity = "Bhopal"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ph@ph.com"
accountPassward = "21212121"
accountCity = "Indore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassward, accountCity, accountState])