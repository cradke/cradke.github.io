/* *************************************
*  Weather Site JavaScript Functions
************************************* */
// console.log('My javascript is being read.');

//Variables for Function Use
//const temp = 31;
//const speed = 10;
//const direction = "N"; //Set your own value
//let weather = "rain";
// Call Wind Chill Function
//buildWC(speed, temp);
//windDial(direction);
//const condition = getCondition(weather);
//console.log(condition);
//changeSummaryImage(condition);


// Calculate wind chill temperature
function buildWC(speed, temp) {
    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;

    // Display the windchill
    console.log(wc);
    wc = 'Feels like ' + wc + '&deg;F';
    feelTemp.innerHTML = wc;
}

// Wind Dial Function
function windDial(direction){
    // Get the wind dial container
    const dial = document.getElementById("dial");

    // Determine the dial class
    switch (direction){
        case "North":
        case "N":
            dial.setAttribute("class", "n"); //"n" is the CSS rule selector
            break;
        case "NE":
        case "NNE":
        case "ENE":
            dial.setAttribute("class", "ne");
            break;
        case "NW":
        case "NNW":
        case "WNW":
            dial.setAttribute("class", "nw");
            break;
        case "South":
        case "S":
            dial.setAttribute("class", "s");
            break;
        case "SE":
        case "SSE":
        case "ESE":
            dial.setAttribute("class", "se");
            break;
        case "SW":
        case "SSW":
        case "WSW":
            dial.setAttribute("class", "sw");
            break;
        case "East":
        case "E":
            dial.setAttribute("class", "e");
            break;
        case "West":
        case "W":
            dial.setAttribute("class", "w");
            break;
    }

}

// Get weather condition
function getCondition(weather){
   weather = weather.toLowerCase();

    if (weather.includes("clear") ||
        weather.includes("sunny")){
        return "clear";
    }
    if (weather.includes("cloud")){
        return "clouds";
    }
    if (weather.includes("fog") ||
        weather.includes("mist")){
        return "fog";
    }
    if (weather.includes("rain") ||
        weather.includes("wet") ||
        weather.includes("drizzle") ||
        weather.includes("shower") ||
        weather.includes("overcast")){
        return "rain";
    }
    if (weather.includes("snow") ||
        weather.includes("blizzard") ||
        weather.includes("flurry")){
        return "snow";
    }
}

function changeSummaryImage(condition){
    // Get the curWeather container
   const curWeather =  document.getElementById("curWeather");

    switch (condition){
        case "clear":
            curWeather.setAttribute("class", "clear");
            break;
        case "clouds":
            curWeather.setAttribute("class", "clouds");
            break;
        case "fog":
            curWeather.setAttribute("class", "fog");
            break;
        case "rain":
            curWeather.setAttribute("class", "rain");
            break;
        case "snow":
            curWeather.setAttribute("class", "snow");
            break;
    }
}

// Get Data from API
function getData(LOCALE) {
    const WU_API_KEY = 'd11c9a416ad5a2b9';
    const URL = "https://api.wunderground.com/api/" + WU_API_KEY + "/conditions/forecast/hourly/q/" + LOCALE + ".json";
    fetch(URL)
        .then(response => response.json())
        .then(function (data) {
        console.log('Json object from getData function:');
        console.log(data);
        displayData(data);
    })
        .catch(error => console.log('There was an error: ', error))
} // end getData function

function displayData(data) {
    // Populate the current location weather page
    const TEMP = data.current_observation.temp_f;
    console.log(TEMP);

    const SPEED = data.current_observation.wind_mph;
    console.log(SPEED);

    const DIRECTION = data.current_observation.wind_dir;
    console.log(DIRECTION);

    const WEATHER = data.current_observation.weather;
    console.log("weather " + WEATHER);


    // Task 1 - Feed data to WC, Dial and Image functions
    buildWC(SPEED, TEMP);

    windDial(DIRECTION);

    const CONDITION = getCondition(WEATHER);
    console.log("condition " + CONDITION);

    changeSummaryImage(CONDITION);

    const HIGH = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    console.log("highTemp" + HIGH);
    highTemp.innerHTML = HIGH + "°F";


        // Task 2 - Populate location information
    const CITY = data.current_observation.display_location.full;
    console.log(CITY);
    city.innerHTML = CITY;

    const ZIP = data.current_observation.display_location.zip;
    console.log(ZIP);
    zip.innerHTML = ZIP;

    const ELEVATION = data.current_observation.display_location.elevation;
    console.log(ELEVATION);
    elevation.innerHTML = ELEVATION + "ft.";

    const LATITUDE = data.current_observation.display_location.latitude;
    const LONGITUDE = data.current_observation.display_location.longitude;
    console.log(LATITUDE + LONGITUDE);
    a.innerHTML = LATITUDE + " " + LONGITUDE;

    currentTemp.innerHTML = Math.round(TEMP) + "°F";

    windSpeed.innerHTML = SPEED + " mph";

    windD.innerHTML = DIRECTION;

    const GUST = data.current_observation.wind_gust_mph;
    console.log(GUST);
    gusts.innerHTML = GUST + " mph";

    videoHeading.innerHTML = WEATHER;


        // Task 4 - Hide status and show main
    document.getElementById("main").className = "show";
    document.getElementById("status").className = "hide";



}
