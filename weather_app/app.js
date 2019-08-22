const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

//command line argument
const address = process.argv[2]

if(!address){
    console.log("please provide address")
}else {
//CHAINING CALLBACK
//refactoring in geo code
geocode(address, (err, {latitude, location, longitude}) =>{
    if(err){
        return console.log(err)
    }
       forecast(latitude, longitude, (err, forecastData) => {
          if(err){
              return console.log(err)
          }
          console.log(location)
          console.log(forecastData)
     })
   })
}
// console.log(process.argv)
 
