// ********************** Comparisons ***********************************

// Basic Comparisons 
// console.log(2 == 1)
// console.log(2 != 1)

// Comparisons with problems
// console.log("2" > 1);
// console.log("02" < 1); 
// In these both cases javascript automatically convert string into number but avoid this type of comparison

// Comparing null (Don't use these)
//console.log(null > 0); // false
//console.log(null == 0); // fasle
//console.log(null >= 0);  // it will give true
                        // Reason: The reason is that an equality check == and comparisons > < >= <= work differently.
                                    //Comparisons convert null to a number, treating it as 0.
                                    // That is why (3) null >= 0 is true and (1) null > 0 is false 

// Undefined (It gives false with these conditions)
// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined >= 0)


// Strict check (check with ===) (It will check with datatype)
//console.log("2" === 2) // it gives false
//console.log( 2 === 2) // it gives true