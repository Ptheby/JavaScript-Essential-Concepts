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



let y=33
function yourFunction(){
    return y + 3
}
console.log(yourFunction()); //36 
//this works because y is global and avail to the function returning a 
//33+3 when i call the function in the console.log

















