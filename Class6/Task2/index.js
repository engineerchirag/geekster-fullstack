// Array operations
var ticketLine =  ["Ram", "Tom", "Child", "Jerry", "Mohit"];

var a = ticketLine.shift();
console.log("Shift > ", a, ticketLine);

var b = ticketLine.push("Amit");
console.log("Push > ", b, ticketLine);


var c = ticketLine.unshift("VIP");
console.log("Unshift > ", c, ticketLine);

var d = ticketLine.pop();
console.log("Pop > ", d, ticketLine);

var e = ticketLine.indexOf("Child");
console.log("IndexOf > ", e, ticketLine);

var f = ticketLine.splice(e, 1, "Adult");
console.log("Splice > ", f, ticketLine);

var g = ticketLine.slice(e, 4);
console.log("Slice > ", g, ticketLine);


// String operations
var myName  = "Chirag Goel";
var h = myName.split(" ");
var i = h.join(",");
console.log("Split > ", h, i);



