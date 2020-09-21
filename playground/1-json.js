const fs = require('fs')

const dataJSON = fs.readFileSync('1-json.json')
const data = JSON.parse(dataJSON)
data.name="Henry"
data.age=28
const newData = JSON.stringify(data)
fs.writeFileSync('1-json.json',newData)