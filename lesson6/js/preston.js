function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
function banner() {
    let date = new Date();
    let dateCheck = dayName[date.getDay()];
    if (dateCheck === [5]) {
        document.getElementById("friday-banner").style.display = "block";
    }
    else {
        document.getElementById("friday-banner").style.display = "none";
    }
}

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

    document.getElementById("modified").textContent = fulldate;
    
}
window.onload = dates;

let temp = document.querySelector('#tempVal');
let speed = document.querySelector('#windVal');


//Calculate Windchill
function buildWC(speed, temp) {
    let wcTemp = document.getElementById("tempVal");

    //Compute windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    //Round the answer down to integer
    wc = Math.floor(wc);

    //If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;

    //Display the windchill
    console.log(wc);
    wcTemp.innerHTML = wc;
}
