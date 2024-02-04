  //necissary importants to handle jsons with react
  // Express creates path
  //bodyParser converts the 
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

  //sets and opens a path and port for react to access in components
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.options('/addObject', cors())

app.post('/addObject', (req, res) => {
  const { newObject } = req.body;

  const userJson = fs.readFileSync('users.json', 'utf8');
  const existingUsers = JSON.parse(userJson);
  existingUsers.push(newObject);
  const updatedUserJson = JSON.stringify(existingUsers, null, 2);
  fs.writeFileSync('users.json', updatedUserJson, 'utf8');

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
