// Get the form and input elements
const form = document.querySelector('form');
const input = document.querySelector('#country-name');

// Get the country info container
const countryInfo = document.querySelector('#country-info');

// Get the reset button
const resetButton = document.querySelector('#reset-button');

// Add event listener to form submit
form.addEventListener('submit', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  const countryName = input.value;

  // Make the API call
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(response => response.json())
    .then(data => {
      // Loop through the data and create a card for each country
      data.forEach(country => {
        // Create the card element
        const card = document.createElement('div');
        card.classList.add('country-card');

        // Create the image element
        const img = document.createElement('img');
        img.src = country.flags.svg;
        img.alt = `${country.name.common} flag`;

        // Create the card body element
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Create the country name element
        const name = document.createElement('h2');
        name.textContent = country.name.common;

        // Create the country details element
        const details = document.createElement('div');
        details.classList.add('details');

        // Create the population element
        const population = document.createElement('span');
        population.textContent = `Population: ${country.population}`;

        // Create the capital element
        const capital = document.createElement('span');
        capital.textContent = `Capital: ${country.capital}`;

        // Create the region element
        const region = document.createElement('span');
        region.textContent = `Region: ${country.region}`;

        // Create the subregion element
        const subregion = document.createElement('span');
        subregion.textContent = `Subregion: ${country.subregion}`;

        // Append the elements to the card
        details.appendChild(population);
        details.appendChild(capital);
        details.appendChild(region);
        details.appendChild(subregion);
        cardBody.appendChild(name);
        cardBody.appendChild(details);
        card.appendChild(img);
        card.appendChild(cardBody);

        // Append the card to the country info container
        countryInfo.appendChild(card);

        // Create the graph element
        const graph = document.createElement('canvas');
        graph.classList.add('graph');
        graph.id = `${country.name.common}-graph`;

        // Append the graph to the country info container
        countryInfo.appendChild(graph);

        // Create the chart
        const ctx = graph.getContext('2d');
        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Population'],
            datasets: [{
              label: `${country.name.common}`,
              data: [country.population],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      });
    })
    .catch(error => console.log(error));

  // Reset the input field
  input.value = '';
});

// Add event listener to reset button
resetButton.addEventListener('click', () => {
  // Clear the country info container
  countryInfo.innerHTML = '';
});

$(document).ready(function() {
    $("#country-info").hover(function() {
      $(this).css("box-shadow", "5px 5px 5px #888888");
    }, function() {
      $(this).css("box-shadow", "none");
    });
  });


