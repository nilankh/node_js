// require another module into another module
// require("./xyz.js")

// if you are exporting single funciton or varibale from there
// const calculateSum = require("./sum.js")

// if yiu have more than one thing which you are exporting
// const obj = require("./sum.js")

// there is one more way destructuring
// const {x, calculateSum} = require("./sum.js")

// var name = "nilank nikhil"
// var a = 10
// var b = 20
// console.log(name)
// console.log(a + b)

// if you are exporting single funciton or varibale from there
// calculateSum(a, b)

// if yiu have more than one thing which you are exporting
// obj.calculateSum(a, b)
// console.log(obj.x)


// there is one more way destructuring
// console.log(x)
// calculateSum(a,b)



// global is not a part of your v8 engine, global is outside and it is one of the superpower which is given to us by node.js 
// console.log(global)
// console.log(this) //empty object
// console.log(globalThis) // same global object
// console.log(globalThis == global)


// second way for importing when we define package.json, this is gonna be the future way
// import { calculateSum } from "./sum.js"

// var a = 10;
// var b = 20;
// calculateSum(a, b)

// import another module
// const {calculateMultiply} = require("./calculate/multiply.js")
// calculateMultiply(a, b)




// instead of importing from every other files
const {calculateSum, calculateMultiply} = require("./calculate")

calculateSum(100, 200)
calculateMultiply(20, 10)

// import json
const data = require("./data.json")
console.log(data)