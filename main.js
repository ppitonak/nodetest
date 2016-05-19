'use strict';
let http = require('http');
let express = require('express');
let request = require('request');
let app = express();
let Cat;

let startWebServer = function() {
  return new Promise(function(resolve, reject) {
    app.get('/', function(req, res) {
      return res.send('Hello World! Current time is ' + new Date());
      if (req.hostname === "localhost") {
        res.send('You came from localhost!');
      }
    });

    app.get('/api/env', function(req, res) {
      return res.json(Object.keys(process.env));
    });

    app.get('/api/time', function(req, res) {
      request.get('http://date.jsontest.com/').pipe(res);
    });

    app.get('/api/cats', function(req, res) {
      Cat.find({}, 'name -_id', function(err, docs) {
        res.json(docs);
      });
    });

    http.createServer(app).listen(3000, '0.0.0.0', function() {
      console.log('Express server listening on port 3000');
      resolve();
    });
  });
}


startWebServer().catch(function(reason) {
  console.log('Something went wrong: ' + reason);
})
