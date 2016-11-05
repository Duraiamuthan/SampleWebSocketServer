# SampleWebSocketServer

A sample web socket server(Both Ws+Wss) which is powered by Node-JS.

Usign this one can easily build up the client part(iOS,Android or webapp) on websocket as it'll save lots of time that you'll spend on server part.

It's a sample which will create both WS(Web Socket) and WSS(WebSecuredSocket) Server and it'll properly emit the status of the web socket connection at any given moment and it'll echo the message that you send to the server from client.

In order to work with WSS.

You either have to create your self signed certificate or use a certificate that is globally trusted.

If you already have a globally trusted one paste they key and cert in SelfSignedCertificates directory.

or else

Create the self signed one using the following command in terminal or command prompt

            openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 1001 -nodes
            
It'll prompt you for details like country,province etc...

But be careful about what you enter for *CommonName* it should be same as Domain Name or IP address of the URL. 

Make sure you are installing the certificate in the end point(iOS,Android device or browser) and trust it in the device locally

To do that just mail yourself the certificate and click on it to install.

**FYI:**
As of now for android without installing the certificate in the device also it works but in iOS it won't.
You have to install the certificate only if it is self signed certificate

**Monitoring the WebSocketTraffic**

There is a proxy server called *Charles* which lets you easily monitor  web socket traffice.

Find my answers on stack overflow on how to monitor

http://stackoverflow.com/a/39916796/730807

http://stackoverflow.com/a/39898741/730807
