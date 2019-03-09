const functions = require('firebase-functions');
const parser = require('ogp-parser');
const client = require('cheerio-httpcli');
const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors({ origin: true }))

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

app.get("/ogp", (req, res) => {
  if (req.query.url == undefined) {
    res.status(404).send("Sorry, we cannot find that!");
    return;
  }

  const url = req.query.url;
  parser(url, true)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.status(404).send("Sorry, we cannot find that!");
    });
});

exports.api = functions.https.onRequest(app);

exports.createLink = functions.firestore
  .document('links/{links}')
  .onCreate((snap, context) => {
    const newValue = snap.data();
    console.log(newValue.link);
    console.log('success');

    const p = client.fetch('https://github.com/').then(result => {
      console.log(result.$('title').text());
    });
    console.log(p);

    parser('https://github.com/', true)
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.error(error);
      });
  });

