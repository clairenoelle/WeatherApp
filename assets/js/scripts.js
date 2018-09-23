$(document).ready(function() {

    function getWeather(position) {
        var coords = position.coords;
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var URL = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;

        $.getJSON(URL, function(json) {
            var weather = JSON.stringify(json.weather[0].description);
            alert(weather);

            // weather = weather.replace(/\"/g, "");
            // $(".weathertype").html("weather");
            // var temp = JSON.stringify(json.main.temp);
            // $(".temperature").html("temp");
        });
    };

    function error(err) {
            alert("Geolocation is not allowed :(");
    };

    navigator.geolocation.getCurrentPosition(getWeather, error);

    });
