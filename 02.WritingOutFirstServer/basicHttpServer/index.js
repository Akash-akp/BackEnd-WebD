const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req,res) {
    console.log(req.url);
    res.writeHead(200,{'content-type':"text/html"});
    let targetFile;
    switch(req.url){
        case '/' : targetFile = './index.html'; break;
        case '/profile' : targetFile = './profile.html'; break;
        default : targetFile = './404.html'; break;
    }
    fs.readFile(targetFile,function(err,data){
        if(err){
            console.log("Error",err);
            res.end("<h1>Error</h1>");
            return;
        }
        return res.end(data);
    });
}

const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port",port);
})