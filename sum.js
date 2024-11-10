// Module protects their variables and functions from leaking byt default

// console.log('Sum module executed')
var x = "Hello World"

function calculateSum(a, b){
    const sum = a + b
    console.log(sum);
}

// // module.exports = calculateSum

// // suppose you want to expor both varibale and method
// // module.exports = {x:x, calculateSum:calculateSum}

// // new patter
module.exports = {x, calculateSum}



// IN ES MODULLE WHEN WE CREATE package.json and wirte {"type":"module"}
// export function calculateSum(a, b){
//         const sum = a + b
//         console.log(sum);
//     }


// other way of writing is
// what is module.exports? it is a empty object console.log(module.exports) => {}
// module.exports.x = x
// module.exports.calculateSum = calculateSum