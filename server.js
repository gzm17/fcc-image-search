// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

//google-search code from npm site
var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  key: 'AIzaSyCUykZFmzNdVJaMVzdybUnocFm1LsQcJ8g',
  cx: '004325806324865504058:k1i4_nc6vjy'
});
     
var q = [];

app.get("/imagesearch/:input", function (req, res) {
  let input = req.params.input.split("&");
  let query = input[0].split("=")[1];
  let offset = input[1].split("=")[1];
  console.log("URL q: ", query, offset, req.params); 
  q.push({"searchTerm": query, "when": new Date()}); //save history of search 
  
  googleSearch.build({
      q: query,
      start: 1,
      fileType: "jpg",
      //filter: 1,
      //imgColorType: "color",
      //imgDominantColor: "blue",
      imgSize: "small",
      //imgType: "clipart",
      lr: "lang_en",
      num: offset,
      //safe: "high", 
      searchType: "image", //seems manditory - otherwise, search undefined
      //siteSearchFilter: "e",
      //gl: "tr", //geolocation,  
      //siteSearch: "*" // Restricts results to URLs from a specified site 
    }, function(error, response) {
      if (error) {
        console.log("ZG search error");
        res.send("search has some problems");
      }
      else {
        console.log("ZG search:", response.items);
        let output = [];
        for (let i = 0; i < response.items.length; i++)
          output.push(
            {"url": response.items[i].link, 
             "snippet": response.items[i].snippet, 
             "thumbnail": response.items[i].thumbnailLink, 
             "context": response.items[i].displayLink});
        console.log("output: ", output);
        res.send(output);
        //res.send(JSON.stringify(output)); //output
      }
    });
});

app.get("/searchhistory", function (req, res) {
    res.send(q);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
