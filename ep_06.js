// synchronous
// these task can execute immediately
var a = 107868;
var b = 20986;

function multiplyFunc(x, y) {
    const result = x * y;
    return result
}


var c = multiplyFunc(a, b)


// asynchronous
// these task takes time to execute
https.get("https://api.fbi.com", (res) => {
    console.log("secret data: " + res.secret);
});

fs.readFile("https://gossip.txt", "utf8", (data) => {
    console.log("File Data", data)
})

setTimeout(() => {
    console.log("Wait here for 5 seconds");
}, 5000);