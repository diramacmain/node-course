const request = require('postman-request')

const forecast = (longitude,latitude,callback)=>{
const url = "http://api.weatherstack.com/current?access_key=6f6c3f175353db4075951b4e8830253d&query=-33.9249,18.4241&units=m"
request({url:url,json:true},(error,response)=>{
    console.log(error)
    console.log(response.body.location)
})
}
module.exports = forecast