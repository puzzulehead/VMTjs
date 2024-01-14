let myDate = new Date()//built an object called Date()
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMonth());
console.log(myDate.getMinutes());
console.log(`${myDate.getDay()} on this very day of${myDate.getMonth()} i would like to propose an idea`);
// console.log(myDate);//logged the variable myDate
// console.log(typeof (myDate));
let someDate = new Date("2024,8,25");
console.log(someDate.toString());
let myTimeStamp = Date.now()//gives the miliseconds since 1970 to the present
console.log(myTimeStamp);
console.log(someDate.getTime());
console.log(Math.floor(Date.now()/1000));//for changing the miliseconds to sec.




