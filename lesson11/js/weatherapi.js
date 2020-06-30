const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1f3ebf09943a56765ce811a27bac5a31&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then ((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = jsObject.main.temp;
        const condition = jsObject.weather[0].main;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.querySelector('#icon').setAttribute('alt', desc);
        document.getElementById('condition').textContent = condition;
    });