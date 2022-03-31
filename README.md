# flight-tracking-api-with-google-map
a service that get information about a specific flight.

The source of data is from the website https://globe.adsbexchange.com/.

BACKEND:
To get the info, i create a web crawler using Puppeteer and javascript. After that, I initialized the web API with ExpressJS and NodeJS.

FRONDEND:
I use Angular 2 for this project, I embedded the google map API to display the map. The program will track and update the coordinate of the flight every 2 seconds.
