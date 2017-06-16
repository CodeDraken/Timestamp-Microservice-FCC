const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const util = require('util');

const { dateParser } = require('./utils/date-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/time/:input', (req, res) => {
  const { input } = req.params;

  res.json(dateParser(input))
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

module.exports = {app};
