
const request = require("request")
 const url="https://api.darksky.net/forecast/49e3539394ebd085bf528bd03e4d2102/37.8267,-122.4233?units=us"
 request({url:url, json:true}, (err, response) =>{
// const data = JSON.parse(response.body)
    console.log("temp " + response.body.currently.temperature + '  humidity ' + response.body.currently.time)
 });