const accountNumber = 233733847384;
let managerUBL = "Amir";
var ceoUBL= "Rauf";
accountTitle= "Saving"
let accountBranch;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


/*
What is scope ?
{

}
Everything in these curly braces is in scope
*/


// accountNumber= 43000;  (not allowed)[We cannot assign value again to constant]
// console.log(accountNumber)
managerUBL="Ramzan";
ceoUBL= "Awais";
accountTitle= "Current"
console.table([accountNumber, managerUBL, ceoUBL, accountTitle, accountBranch])
