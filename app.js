console.log("Hello World from Node JS");

// use require with file system

const fs = require('fs');

fs.appendFile('myfile.txt', 'Hello from NODE JS', function(err) 
{
    if(err)
        console.log("could not append to the file");
    else
        console.log("file appended succesfully");
});

// user require with http

var http = require('http');
http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type': 'text/plain'} );
    res.end('Hello World from Node JS using HTTP');
}).listen(3000);

console.log('server started successfully. Please type CNTRL-C to terminate it');
