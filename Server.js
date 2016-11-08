var WebSocketServer = require('websocket').server;

var http = require('http');

var https = require('https');

var fs = require('fs');

var httpPort=80;

var httpsPort=443;

var options = {
key: fs.readFileSync('SelfSignedCertificates/key.pem'),
cert: fs.readFileSync('SelfSignedCertificates/cert.pem')
};

var http_server = http.createServer(function(request, response) {
                               console.log((new Date()) + ' Received HTTP request for ' + request.url);
                               response.writeHead(404);
                               response.end();
                               });

var https_server = https.createServer(options, function(request, response) {
                                      console.log((new Date()) + ' Received HTTP(S) request for ' + request.url);
                                      response.writeHead(404);
                                      response.end();
                                      });

var wsServer = new WebSocketServer({
                               httpServer: http_server,
                               autoAcceptConnections: false
                               });

var wssServer = new WebSocketServer({
                                    httpServer: https_server,
                                    autoAcceptConnections: false
                                    });

http_server.listen(httpPort, function() {
                   console.log((new Date()) + ' http Server is listening on port '+httpPort);
                   });

https_server.listen(httpsPort, function() {
                    console.log((new Date()) + ' https server is listening on port ' + httpsPort);
                    });

wsServer.on('request', function(request) {
            var connection = request.accept();
            console.log((new Date()) + 'WS Connection accepted.');
            connection.on('message', function(message) {
                          if (message.type === 'utf8') {
                          console.log('Received Message at ws-server: ' + message.utf8Data);
                          connection.sendUTF('Message received at ws-server:'+message.utf8Data);
                          }
                          });
            connection.on('close', function(reasonCode, description) {
                          console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected from ws-server');
                          });
            });

wssServer.on('request', function(request) {
            var connection = request.accept();
            
            console.log((new Date()) + ' WSS Connection accepted.');
            connection.on('message', function(message) {
                          if (message.type === 'utf8') {
                          console.log('Received Message at wss-server ' + message.utf8Data);
                          connection.sendUTF('Message received at wss-server:'+message.utf8Data);
                          }
                          });
            connection.on('close', function(reasonCode, description) {
                          console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected from wss-server');
                          });
            
            }); 
