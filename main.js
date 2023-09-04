// let game= 'Sonic'; 

// console.log(game);  // Sonic

// function title() {
//     console.log(game)
// }
// title(); //Sonic

// if(true) {
//     console.log(`${game}`);
// };
///up above this shows how a global variable is avaialable everywhere
/// below we are going to do some local variables



// function a() {
//     let game = 'Sonic' //local variable
// }
// console.log(game);
//shows an error as game is not defined
//because game is not defined outside the function, it is only local

// /do this instead
// if(true) {
//     let game= 'Mario';
//     console.log(game);
// }

/// game can have two variables one glocally and one locally
//what is the benefit of local scope? security

// function hello( {
//     var greeting = 'hello';

// })
// console.log(greeting); error locally scoped trying to be called
//globally

// var x= 10;
// console.log(x);

// if(true) {
//     var x=2;
// console.log(x);
// }
// console.log(x);

//so the var has come out of the function to 
//replace my original var=10.
//you can fix this by using let 

// let x= 10;
// console.log(x);

// if(true) {
//     let x=2;
// console.log(x);
// }
// console.log(x);   //10 2 10   works

/////BACK TO THE TASK
//2.SCOPE IN JAVASCRIPT
///1-3.Implement a few functions showcasing the different scopes and access levels of variables



// function myFunction(){
//     let x= 36
// }
// console.log(x); 

//x is not defined because it is locally scoped
//or block scoped also. it is not available globally to change



// let y=33
// function yourFunction(){
//     return y + 3
// }
// console.log(yourFunction()); //36 

//this works because y is global and avail to the function returning a 
//33+3 when i call the function in the console.log


///3 Variable Hoisting
///3.1 Dive into.....
///3.2Grasp how variable and function declarations are moved to the
//top of their containing function or script

hello(); //written first with nothing else, this is undefined


function hello() {
    console.log("hello"); // hello

}
//so i invoked a function at the top on line 94 before the
//function was declared and it still works because of hoisting


// lion("Aslan");

// function lion(name) {
//     console.log(`The lions name os ${name}`);
// }
// this works because the delcaration of delcaring the function
//is moved to the top so you can invoke the function before
//it is even declared, below i will change the function delcaration to expression  
// to show that it does not work for function declarations

///3.3 Create a few examples inllustrating hoisting behavior with var, let and const 

// console.log(age);                              //age is not defined at first run 

// let age = 30;                                 //Cannot access 'age' before initialization
// console.log(age);                             //still giving me initilization errors


// let firstName= "paul";
// console.log(wholeName);
// let wholeName= (firstName + " " + lastName);   //cannot access wholeName before initialization

//the above examples show that variables cannot really be hoisted unless endefined and cannot be access until initialized. 



///4 Function Hoisting
///4.1 Learn from videos
///4.2 Understand the difference in hoisting behaviors between function declarations and function expressions
//function delcarations CAN be hoisted and expressions cannot  function myFunction=()  vs let ourFunction= function()
///4.3 Implement and test a few scenarios to validate your understanding

oceanColor("Turqoise");       //not defined at first

function oceanColor(color) {
   console.log(`The Ocean Water here is ${color}`)   
};
// The Ocean Water here is Turqoise//
// i call the function oceanColor with an argument of Turqoise in s string
// then i use a function declaration to create the function
//oceanColor with color as a parameter,,
//then the function will console.log the string plus
//pass in my argument for color that i called at the top.

//trying this with a function expression which shouldnt work. 
seaColor("Blue-Green")

let seaColor= function(color) {
    console.log(`The Sea Color here is ${color}`);
}
//main.js:150  Uncaught ReferenceError: Cannot access 'seaColor' before initialization
//i believe this is because the declaration has moved to the top but
//the assignent has not so it cannot read it? 



























