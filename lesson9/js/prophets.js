const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then (function (response) {
        if(response.ok) {
            return response.ok
        }
        throw new ERROR('Network response was not ok');
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

            card.appendChild(h2);

            document.querySelector('div.cards').appendChild(card);

            
        }
        
    })
    
    
.catch(function(error) {
    console.log('Fetch error: ', error.message);
})

const prophets = jsonObject['prophets'];
        
