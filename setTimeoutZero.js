console.log("Hello World")

var a = 32131232;
var b = 1231232;


// settimeout for 0sec
setTimeout(() => {
    console.log("Call kro jldi");
}, 0);



setTimeout(() => {
    console.log("Call kro 3second baad");
}, 3000);

function multiplyFunc(x, y) {
    const result = x * y;
    return result
}


var c = multiplyFunc(a, b)

console.log("REsult of multiplications is", c)