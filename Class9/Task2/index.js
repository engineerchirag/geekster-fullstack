// Spread 
const arr = ["a", "b", "c"];


const arr1 = arr;
arr1[0] = "d";
console.log("1.", arr, arr1);


const arrCopy = arr.slice();
arrCopy[0] = "Hi";
console.log("2.", arr, arrCopy);


const arrCopy1 = [...arr];
arrCopy1[0] = "Bye";
console.log("2.", arr, arrCopy1);


// Rest

const [first, second, ...arr2] = ["a", "b", "c", "d"];
console.log("3.", first, second, arr2);
