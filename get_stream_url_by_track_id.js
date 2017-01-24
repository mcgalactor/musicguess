// get password from config file
var pw = require('./config.js').pw();

// determine parameters
var nid = process.argv[2];

var PlayMusic = require('playmusic');
var pm = new PlayMusic();

pm.init({email: "freakpants@gmail.com", password: pw }, function(err) {
    if(err) console.error(err);

	pm.getStreamUrl(nid, function(err, streamUrl) {	
		var returnObject = [];
		returnObject.push({ streamUrl: streamUrl });
		console.log(JSON.stringify(returnObject));
	}); 
})
