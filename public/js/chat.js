var socket = io();

$( window ).load(function() {
	var params = jQuery.deparam(window.location.search);

	if(params.access == "Patient") {
		$('#ButtonContainer').hide();
		$('#DisplayContainer').addClass('col s12 center');
	}
});

socket.on('connect', function() {
	var params = jQuery.deparam(window.location.search);

	socket.emit('join', params, function(err){
		if (err) {
			alert(err);
			window.location.href = '/';
		} else {
			console.log('No error');
		}
	});
});

socket.on('disconnect', function(){
	console.log('disconnected from server');
});

socket.on('image selected', function(message){
	console.log("got here");
	var newsrc = "./img/" + message.imgname;
	console.log(newsrc);
	$('#displayimg').attr('src', newsrc);
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function(){
	socket.emit("button");
});

$('#row1').on('click', function(){
	console.log("button clicked");
	socket.emit('display image', {'imgname': 'row1.png'});
})

$('#row2').on('click', function(){
	console.log("button clicked");
	socket.emit('display image', {'imgname': 'row2.png'});
})

$('#row3').on('click', function(){
	console.log("button clicked");
	socket.emit('display image', {'imgname': 'row3.png'});
})

$('#row4').on('click', function(){
	console.log("button clicked");
	socket.emit('display image', {'imgname': 'row4.png'});
})

$('#row5').on('click', function(){
	console.log("button clicked");
	socket.emit('display image', {'imgname': 'row5.png'});
})

$('#row6').on('click', function(){
	console.log("button clicked");
	socket.emit('display image', {'imgname': 'row6.png'});
})

$('#row7').on('click', function(){
	console.log("button clicked");
	socket.emit('display image', {'imgname': 'row7.png'});
})

$('#row8').on('click', function(){
	console.log("button clicked");
	socket.emit('display image', {'imgname': 'row8.png'});
})

$('#row9').on('click', function(){
	console.log("button clicked");
	socket.emit('display image', {'imgname': 'row9.png'});
})

$('#row10').on('click', function(){
	console.log("button clicked");
	socket.emit('display image', {'imgname': 'row10.png'});
})

$('#row11').on('click', function(){
	console.log("button clicked");
	socket.emit('display image', {'imgname': 'row11.png'});
})


$('#row2').on('click', function(){
	socket.emit('display image', {'imgname': 'row2.png'});
})

$('#row3').on('click', function(){
	socket.emit('display image', {'imgname': 'row3.png'});
})

$('#row4').on('click', function(){
	socket.emit('display image', {'imgname': 'row4.png'});
})

$('#row5').on('click', function(){
	socket.emit('display image', {'imgname': 'row5.png'});
})

$('#row6').on('click', function(){
	socket.emit('display image', {'imgname': 'row6.png'});
})

$('#row7').on('click', function(){
	socket.emit('display image', {'imgname': 'row7.png'});
})

$('#row8').on('click', function(){
	socket.emit('display image', {'imgname': 'row8.png'});
})

$('#row9').on('click', function(){
	socket.emit('display image', {'imgname': 'row9.png'});
})

$('#row10').on('click', function(){
	socket.emit('display image', {'imgname': 'row10.png'});
})

$('#row11').on('click', function(){
	socket.emit('display image', {'imgname': 'row11.png'});
})