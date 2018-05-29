var camera1 = document.getElementById('camera1');
	var frame1 = document.getElementById('frame1');
	camera1.addEventListener('change', function(e) {
		var file = e.target.files[0]; 
	// Do something with the image file.
		//alert(file);
		if (!file) {
			$('#camera1').val('');
			$('#camera1').attr('src','');
			$('#frame1').attr('src','');
		} else {
			if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
				alert("Only image file is allowed");
				$('#camera1').val('');
				$('#camera1').attr('src','');
				$('#frame1').attr('src','');			
			} else {				
				$('#frame1').attr('src',URL.createObjectURL(file));
			}
		}
	});
	
	$('#btnClear1').click(function(e) {
		$('#camera1').attr('src','');
		$('#camera1').val('');
		$('#frame1').attr('src','');
	});
	
	var camera2 = document.getElementById('camera2');
	var frame2 = document.getElementById('frame2');
	camera2.addEventListener('change', function(e) {
		var file = e.target.files[0]; 
	// Do something with the image file.
		//alert(file);
		if (!file) {
			$('#camera2').val('');
			$('#camera2').attr('src','');
			$('#frame2').attr('src','');
		} else {
			if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
				alert("Only image file is allowed");
				$('#camera2').val('');
				$('#camera2').attr('src','');
				$('#frame2').attr('src','');			
			} else {				
				$('#frame2').attr('src',URL.createObjectURL(file));
			}
		}
	});
	
	$('#btnClear2').click(function(e) {
		$('#camera2').attr('src','');
		$('#camera2').val('');
		$('#frame2').attr('src','');
	});

	$('#btnClearPhoto').click(function(e) {
		$('#info').text('No photo captured.');
		$('#snapshot').css('display','none');
		$('#player').css('display','none');
	});	
	
	var player = document.getElementById('player'); 
	var snapshotCanvas = document.getElementById('snapshot');
	var captureButton = document.getElementById('btnCapture');
	var videoTracks;
	var enableButton = document.getElementById('btnEnable');
	
	enableButton.addEventListener('click', function() {
		$('#btnEnable').attr('disabled');
		$('#player').show('fast');
		$('#snapshot').show('fast');
		//show_confirm();
		var handleSuccess = function(stream) {
			// Attach the video stream to the video element and autoplay.
			player.srcObject = stream;
			videoTracks = stream.getVideoTracks();
		};
		
		navigator.mediaDevices.getUserMedia({video: true}).then(handleSuccess);
		
	});
	
	captureButton.addEventListener('click', function() {
		//alert(snapshotCanvas.toDataURL());
		var context = snapshotCanvas.getContext('2d');
		context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);		
		$('#info').text('Photo saved!');
		// Stop all video streams.
		videoTracks.forEach(function(track) {track.stop()});
	});
	
	$('#snapshot').click(function(e) {
		show_confirm();
	});
	function show_confirm() {
		var reply = confirm("Will you use the picture?");
		if(reply == true){
			var replyOneTwo = confirm("Will you take a picture as picture one or two? Yes - one. No - two.");
			if(replyOneTwo == true){				
				$('#frame1').attr('src', snapshotCanvas.toDataURL());
			} else {
				$('#frame2').attr('src', snapshotCanvas.toDataURL());
			}
		}		
	}

	var geocoder; 
	var map; 
	var latRest;
	var longRest;
	
	function errHandler(error){ 
		var errorTypes={ 
			1:'Location service is refused', 
			2:'Cannot find the location', 
			3:'Time out' 
		}; 
		alert(errorTypes[error.code] + ":,cannot locate your position"); 
	} 
	
	$('#btnFindMap').click(function(e) {
		if($('#address').val()==''){
			alert('The address cannot be empty');
		} else {
			$('#map_canvas').show('slow');
			navigator.geolocation.getCurrentPosition(codeAddress,errHandler,null);			
		}
	});
	
	
	//searchMap();
	function searchMap(position) { 
		var coords = position.coords; 
		geocoder = new google.maps.Geocoder(); 
		var latlng = new google.maps.LatLng(coords.latitude, coords.longitude); 
		var myOptions = { 
			zoom: 12, 
			center: latlng, 
			mapTypeId: google.maps.MapTypeId.ROADMAP 
		} 
		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
	} 	
	
	function codeAddress(position) { 
		searchMap(position);
		var address = document.getElementById("address").value; 		
		geocoder.geocode( { 'address': address}, function(results, status) { 
			if (status == google.maps.GeocoderStatus.OK) { 
				console.log(results[0].geometry.location) 
				map.setCenter(results[0].geometry.location); 
				this.marker = new google.maps.Marker({ 
					title:address, 
					map: map,  
					position: results[0].geometry.location 
				}); 
				
				$('#lat').val(results[0].geometry.location.lat());
				$('#long').val(results[0].geometry.location.lng());
				
				var infowindow = new google.maps.InfoWindow({ 
					content: '<strong>'+address+'</strong><br/>'+'latitude: '+results[0].geometry.location.lat()+'<br/>longitude: '+results[0].geometry.location.lng() 
				}); 
					infowindow.open(map,marker); 
			} else { 
				alert("Geocode was not successful for the following reason: " + status); 
			} 
		}); 	
		
	} 