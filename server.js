var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){ 
	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('hello.txt', function(err, data){
		if(err){
			res.writeHead(404);
			res.write('Error: File Not Found');
		}else{
			res.write(data); 
		}
		res.end();
	});
});
server.listen(3000);
console.log('Server running at http://localhost:3000/');