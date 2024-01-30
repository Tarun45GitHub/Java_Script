const accountId=21101106045;
console.log(accountId);
// accountId=2110204578; //re-assign not possible for const type variable

let accountName="Tarun";
console.log(accountName);
accountName="Dalbera";
console.log(accountName);

var accountEmail="tarun@gmail.com";
console.log(accountEmail);
accountEmail="tk@gmail.com";
console.log(accountEmail);

accountState="west bengal";
console.log(accountState);
accountState=8520;
console.log(accountState);
console.log(typeof(accountState));

console.table([accountId,accountName,accountEmail,accountState])//shortcurt 

let accountNumber
console.log(accountNumber); //undefined

/*
notes-
use const for constantly assigntly value.
prefer not use var -> because issu in block scope and functional scope({}) */