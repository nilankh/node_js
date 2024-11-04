
// line 2 or 3 will work in sync manner, reason is in common js by default it work in sync manner but when you create package.jso and defined type = module then it becomes async


const https = require("https");
const fs = require("fs")

console.log("Hello World");

var a = 107868;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully");
});


setTimeout(() => {
    console.log("Wait here for 5 seconds");
}, 5000);

// sync this funciton will actually block the main thread
// it will aslo offloads, but it will block the main thread, but how, because this is designed in a such a way
fs.readFileSync("./file.txt", "utf8");
console.log("this will only execute after file read")


// async
fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File Data", data)
})


function multiplyFunc(x, y) {
    const result = x * y;
    return result
}


var c = multiplyFunc(a, b)

console.log("REsult of multiplications is", c)