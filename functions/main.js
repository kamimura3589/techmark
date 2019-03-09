import functions from "firebase-functions";
import ogpparser from "ogp-parser";
import express from "express";

const app = express();

app.get("/ogp", (req, res) => {
  if (req.query.url == undefined) {
    res.status(404).send("Sorry, we cannot find that!");
    return;
  }

  const url = req.query.url;
  ogpparser(url, true)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(error) {
      res.status(404).send("Sorry, we cannot find that!");
    });
});

const api = functions.https.onRequest(app);
module.exports = { api };
