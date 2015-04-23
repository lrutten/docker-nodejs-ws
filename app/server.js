// Source: https://github.com/einaros/ws
 
var WebSocketServer = require('ws').Server
, wss = new WebSocketServer({ port: 8080 });
 
wss.on('connection', function connection(ws) 
{
   ws.on('message', function incoming(message) 
   {
      console.log('received: %s', message);
   });
 
   ws.send('something');
}); 


// static webserver
// Source: https://www.npmjs.com/package/node-static

var static = require('node-static');
 
var fileServer = new static.Server('/root');
 
require('http').createServer(function (request, response) 
{
    request.addListener('end', function () 
    {
        fileServer.serve(request, response);
    }).resume();
}).listen(80);


console.log('Listening on port 80.');





