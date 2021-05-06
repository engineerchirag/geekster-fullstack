// Context

// Problem 1

var a = 2;
var b = 3;
var obj = {
        a: 1,
        b: 2,
        childObj: {
                c: 3,
                add: function () {
                        console.log(this.a + ' ' + this.b + ' ' + this.c);
                }
        }
};

var sum = obj.childObj.add;
sum();


// Problem 2

console.log(this); // logs: Window

function logFunction() {
        console.log(this); // logs: Window because logFunction() is not a property of an object
}

logFunction();

// Problem 3

var obj = {
        a: 1,
        b: function () {
                console.log(this);
        }
}
obj.b(); //{a: 1, b: ƒ} Called with respect to obj 


// Problem 4

var obj = {
        a: 1,
        b: function () {
                console.log(this);
        }
};
obj.b(); //{a: 1, b: ƒ} Called with respect to obj 


// Problem 5

function f() {
        return this.a;
}

var g = f.bind({
        a: 'azerty'
});
console.log(g()); // azerty

var h = g.bind({
        a: 'yoo'
}); // bind only works once!
console.log(h()); // azerty

var o = {
        a: 37,
        f: f,
        g: g,
        h: h
};
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty