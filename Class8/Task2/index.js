// Closures

function greet() {
    var name = 'Hammad';
    return function () {
        console.log('Hi ' + name);
    }
}

greet(); // nothing happens, no errors

// the returned function from greet() gets saved in greetLetter
var greetLetter = greet();

 // calling greetLetter calls the returned function from the greet() function
greetLetter();