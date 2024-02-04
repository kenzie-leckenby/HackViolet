  //necissary importants to handle jsons with react
  // Express creates path
  //bodyParser converts the 
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

  //sets and opens a path and port for react to access in components
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/addObject', (req, res) => {
  const { newObject } = req.body;

  const jsonData = fs.readFileSync('data.json', 'utf8');
  const existingData = JSON.parse(jsonData);
  existingData.push(newObject);
  const updatedJsonData = JSON.stringify(existingData, null, 2);
  fs.writeFileSync('data.json', updatedJsonData, 'utf8');

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
