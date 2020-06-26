document.addEventListener("DOMContentLoaded", function() {
    let speed = document.getElementById('windVal').innerHTML;
    let temp = document.getElementById('current-temp').innerHTML;
    let wind = document.getElementById('windchill');
    wind.innerHTML = buildWC(speed, temp);

    let banner = document.getElementById('checkAds');
    banner.innerHTML = checkAd();

    
});

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
        document.getElementsById('checkAds').style.display = "block";
    }
    else {
        document.getElementById('checkAds').style.display = "none";
    }
}

//Get last modified date and current year
function dates() {
   

    var today = new Date();
    
    document.getElementById("fullyear").innerHTML = today.getFullYear();

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

    //return fulldate;
    document.getElementById("modified").textContent = fulldate;
    
}
//window.onload = dates;





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
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1f3ebf09943a56765ce811a27bac5a31&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then ((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = jsObject.main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.querySelector('#icon').setAttribute('alt', desc);
    });