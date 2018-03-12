/* *************************************
*  Weather Site JavaScript Functions
************************************* */
// console.log('My javascript is being read.');

//Variables for Function Use
const temp = 31;
const speed = 5;
const direction = "North"; //Set your own value
let weather = "blizzard";
// Call Wind Chill Function
buildWC(speed, temp);
windDial(direction);
const condition = getCondition(weather);
console.log(condition);
changeSummaryImage(condition);

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
