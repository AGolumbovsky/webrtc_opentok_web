const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(function (req, res, next) {
    if(req.headers['x-forwarded-proto'] === 'https') {
      res.redirect('http://' + req.hostname + req.url);
    }
    else {
      next();
    }
});

app.use(express.static(__dirname + '/'));

app.listen(PORT, () => {
	
	console.log("here to listen, port " + PORT);

});