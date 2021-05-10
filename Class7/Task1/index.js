var g = "global";
console.log("global >> ", g);

function outer () {
    var o = "outer";
    console.log("outer >> ", g, o);
    function inner (data) {
        var i = "inner";
        console.log("inner >> ", g, o, i, data);
    }
    inner("tadada");
}

function anotherOuter() {
    var ao = "anotherOuter";
    console.log("anotherOuter >> ", g, ao);
}

anotherOuter();

outer();