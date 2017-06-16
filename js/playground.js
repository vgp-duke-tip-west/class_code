console.log("Hello World");
console.log(5);
console.log(5 + 6);
console.log(5 - 6);
console.log(5 * 6);
console.log(5 / 6);
let x = 5;
let y = 6;
console.log(x, y);
let alex = ""
//let user_input = prompt("enter something");
//console.log(typeof(user_input));

// A javascript comment starts with slash-slash and continues to the end of the line.
/* a multi-line comment starts with slash-star and continues until star-slash is found */

//This declares a function called hw.
function hw(name){
    console.log("Hello " + name);
} 

// you call a function by its name...  followed by parentheses.
//hw(prompt("please enter a name"));

//let user_input = prompt("please enter a name");
//hw(user_input)

if(undefined){
    console.log("truthy")
} else if(true){
    
} else {
    console.log("falsy")
}


// preconditions: function takes a single parameter, age
// print, based on the age, what the person can do.

function whatCanIDo(age){
    console.log("practice ")
}

let user_age = parseInt(prompt("how old are you"))
whatCanIDo(user_age)

function isLeap(year){
    if(year%4){ return false; }
    if(!(year%400)) {return true;}
    if(!(year%100)) {return false;}
    return true;
}













function name_of_function(parameter1, parameter2, parameter3) {
    console.log(parameter1)
    console.log(parameter2)
    console.log(parameter3)    
}









a = 5


if(a > 1)
{
    console.log("do something")
} else if (a > 2)
{
    console.log("do something else")
}









