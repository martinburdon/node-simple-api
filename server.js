const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
let db = require('./config/db.js');

const app = express();

const port = 8000;

// Express can't process URL encoded forms on its own.
// Use bodyParser middleware to help it along
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err);

  // Make sure to add the database name and not the collection name
  db = database.db('note-api-test');
  require('./app/routes/index.js')(app, db);

  app.listen(port, () => {
    console.log('We are live on port ' + port);
  });
});
