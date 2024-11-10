// require(".xyz.js")

const { calculateSum } = require("./calculate")

// // how node js require works under the hood
// // function (){
// //     // all the code of this module will be run inside this function
// // }

// // all the code of the module is wrapped inside a function (IIFE)

// (function () {

// })()


// require("./path")
// all the code of the module is wrapped inside a function(IIFE)

// IIFE -> Immediately Invoked Function Expression

// (function(module, require){
//     // require("./path")
//     function calculateSum(a, b){
//         result = a + b
//         console.log(result)
    // }

    // module.exports = {calculateSum}
// })()
