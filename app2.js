// Create a new Date object
var currentDate = new Date();

// Get individual components
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
var year = currentDate.getFullYear();

// Format the date as a string
var formattedDate = `${day}-${month}-${year}`;

// Set the text content of the element with id 'currentYear'
document.querySelector('#fod-date').innerText = formattedDate;


// contect

document.addEventListener('DOMContentLoaded', function() {
     // Get elements
     var readMoreLink = document.getElementById('readMoreLink');
     var shortText = document.querySelector('.short-text');
     var fullText = document.querySelector('.full-text');
 
     // Add click event to the "Read More" link
     readMoreLink.addEventListener('click', function(event) {
         event.preventDefault();
         // Toggle visibility of the short and full text
         shortText.style.display = 'none';
         fullText.style.display = 'block';
         // Hide the "Read More" link
         readMoreLink.style.display = 'none';
     });
 });
 