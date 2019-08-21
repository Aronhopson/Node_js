
const request = require("request")
//  const url="https://api.darksky.net/forecast/49e3539394ebd085bf528bd03e4d2102/37.8267,-122.4233"
//  request({url:url, json:true}, (err, response) =>{
// // const data = JSON.parse(response.body)
// if(err){
//     console.log("Unable to connect")
// } else if (response.body.error){
//     console.log("Unable to find")
// }else {
//     console.log("Temp " + response.body.daily.data[0].summary)
// }
    
//  });

//Geocoding API
//Address  ->lat/long -> weather
 const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaG9wc29uMTExIiwiYSI6ImNqemp5eXhncjBlNGQzb285c2tweG8yMTkifQ.YvUyCSW2U3yv0kzntdqfqQ"
 request ({ url: geoUrl, json:true}, (err, response) =>{
     if(err){
         console.log("Unable to find error")
     } else if(response.body.message){
         console.log("Unable to fetch")
     } else {
const latitude = response.body.features[0].center[0]
     const longitude = response.body.features[0].center[0]
     console.log(latitude, longitude)
     }
     
 }) 