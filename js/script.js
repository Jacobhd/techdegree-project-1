/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// An array of object's key and value pairs to display from the global scope
let quotes = [
  {
    quote:"True peace is not merely the absence of tension: it is the presence of justice.",
    source:"Martin Luther King Jr.",
    year:"1955"
  }, {
    quote:"It isn't enough to talk about peace. One must believe in it. And it isn't enough to believe in it. One must work at it.",
    source:"Eleanore Roosevelt",
    citation:"Voice of America broadcast (11 November 1951)"
  }, {
    quote:"Logic is the beginning of wisdom, not the end.",
    source:"Spock"
  }, {
    quote:"Be less curious about people and more curious about ideas",
    source:"Marie Curie"
  }, {
    quote:"Am I good enough? Yes I am",
    source:"Michelle Obama"
  }
];

// getRandomQuote function pulls an object from the quotes array index at random
function getRandomQuote() {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];  // Returns the random quote and stores the result
}

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/


//  printQuote function prints the random item into a message on the webpage

function printQuote(message) { // message parameter
  let result = getRandomQuote(); // Calls 'getRandomQuote' stores in result variable
  var message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;
  if ( result.citation ) {
    message += "<span class='citation'>" + result.citation + "</span>"
  };
  if ( result.year ) {
    message += "<span class='year'>" + result.year + "</span>"
  };
  message += "</p"
  document.getElementById('quote-box').innerHTML = message; // Using innerHTML property to interact with the browser
};



/***
  When the "Show another quote" button is clicked, the event listener
  will be triggered, and it will call the `printQuote` function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
