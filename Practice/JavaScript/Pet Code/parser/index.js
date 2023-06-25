const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://www.reddit.com/r/facepalm/comments/14idzoi/apparently_needing_a_drink_of_water_isnt_manly/';

const movieData = {};

async function getHTML() {
  const { data: html } = await axios.get(url);
  return html;
}

getHTML().then((res) => {
  const $ = cheerio.load(res); // load the html into cheerio
  const textArray = []; // array to hold the text
  $('.md > p').each((i, elem) => { // loop through each paragraph
    textArray.push($(elem).text()); // push the text into the array
  });
  console.log(textArray); // log the array
});

