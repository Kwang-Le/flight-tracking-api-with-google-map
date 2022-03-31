const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
var bodyParser = require('body-parser');
const querystring = require('querystring');
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var data;

app.listen(3000, function(){
    console.log('Node listening at http://localhost:3000 ...');
});

const puppeteer = require('puppeteer');

const getPostTitles = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://globe.adsbexchange.com/?icao=86d5b6');

  var textContent = await page.evaluate(() => {
      return document.querySelector('#selected_position').textContent
    });

  console.log(textContent);
  textContent = textContent.split('°').join('').split(',');
  data = textContent;
  browser.close();
};

setInterval(getPostTitles, 2000);

app.get('/', (req, res) =>{
  var position = {
    lat: Number(data[0]),
    lng: Number(data[1])
  }
  console.log(position);
  res.send(position);
})
