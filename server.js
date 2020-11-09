const express = require('express');
const fs = require('fs');
// const http = require('http');
const https = require('https');

const app = express();

var privateKey  = fs.readFileSync(process.env.HOME + '/ssl/server.key');
var certificate = fs.readFileSync(process.env.HOME + '/ssl/server.crt');

var credentials = {key: privateKey, cert: certificate};


/*app.use(function (req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
      res.redirect('http://' + req.hostname + req.url);
    }
    else {
      next();
    }
  });*/
  
  app.use(express.static(__dirname + '/'));
  

// const HTTP_PORT = process.env.PORT || 8080;
// const HTTPS_PORT = process.env.PORT || 8080;

// var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

// httpServer.listen(8080);
httpsServer.listen(8443)

/*app.listen(PORT, () => {
	
	console.log("here to listen, port " + PORT);

});*/