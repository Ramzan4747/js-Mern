// *********************************** Convertion *****************************************
// let score = "33aaa"
// let score = null
// let score = undefined
// let score= true
// let score= false
let score = "Ramzan"



// Two types to use typeof function
// console.log(typeof score)
// console.log(typeof (score))

// This Number Method will convert score into number data type strictly
let valueInNum= Number(score)
// console.log(typeof valueInNum)
//console.log(valueInNum)      // This will give NaN because in string we have alphabets but it will be converted successfully into Number.
                             // it will give 0 if score will be null
                             // it will give NaN if score will be undefined
                             // it will give 1 if score will be true
                             // it will give 0 if score will be false
                             // it will give NaN if score will be string

// Type of NaN is number (Important Point)


// Boolean Conversion
// let isLoggedIn = 1
// let isLoggedIn = 0
let isLoggedIn = "Ramzan"



let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)    // 1=> true
                                  // 0=> false
                                  //""=> false
                                  // "any string" => true


// String Conversion
let number = 33
let numberToString = String(number)
//console.log(numberToString)
//console.log(typeof numberToString)



// ************************************************ Operations *********************************************
let value = 33
let negOfValue = -value
// console.log(negOfValue)

// Basic operations
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(2%3)

// String
let str1= "Muhammad";
let str2= " Ramzan";
let str3= str1 + str2;
// console.log(str3)


// Complex conversion
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// Rule is: all values will be treated according to first dataType
// All these are not good write simple and clean code

// Don't try these practices
// console.log(+true)
// console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2+2;

// Prefix and Postfix (Read it from mdn)
let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log('gameCounter=>', gameCounter)