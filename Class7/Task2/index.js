// var a = 1;
// console.log(a);

// var a;
// a = 1;
// console.log(a);

// /////////////////////

// console.log(b);
// var b = 1;

// var b;
// console.log(b);
// b = 1;

// var a;
// var b;
// var c;
// a = 1;
// b = 2;

// console.log(a + " " + b + " " + c);

// c = 3;

// var tmp = 10;
// function func(){ 
//     var tmp;
//     console.log("1.", tmp);
//     if(true){
//         tmp = 12;
//     }
//     console.log("2.", tmp);
// }
// func();



// function myFunc(name){
//     return name;
// }
// console.log(myFunc);
// console.log(myFunc('XYZ'));

// a = 1;
// console.log('1',a);
// let a;
// console.log('2', a);

//Temporal dead zone
// if (true) {
//     console.log(b)
//     console.log(a);
//     // statement1
//     // statement2
//     // statement3
//     // statement4
// 	let a = 10;
//     var b = 20;
// }
// console.log(a);

// function discountPrices (prices, discount) {
//     let discounted = []
  
//     for ( let i = 0; i < prices.length; i++) { // 5
//       let discountedPrice = prices[i] * (1 - discount) // 10
//       let finalPrice = Math.round(discountedPrice * 100) / 100 //20
//       discounted.push(finalPrice)
//     }

  
//     console.log(i)
//     console.log(discountedPrice)
//     console.log(finalPrice)
  
//     return discounted
//   }
  
//   discountPrices([100, 200, 300], .5)
//   console.log(discounted);



// function abc () {
//     console.log(a);
//     a = 1;
// }