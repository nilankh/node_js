// const fs = require("fs")
// const a = 100;

// setImmediate(() => console.log("setImmediate"))

// fs.readFile("./file.txt", "utf8", () => {
//     console.log("file reading cb")
// });

// setTimeout(() => console.log("Timer Expired"), 0);

// function printA() {
//     console.log("a:", a)
// }

// printA();
// console.log("Last line of the file.");



// second example

// const fs = require("fs")
// const a = 100;

// setImmediate(() => console.log("setImmediate"))

// Promise.resolve("Promise").then(console.log)

// fs.readFile("./file.txt", "utf8", () => {
//     console.log("file reading cb")
// });

// setTimeout(() => console.log("Timer Expired"), 0);
// process.nextTick(() => console.log("process.nextTick"));

// function printA() {
//     console.log("a:", a)
// }

// printA();
// console.log("Last line of the file.");



// third example
// const fs = require("fs")

// setImmediate(() => console.log("setImmediate"))

// setTimeout(() => console.log("Timer Expired"), 0);

// Promise.resolve("Promise").then(console.log)

// fs.readFile("./file.txt", "utf8", () => {
//     setTimeout(() => console.log("2nd Timer"), 0);

//     process.nextTick(() => console.log("2nd nextTick"));

//     setImmediate(() => console.log("2nd setImmediate"));
    
//     console.log("file reading cb");
// });

// process.nextTick(() => console.log("process.nextTick"));

// console.log("Last line of the file.");


// 4th example

const fs = require("fs")

setImmediate(() => console.log("setImmediate"))

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf8", () => {
    
    console.log("file reading cb");
});

process.nextTick(() =>{ 
    process.nextTick(() => console.log("Inner nextTick"))
    console.log("process.nextTick")
});

console.log("Last line of the file.");