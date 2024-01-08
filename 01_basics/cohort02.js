/*
---->js is an interpreted language which compiles
and runs the code line by line and also runs the code partially until any error 
present in the code ......i.e. if there is an error in the 
3rd line of the code the program will run for the above two line and will give 
an error during the third line.
---->whereas c++ and java are compiled languages which means they compile the whole
program first beforing running and if there is any error in the whole program 
the code will not run and it will give a error.
---->js is a single threaded language which means it can only use one 
core at a time while running the code and java is a mutltithreaded language.
*/
let answer=0;
for(let i=0;i<=100;i++){
    answer=answer+i
}
const ages=[21,22,23,24];
for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}

