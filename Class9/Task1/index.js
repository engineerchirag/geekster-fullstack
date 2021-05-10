//  Return a number
function sum (a, b) {
    return a + b;
}

const sum1 = (a, b) => a + b;

//  Return an object

const bioData = () => ({
    firstName: "Chirag",
    lastName: "Goel",
});

function bioData () {
    return {
        firstName: "Chirag",
        lastName: "Goel",
    };
}

//  Return a number, with debug
function sum (a, b) {
    console.log(a, b);
    return a + b;
}

const sum1 = (a, b) => {
    console.log(a, b);
    return a + b;
}

// Return string

function hello () {
    return  "Hi";
}

const hello1 = function () {
    return  "Hi";
};

const hello2 = (value) => console.log(value);

hello2();



