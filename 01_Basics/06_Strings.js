// ******************* Strings ******************

// "abc" or 'abc' we can use double or single quote

// Concatenation
let str1 = "ABC"
let str2 = "XYZ"
let str3 = str1 + str2;
// console.log('str3=>', str3)

// Modern way of concatination (String interpolation) (use backTicks)
let myName = "Nomi";
let repoCount = 55;
// console.log(`Hello my name is ${myName.toUpperCase()} and my repoCount is ${repoCount}`)


// Another way to declare string 
const gameName = new String("Muhammad Ramzan") // This will give every letter with index number and also prototype which provide many more functions
// console.log(gameName[0])
// To see prototype object (We can access all methods of prototype as it is like length. No need to write proto)
// console.log(gameName.__proto__);

// Some Methods
// console.log(gameName.length)
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("m"));


// Slicing (subSting ignore - but we can give - values in slice method)
const newGameName = gameName.substring(0, 3)
console.log('subString=>', newGameName)

const newGameName2 = gameName.slice(-4, 4)
console.log('newGameName2=>', newGameName2)

// trim (There is also two more methods trimStart and trinEnd)
const trimString= "   Nomi    ";
console.log(trimString)
console.log(trimString.trim())
console.log(trimString.trimStart())
console.log(trimString.trimEnd())

// replace
const url= "https://ramzan.com/raman%20chaudhry";
console.log(url.replace("%20", "_"))

// Includes
console.log(url.includes("ramzan")) //It returns true
console.log(url.includes("amir"))   //It returns false

// split (split string on basis of something/separator)
const splitString = "Hello-Dosto-Bye";
console.log(splitString.split("-"))      // without limit parameter
console.log(splitString.split("-", 2))   // with limit parameter

// Assignment:
// Study all string methods from mdn