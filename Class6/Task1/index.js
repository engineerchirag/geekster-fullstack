/*
This is an addition function using named function
*/

add();

function add() {
    // statement
    console.log("Addition");
}

/*
 Subtraction function using anonymous function
*/

var minus = function() {
    // statements
    console.log("Minus");
}

minus();


/*
 Multiply function using IIFE
*/

(function() {
 console.log('Multiply');
})();


var divide =  function (a, b) {
    var result = a/b;
    return result;
}

var result = divide(40, 5);
console.log(result);
