// const getTotalFortuneOfTenRichest = (richPeople) => {
//     richPeople.sort(
//         (first, second) => first.money - second.money
//     );

//     let sum = 0;

//     for (let i = 0; i < richPeople.length; i++) {
//         sum += richPeople[i].money;

//         if (i >= 10) {
//             return sum;
//         }
//     }
// };

// const getTotalFortuneOfTenRichest1 = (richPeople) => (
//     [...richPeople]
//         .sort((first, second) => first.money - second.money)
//         .slice(0, 10)
//         .reduce((total, person) => total + person.money, 0)
// );

// // Map

// const doubleMap = numbers => {
//     const doubles = [];
//     for (let i = 0; i < numbers.length; i++) {
//         doubles.push(numbers[i] * 2);
//     }
//     return doubles;
// };
// var data = [2, 3, 4];
// console.log(doubleMap(data));
// console.log(data);


// const doubleMap1 = (numbers) => {
//     return numbers.map((item, i) => {
//         console.log("map >>", item, i);
//         return 2 * item;
//     });
// }

// console.log(doubleMap1(data));

// ************ Map **********

// const doubles = [];
// for (let i = 0; i < numbers.length; i++) {
//     doubles.push(numbers[i] * 2);
// }

// const doubleFn = (item, i) => {
//     console.log("arr map >>", item);
//     return 2 * item;
// };

// const arr = data.map(doubleFn);

// console.log("arr >> ", arr);


//****** Filter */

// var data = [2, 3, 4];
// const filterFn = (item) => {
//     if (item % 2 === 0) {
//         return true;
//     }
// };

// const filteredArr = data.filter(filterFn);

// console.log(filteredArr);


//****** Find */ 


// var data = [{
//     name: "Chirag",
//     fullName: "Chirag Goel",
//     age: "X"
// }, {
//     name: "Ram"
// }, {
//     name: "John"
// }, {
//     name: "Chirag",
// }];
// const findFn = (item, i) => {
//     if (item.name === "Chirag") {
//         return true;
//     }
// };

// const findNum = data.find(findFn);

// console.log(findNum);


// Reduce 

// var data = [2, 3, 4];
// const summation = numbers => {
//     const sum = [];
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     return sum;
// };

// const summation1 = numbers => numbers.reduce((accu, item) => accu + item, 0);

// console.log(summation1(data));

// var data = [{
//     name: "Chirag",
//     fullName: "Chirag Goel",
//     age: "X"
// }, {
//     name: "Ram"
// }, {
//     name: "John"
// }, {
//     name: "Chirag",
// }];
// ["Chirag", "Ram", "John", "Chirag"]

// const reduce2 = items => items.reduce((accu, item) => {
//     accu.push(item.name);
//     return accu;
// }, []);

// console.log(reduce2(data));


// Shared state and side effects

// const x = {
//     val: 2
// };
  
// const x1 = (m) => m.val = m.val + 1;

// const x2 = (m) => m.val = m.val * 2;

// console.log(x1(x));
// console.log(x2(x));

// console.log(x.val);

// Function composition

// f(g(x))

// const compose = function (fn1, fn2, f3) {
//     return  function (value) {
//         return fn3(fn2(fn1(value)));
//     };
// };
// const log = () => { 
//     // ... 
// };
// const mul = () => { 
//     // ... 
// };

// const output = compose(log, mul) (1);

// log(mul(1, 2));


// compose(f1, f2, f3, f3, f4) (1,2);


// const compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal);


// compose(console.log, Math.sqrt) (9);


// First-Class Functions

// // Assign function to a variable
// const square = function(x) {
//     return x * x;
// }
// // prints 25
// square(5);

// // Pass as parameter

// function formalGreeting() {
//     console.log("How are you?");
//   }
//   function casualGreeting() {
//     console.log("What's up?");
//   }
//   function greet(type, greetFormal, greetCasual) {
//     if(type === 'formal') {
//       greetFormal();
//     } else if(type === 'casual') {
//       greetCasual();
//     }
//   }
//   // prints 'What's up?'
//   greet('casual', formalGreeting, casualGreeting);
//   formalGreeting.data = "mydata";


//   // return functions

//   function sayHello() {
//     return function() {
//        console.log("Hello!");
//     }
//  }
 
//  console.log(sayHello());


//  // Higher-Order Functions

//  // Takes parameter as a function
// const isEven = (num) => num % 2 === 0;
// const result = [1, 2, 3, 4].filter(isEven);

// console.log(result); // [2, 4]

// // return a function
// function sayHello() {
//     return function() {
//        console.log("Hello!");
//     }
//  }

// // Currying

// const add2 = a => b => a + b;
// const result = add2(2)(3); // => 5


// const add3 = a => b => c => a + b + c;
// console.log(add3(1)(2)(3));


// const add3Partial = a => (b, c) => a + b + c;

// console.log(add3Partial(1)(2,3));








