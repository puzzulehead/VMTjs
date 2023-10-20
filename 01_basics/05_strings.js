//String Interpolation => a modern way to write strings without using plus and double quotes to concatinate values of different varibles
const name = "vikrant"
const age = 18
console.log(`hi this is ${name} and i am ${age}  years old`);

//***************************************************** */
//Way of accesing (key value pairs)
//in the name variable the assigned value is vikrant and at key 0 the value is v, at key 1 the value is i 
//this resembles to array but its not array
// console.log(name[0]);
// //using various prototype functions
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt('5'));//to find the character at a particular index/position
// console.log(name.indexOf('r'));//to find the position of a particular character
// const newString = name.substring(0,4)//in substring we cannot use negataive values
// console.log(newString);
// const anotherString = name.slice(-6,4)//-ve value are only specific to  slice
// console.log(anotherString);
// const stringOne = " vikrant "
// console.log(stringOne);
// console.log(stringOne.trim());//this removes the unwanted spaces in the string

// const url = "https://vmt.com/vikrant%25kumar"
// url.replace('%25' , '-')//the element before the comma is the element u want to replace and the element after the comma is the element with which u want the first element to replace with
// console.log(url.replace('%25' , '-'))

// const newStringOne = "   vmt    "
// console.log(newStringOne);
// console.log(newStringOne.trim());//to trim the extra spaces

const somestring = 'the quick brown fox jumps over the lazy dog.'
console.log(somestring.split(separator);