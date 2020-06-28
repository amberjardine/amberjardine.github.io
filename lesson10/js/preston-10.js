/*document.addEventListener("DOMContentLoaded", function() {
    let speed = document.getElementById('windVal').innerHTML;
    let temp = document.getElementById('current-temp').innerHTML;
    let wind = document.getElementById('windchill');
    wind.innerHTML = buildWC(speed, temp);

    let banner = document.getElementById('checkAds');
    banner.innerHTML = checkAd();

    let cityId = 5604473;
    let forecast = document.getElementById('forecastData');
    forecast.innerHTML = cityForecast(cityId);
    
    
});*/

//toggles menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
function checkAd() {
    let dayName = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    let date = new Date();
    let checkDay = dayName[date.getDay()];
    if(checkDay === 'Friday') {
        document.getElementById('checkAds').style.display = "block";
    }
    else {
        document.getElementById('checkAds').style.display = "none";
    }
}

//Get last modified date and current year
document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('fullyear');
    display.innerHTML = year();

    let updated = document.getElementById('modified');
    updated.innerHTML = modified();
});

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
   
function year() {
    var today = new Date();
    
     return today.getFullYear();
    
}
function modified() {

    let daynames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Novemeber",
        "December"
    ];

    let d = new Date(document.lastModified);
    let dayName = daynames[d.getDay()];
    let monthName = months[d.getMonth()];
    let year = d.getFullYear();
    let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;

    return fulldate;
    
}





//Calculate Windchill
function buildWC(speed, temp) {
    
    let wcTemp = document.getElementById("current-temp").innerHTML;

    //Compute windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    //Round the answer down to integer
    wc = Math.floor(wc);

    //If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;

    //Display the windchill
    console.log(wc);
    //wcTemp.innerHTML = wc;

    return wc;
}

//Weather API
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1f3ebf09943a56765ce811a27bac5a31&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then ((jsObject) => {
        //console.log(jsObject);
        document.querySelector('#current-temp').textContent = Math.round(jsObject.main.temp);
        document.querySelector('#windVal').textContent = Math.round(jsObject.wind.speed);
        document.querySelector('#humidity').textContent = jsObject.main.humidity;
        
        var temp = jsObject.main.temp;
        var speed = jsObject.wind.speed;
        var wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        wc = Math.floor(wc);
        wc = (wc > temp) ? temp : wc;

        const condition = jsObject.weather[0].main;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        //document.getElementById('imagesrc').textContent = imagesrc;
        //document.getElementById('icon').setAttribute('src', imagesrc);
        //document.querySelector('#icon').setAttribute('alt', desc);
        document.getElementById('condition').textContent = condition;
        document.querySelector('#windchill').textContent = Math.round(wc);
    });



//function cityForecast(cityId) {
    const cityAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=1f3ebf09943a56765ce811a27bac5a31&units=imperial';

    fetch(cityAPI)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Network response was not OK');
        })
        .then(jsObject => {
            //console.log(jsObject);

            let forecastData = document.querySelector('#forecastData');
            let forecastDay = document.querySelector('#forecastDay');

            jsObject.list.forEach(element => {
                if(element.dt_txt.includes('18:00:00')) {
                    let forecastDays = document.createElement('th');
                    let tdata = document.createElement('td');
                    let image = document.createElement('img');
                    let temp = document.createElement('span');
                    let desc = document.createElement('span');
                

                image.setAttribute('src', 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png');
                image.setAttribute('alt', element.weather[0].description);

                temp.textContent = Math.round(element.main.temp) +  '°F';
                desc.textContent = element.weather[0].description;
                temp.append(desc);
                tdata.append(image,temp);
                forecastData.appendChild(tdata);

                forecastDays.textContent = dayOfWeek(element.dt_txt);
                forecastDay.append(forecastDays);
            }
            })
        })
            
function dayOfWeek(day) {
    let dayArray = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thur",
        "Fri",
        "Sat"
    ];
    let d = new Date(day);
    let dayName = dayArray[d.getDay()];
    let nameOfDay = `${dayName}`
    return dayName;
}