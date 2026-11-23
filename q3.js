function checkscope(){
    if(true){
        var x=10;
        let y=20;
    }
    //prediction: x prints 10
    console.log("x=",x);
    //actual x=10

    //prediction:y gives an error because y is block scoped and cannot be accessed outside the if block
    try{
        console.log("y=",y);
    }
    catch(error){
        console.log("error:",error.message);
    }
// actual: error: y is not defined
}
checkscope();
// experiment with variable
// prints undefined noerror because of hoisting
console.log(a);
//actual undefined
var a=5;

//experiment with let
//prediction: gives an error
try{
    console.log(b);
}
catch(error){
    console.log("error:",error.message);
}
// actual: error can not be accessed before initialization
let b=5;
//var has function scope, so x is visible anywhere inside the function even after the if block ends. let has block scope, so y lives only inside the { } where it was made, and outside it gives an error. With hoisting, JavaScript moves the var declaration to the top, so using a early gives undefined; let is also hoisted but locked until its line runs, so using b early gives an error.