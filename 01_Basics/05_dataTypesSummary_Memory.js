// ******************************** DataTypes Summary ************************************
/* Two parts of data types
1. Primitive:  
            These are call by value. When these are called, memory location or info is not given rather copy of that value is given and also changes will be in copy.
            
            Total types are (7): String, Number, Boolean, null, undefined, Symbol, BigInt


2. Non Primitive or Reference type:
                            In these memory reference can be alloted.
    
        Total types (3):  Array, Object, Functions

        
       => If you want to become master of javascript then master objects and browser events.

       => javascript is dynamically typed.

*/

// Declaration of some data types:

const score = 100;
const scoreValue = 100.3;
const bigValue= 2348423742347234237423742384n; //Type n in last of number to declare it as bigint

const isLoggedIn = false;
const tempOutside= null;  
let userEmail1= undefined; 
// OR (These both above and below are used to declare undefined)
let userEmail2;

// Symbol (It is used to define unique values. If 2 variables have same value, symbol always give unique resut, they will never be same.)
const id= Symbol("123")
const id2= Symbol("123")
// console.log(id == id2)


// Non primitive
const names =["Ali", "Amir", "Abbass"]

const obj= {
    name: "amir",
    age: 22,
    employInfo: {
        id: "123",
        position: "manager"
    },
    city: "Jhang"
}

const myFunction = function () {
    console.log("Hello")
} // it return data type function but it mostly read as object function 


// Check variable dataTypes:
console.log(typeof names);
console.log(names)

// Types of return values:
/*
undefined => undefined
null => object
Boolean => boolean
Number => number
BigInt => bigint
String => string
Symbol => symbol
function=> function  (but also called as object function)
object=> object 
array=> object
*/



// ********************************************** Memory ****************************************
/*
    Two types of Memory:
1. Stack: It is used in Primitive Data Types. When it is used copy of value is returned

2. Heap: It is used in Non-Primitive Data Types. When it is used reference or original value is returned.

*/
// Example:
// Primitive (No change in original value)
let myName= "Ramzan";
let myName2= myName;
myName2= "Amir"
console.log(myName)
console.log(myName2)


// Non primitive (Change in original value)
let user ={
    email: "abc@gmail.com"
};

let user2 = user;

user2.email= "xyz@gmail.com";

console.log(user.email)
console.log(user2.email)