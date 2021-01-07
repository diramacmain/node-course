const request = require('postman-request')

const geocode = (address,callback)=>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiaGxhbmdhIiwiYSI6ImNramJiNXlydTBpenEzMnNjaW56bWg4dmwifQ.IjAxKvzYSn4GvkFIV7rMOw&limit=1"

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to location services!',undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to find location try another search',undefined)
        } else {
            const data = {
                center:response.body.features[0].center,
                place_name:response.body.features[0].place_name
            }
            callback(undefined,data)
        }
    })
}
module.exports = geocode