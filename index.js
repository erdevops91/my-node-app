const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello Rohit Singh WELCOME TO HOME PAGE  Node.js app on GCP!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

