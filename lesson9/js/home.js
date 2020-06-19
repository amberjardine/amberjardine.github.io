document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('fullyear');
    display.innerHTML = year();

    let updated = document.getElementById('modified');
    updated.innerHTML = modified();
});

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
//function dates() {
   
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

