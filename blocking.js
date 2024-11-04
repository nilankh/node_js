// const crypto = require("node:crypto")
// line 1 is also a way to write in means node has module called crypto
const crypto = require("crypto")

console.log("Hello World")

var a = 2321321;
var b = 321333;



// this is sync way, it will block the main thread and you will see these thing will have never callback, never use
crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("First key is generated")

setTimeout(() => {
    console.log("Call kro jldi");
}, 0);// this will only be callled once call stack main thread is empty.



// this is also offloads to libuv
// this is async , pbkdf -> password base key derivative function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Second Key is generated", key);
})

function multiplyFunc(x, y) {
    const result = x * y;
    return result
}


var c = multiplyFunc(a, b)

console.log("REsult of multiplications is", c)