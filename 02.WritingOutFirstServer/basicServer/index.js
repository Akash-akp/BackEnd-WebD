const http = require('http');
const fs = require('fs');
const port = 3000;

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{"content-type":"text/html"});
    fs.readFile("./index.html",function(err,data){
        if(err){
            console.log("Error",err);
            return res.end("Error!!!!");
        }
        return res.end(data);
    })
}

const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running in the port",port);
});