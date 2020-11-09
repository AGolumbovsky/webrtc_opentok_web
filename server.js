const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();

app.use(express.static(__dirname + "/"));

console.log(process.cwd);

// var privateKey  = fs.readFileSync('/ssl/server.key');
// var certificate = fs.readFileSync(process.env.HOME + '/ssl/server.crt');

// var credentials = {key: privateKey, cert: certificate};


/*app.use(function (req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
      res.redirect('http://' + req.hostname + req.url);
    }
    else {
      next();
    }
  });*/
  
  

const HTTP_PORT = process.env.PORT || 8080;
// const HTTPS_PORT = process.env.PORT || 8443;

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

httpServer.listen(HTTP_PORT);
// httpsServer.listen(HTTPS_PORT)

/*app.listen(PORT, () => {
	
	console.log("here to listen, port " + PORT);

});*/