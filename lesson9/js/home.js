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

const requestURL = 'js/towndata.json'

fetch(requestURL) 
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR ('Network response was not ok');
    })
    .then (function (jsonObject) {
        console.log(jsonObject);
        let towns = jsonObject['towns'];
        
        for(i = 0, x = towns.length; i < x; i++){
            let card = document.createElement('section');
            let article = document.createElement('article');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[i].name;
            h4.textContent = towns[i].motto;
            p1.textContent = "Year Founded: " + towns[i].yearFounded;
            p2.textContent = "Population: " + towns[i].currentPopulation;
            p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            image.setAttribute('src', towns[i].photo);

            article.appendChild(h2);
            article.appendChild(h4);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            card.appendChild(image);
            card.appendChild(article);

            document.querySelector('div.towns').appendChild(card);
        }
    })