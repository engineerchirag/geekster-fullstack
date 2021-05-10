// Data Types

//string
let string = 'ASCII text';
//int
let integer = 123456789;
//float
let float = 123.456;
//boolean, can be true or false
let t = true;
let f = false;
//undefined
let undef; //defaults to undefined
let undef = undefined; //not common, use null
//null
let nul = null;
//array
let arr = ['Hello', 'my', 'name', 'is', 'Dr.Hippo', 123, null];
//object
let person = {
    'name': 'John Smith',
    'age': 27
};


// Conditions

// ************************

if (hour < 18) {
    greeting = "Good day";
}

// ************************

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// ************************

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// ************************

var x = 2;
switch (x) {
    case 1: {
        console.log(1);
        break;
    }
    case 2: {
        console.log(2);
        break;
    }
    default: {
        console.log("default");
    }
}

// Loops

// ************************
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// ************************

var person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

var text = "";
var x;
for (x in person) {
    text += person[x];
}

// ************************

let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
    text += x + "<br>";
}

// ************************

var i = 0;
do {
    text += "The number is " + i;
    i++;
}
while (i < 10);

// ************************
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}