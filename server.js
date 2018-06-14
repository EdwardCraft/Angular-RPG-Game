//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.set('port', (process.env.PORT || 8080));

//app.use(express.static(__dirname + '/dist'));
app.use(express.static(path.resolve(__dirname,'src/angular-rpg')))

app.get('/', function(req,res) {   
	res.sendFile(path.join(__dirname+'/index.html'));
});

// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);

app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
});