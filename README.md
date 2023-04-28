# Country Comparison App

The Country Comparison App is a web application that allows users to input a country name and retrieve information about the country, as well as compare it to other countries.

## See It In Action

![](https://github.com/NicholasStambaugh/Country-Comparison/blob/main/cntrgif.gif)

## Usage

To use the app, simply open the index.html file in a web browser. The app will load and display the user interface, which includes a form for users to input a country name, buttons to submit or reset the form, and containers for displaying country information and a chart.

## Script.js

The script.js file powers the Country Comparison App's functionality, including making API calls to retrieve country data, creating HTML elements to display the data, and handling user interactions with the app's form and buttons. The most important block of code is the event listener added to the form's submit event, which prevents the default form submission behavior, gets the value of the input field, and makes an API call to retrieve country data.

```
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

        // Create the area element
        const area = document.createElement('span');
        area.textContent = `Area: ${country.area} km²`;

        // Append the elements to the card body
        details.appendChild(population);
        details.appendChild(area);
        cardBody.appendChild(name);
        cardBody.appendChild(details);
        card.appendChild(img);
        card.appendChild(cardBody);

        // Append the card to the country info container
        countryInfo.appendChild(card);
      });
    })
    .catch(error => {
      console.error(error);
    });
});
```
This block of code is responsible for retrieving country data and creating a card element for each country. It does this by adding an event listener to the form's submit event, which prevents the default form submission behavior using event.preventDefault(). 

It then gets the value of the input field using input.value, and makes an API call to retrieve country data using fetch(). When the API call returns data, the code loops through the data using data.forEach(), and creates a card element for each country using document.createElement(). 

It also creates image, card body, country name, and country details elements, and appends them to the card element using element.appendChild(). Finally, it appends the card element to the country info container using countryInfo.appendChild()

## Libraries Used

The app uses the following external libraries:

- jQuery (v3.6.0)
- Chart.js (v3.5.1)

These libraries are included via CDN links in the file's <head> section.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
