function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
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

    let d = new Date();
    let dayName = daynames[d.getDay()];
    let monthName = months[d.getMonth()];
    let year = d.getFullYear();
    let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;

    document.getElementById("modified").textContent = fulldate;
    
}
window.onload = dates;