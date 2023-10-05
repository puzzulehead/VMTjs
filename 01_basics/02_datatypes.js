"use strict"; //treat all js code as newer version
//alert(3+3)// we are using nodejs, not browser
console.log(3+3);
// console.log(3
//     +
//     3);//code readability is pritorise
let name = "vikrant"
let age = 18
let state;//output = undefined
let temperature = null//output = empty
//primitve data type
//number => 2 to power 53
//bigint for big values
//string = " "
//boolean => true/false
//null => standalone value when u want the output to be vacant
//undefined
//symbol =>unique

//object
// console.log(typeof "vikrant");
//typeof null is object
//typeof undefined is undefined


//******************************/ */
//primitive data types 
//7 types : Strings,Number,Boolean,null,undefined,Symbol,BigInt
//Reference (non primitive)
//Arrays,Objects,Functions
//  console.log(2>=0);
 const heros = ["iron man", "john wick", "sherlock holmes"];
 let myObj = {
    name : "Vikrant",
    age : 18,
 }
const myFunction = function(){
    // console.log("hello VMT");
}
//typeof
//Undefined => undefined
//Null => object
//Boolean => boolean
//Number =>number
//String => string


//+++++++++++++++++++++++++++++++++++++++//
//stack and heap memory
//stack(primitive)   heap (non-primtive)
//STACK => we get a copy of the original value from stack memory and the original memory remain unchanged
//HEAP => we get the original reference from the heap memory so during any change the original value is compromised
let myName = "vikrant"
let myGameName = myName
myGameName = "zicka"
//here in varible myName vikrant is added and then the varible value is assigned to variable myGameName thereafter myGameName value got assigned as zicka



console.log(myName);
console.log(myGameName);
let user = {
    age : 18,
    hieght : 6

}
let anotherUser = user
anotherUser.age = 19
console.log(user)
console.log(anotherUser);
//object is added in the heap memory
//so the original is changes in case of any potential change in the value

