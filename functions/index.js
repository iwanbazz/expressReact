const functions = require("firebase-functions");
const express = require("express");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const app = express();
app.get("/api", (req, res) => {
  res.send("API output");
});
app.get("/admin", (req, res) => {
  res.send("This is the admin test");
});
exports.api = functions.https.onRequest(app);
