var http = require('http');

http.createServer(function(req, res) {

    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch(path) {
        // localhost:3000
        case '': 
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('Home Page from Node JS Runtime');
            break;
        // localhost:3000/about
        case '/about' :
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('About Page from Node JS Runtime');
            break;
        // localhost:3000/contact
        case '/contact' :
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('Contact us at xxx-xxx-xxxx');
            break;
        // localhost:3000/<anything else> 
        default:
            res.writeHead(404, {'content-type': 'text/plain'});
            res.end('Page Not Found');
            break;    
    }
}).listen(3000);

console.log('server started successfully. Please type CNTRL-C to terminate it');