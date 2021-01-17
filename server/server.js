const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {isRealString, titleCase} = require('./utils/validation');
const {User} = require('./utils/users');

const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var users = new User();

app.use(express.static(publicPath));

io.on('connection', function(socket){
	socket.on('join', function(params, callback){
		if(!isRealString(params.DoctorName) || !isRealString(params.PatientName)) {
			return callback('Doctor Name and Patient Name are required');
		}

		var name = "";
		if (params.access == "Patient") {
			console.log("Entered Patient");
			name = params.PatientName;
		}
		else {
			console.log("Entered Doctor");
			name = params.DoctorName;
		}

		socket.join(params.PatientName);
		users.removeUser(socket.id);
		users.addUser(socket.id, name, params.PatientName);

		callback();
	});	

	socket.on('display image',function(data){
		console.log("reached");
		console.log(data);
		var user = users.getUser(socket.id);

		if (user) {
			console.log("entered");
			io.to(user.room).emit('image selected', data);
		}
	})
});


server.listen( port , function(){
	console.log('server is up on port 3000');
});
