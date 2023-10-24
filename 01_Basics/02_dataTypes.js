// treat all js code as newer version. But no need as it already running in strict mode. But using it is good practice
"use strict"; 

// alert(3+3) // We are using node js that is why it is giving error in terminal

// code readability is most important
console.log(3
    +3) // Don't use this type of writing


// Original documentation of javascript is: "tc39.es"
// Prefered or good documentation is : "mdn"

//Premitive DataTypes (7 datatypes) 
// number => 2 to power 53 , if increase from this we use bigint
// string => we can use '' or "" but prefer ""
// boolean => true/false
// null=> standalone value (empty)
// undefined=> if value is not assigned
// symbol=> used to find uniqueness b/w components (Mostly we will see in REACT)

// object

console.log(typeof "Hitesh")
console.log(typeof undefined) // output will be undefined 
console.log(typeof null)      // output will be object (interview question)