const http = require('http');  // import http module
const port = 8000;  // port in which you want to host
const fs = require('fs');  // fs is imported due to use of readFile

function requestHandler(req,res) {
    console.log(req.url);
    res.writeHead(200,{'content-type':"text/html"});
    let targetFile;
    switch(req.url){ // depend on req.url targetFile is set
        case '/' : targetFile = './index.html'; break;
        case '/profile' : targetFile = './profile.html'; break;
        default : targetFile = './404.html'; break;
    }
    fs.readFile(targetFile,function(err,data){  //readFile is imported from fs library
        if(err){
            console.log("Error",err);
            res.end("<h1>Error</h1>");
            return;
        }
        return res.end(data);
    });
}

const server = http.createServer(requestHandler);   // Server created

server.listen(port,function(err){   // server listener
    if(err){  // if error arrises then print err and return
        console.log(err);
        return;
    }
    console.log("Server is up and running on port",port);  // else print server is running
})