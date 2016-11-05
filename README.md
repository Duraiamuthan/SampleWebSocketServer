# SampleWebSocketServer

A sample web socket server(Both Ws+Wss) which is powered by Node-JS.

Usign this one can easily build up the client part(iOS,Android or webapp) on websocket as it'll save lots of time for your development.

It's a sample which will create both WS(Web Socket) and WSS(WebSecuredSocket) Server and it'll properly emit the status of the web socket connection at any given moment and it'll echo the message that you sent to the server from client.

In order to work with WSS.

You either have to create your self signed certificate or use a certificate that is globally trusted.

If you already have a globally trusted one paste they key and cert in SelfSignedCertificates directory.

or else

Create the self signed one using the following command in terminal or command prompt

            openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 1001 -nodes
            
It'll prompt you for details like country,province etc...

But be careful about what you enter for **CommonName** it should be same as Domain Name or IP address of the URL. 

Make sure you are installing the certificate in the end point(iOS,Android device or browser) and trust it in the device locally

To do that just mail yourself the certificate and click on it to install.

FYI:
As of now in android without installing the certificate in the device also works but in iOS it won't.
