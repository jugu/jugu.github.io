var x = 'jugu'
var data = [
		{	
		"menu": {
			"title": "About Me",
			"content":{
				"text":""
			}
			}
		},
		{	
		"menu": {
			"title": "Interesting stuff",
			"content":{
				
			}
			}
		}
	]		
latlong = {"latitude":50,"longitude":50}
aboutMe()

function aboutMe() {
	
}
getLocation()
getWeather(latlong)
function getLocation() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {         
    }
}

function showPosition(position)
{
	latlong.latitude = position.coords.latitude;
	latlong.longitude = position.coords.longitude;
}

function getWeather()
{	
	/*key = "0ec0275ea15fd6c1017256c4be7e02a4";
	url = "http://api.openweathermap.org/data/2.5/weather?lat="+latlong.latitude+"&lon="+latlong.longitude+"&APPID="+key;
	$.get(
		url,
    {},
    function(data) {
		
        alert(data);  // "google.com"
    }
);*/
	
}