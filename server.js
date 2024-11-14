const http = require("http");

const server = http.createServer(function(req, res) {

    if(req.url === "/getSecretData"){
        res.end("You are in darkweb tadaa!! Welcome")
    }
    // whoever coming to my server reply to them jai bajrangbali
    res.end("JAI BAJRANG BALI")

    

});

server.listen(8000);
