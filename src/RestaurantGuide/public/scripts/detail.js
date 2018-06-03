

function openImg(img) {
	var image = new Image();
	image.src = img;
	var width = image.width;
	var height = image.height;
	var top = (window.screen.availHeight- height) / 2;
	var left = (window.screen.availWidth - width) / 2;
	var win = window.open(img, "Image Page", "width=" + width + ",height=" + height  + ",top=" + top + ",left=" + left );//+ ",toolbar=no, menubar=no, scrollbars=no, resizable=yes, location=no, status=no, alwaysRaised=yes,depended=yes");
}
	
$(function(){ 
	
	// var camera = document.getElementById('camera');
	// var frame = document.getElementById('frame');
	// camera.addEventListener('change', function(e) {
	// 	var file = e.target.files[0];
	// // Do something with the image file.
	// 	//alert(file);
	// 	if (!file) {
	// 		$('#camera').val('');
	// 		$('#camera').attr('src','');
	// 		$('#frame').attr('src','');
	// 	} else {
	// 		if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
	// 			alert("Only image file is allowed");
	// 			$('#camera').val('');
	// 			$('#camera').attr('src','');
	// 			$('#frame').attr('src','');
	// 		} else {
	// 			$('#frame').attr('src',URL.createObjectURL(file));
	// 		}
	// 	}
	// });
	
	// $('#btnClear').click(function(e) {
	// 	$('#camera').attr('src','');
	// 	$('#camera').val('');
	// 	$('#frame').attr('src','');
	// });
		
	// $('#btnClearPhoto').click(function(e) {
	// 	$('#info').text('No photo captured.');
	// 	$('#snapshot').css('display','none');
	// 	$('#player').css('display','none');
	// });
		
	$('#btnEnable').click(function(e) {
		
		$('#player').show('fast');
		$('#snapshot').show('fast');
		var player = document.getElementById('player'); 
		var snapshotCanvas = document.getElementById('snapshot');
		var captureButton = document.getElementById('btnCapture');
		var videoTracks;
		
		var handleSuccess = function(stream) {
			// Attach the video stream to the video element and autoplay.
			player.srcObject = stream;
			videoTracks = stream.getVideoTracks();
		};
		
		captureButton.addEventListener('click', function() {
			//alert(snapshotCanvas.toDataURL());
			$('#info').text('Photo saved!');
			var context = snapshot.getContext('2d');
			context.drawImage(player, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
			
			// Stop all video streams.
			videoTracks.forEach(function(track) {track.stop()});
		});
		
		navigator.mediaDevices.getUserMedia({video: true}).then(handleSuccess);
		
	});
	

	// Map enabled
    if (window.navigator.geolocation) {
        var geolocation = window.navigator.geolocation;
        geolocation.getCurrentPosition(
            returnSuccess, returnError, {
                timeout: 6000
            });
    } else {
        info.innerHTML = "Your broswer doesn't support map function. Please change to other browsers.";
    }
	//}
    function returnError(error) {
        switch (error.code) {
            case error.POSITION_UNAVAILABLE:
                info.innerHTML = "Unable to provide the location service. Please check the network connection.";
                break;
            case error.PERMISSION_DENIED:
                info.innerHTML = "You don't have enough authority to use the location function.";
                break;
            case error.TIMEOUT:
                info.innerHTML = "Connection timeout. Please check the network connection. Google Map can't be used.";
                break;
        }
    }

    function returnSuccess(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var latLng = new google.maps.LatLng(lat, long);
        var locations = [
            ['Firepit', 53.381021, -1.476363, 1]
        ];

        var locations1 = $("#locationDetail").val();
        var tmp = locations1.split(',');
        // var tmp = tmp[i].split(',');

        var markers = [];
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var mapInfoWindow = new google.maps.InfoWindow;
        var marker, i;
        // for (i = 0; i < locations.length; i++) {
        //     marker = new google.maps.Marker({
        //         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        //         map: map,
        //         label: String(locations[i][3])
        //     });
        //     markers.push(marker);
        //     google.maps.event.addListener(marker, 'click', (function (marker, i) {
        //         return function () {
        //             mapInfoWindow.setContent(locations[i][0]);
        //             mapInfoWindow.open(map, marker);
        //         }
        //     })(marker, i));
        // }
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(tmp[1], tmp[2]),
                map: map,
                label: String(tmp[3])
            });
            markers.push(marker);
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    mapInfoWindow.setContent(tmp[0]);
                    mapInfoWindow.open(map, marker);
                }
            })(marker, i));
        }

    }

	$('#btnEnlarge').click(function(e) {
		var width = 800;
		var height = 600;
		var top = (window.screen.availHeight - 30 - height) / 2;
		var left = (window.screen.availWidth - 10 - width) / 2;
		var win = window.open("map"+"?lat=53.381021&long=-1.476363", "Enlarged Map", "width=" + width + ", height=" + height + ",top=" + top + ",left=" + left + ",toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no,alwaysRaised=no,depended=no");
	});
	
});
