const request = require('postman-request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const url = "http://api.weatherstack.com/current?access_key=6f6c3f175353db4075951b4e8830253d&query=37.8267,-122.4233&units=m"
const mapboxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Cape%20Town.json?access_token=pk.eyJ1IjoiaGxhbmdhIiwiYSI6ImNramJiNXlydTBpenEzMnNjaW56bWg4dmwifQ.IjAxKvzYSn4GvkFIV7rMOw&limit=1"

// request({url:url,json:true},(error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!')
//     } else if(response.body.error){
//         console.log(response.body.error)
//     } else {
//         const current = response.body.current
//         const data = {
//             temp:current.temperature,
//             feels:current.feelslike,
//             time:current.observation_time,
//             weather_descriptions:current.weather_descriptions[0]
//         }
//         console.log(chalk.green.inverse(data.weather_descriptions))
//         console.log("At "+chalk.green(data.time)+" The Temperature is "+chalk.green(data.temp)+" degrees it feels like "+chalk.green(data.feels)+" degrees") 
//     }

// })


geocode('Queenstown Eastern Cape',(error,data)=>{
console.log('Error ',error)
console.log('Location:  ',chalk.green(data.place_name))
console.log('Longitude: ',data.center[0])
console.log('Latitude:  ',data.center[1])
})

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-33.9249, 18.4241, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })


