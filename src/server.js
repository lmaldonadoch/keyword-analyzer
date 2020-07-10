const express = require('express');
const cors = require('cors');

let app = express();
app.use(cors());

const googleTrends = require('google-trends-api');

googleTrends
  .interestOverTime({ keyword: "Women's march" })
  .then(function(results) {
    console.log('These results are awesome', results);
  })
  .catch(function(err) {
    console.error('Oh no there was an error', err);
  });
