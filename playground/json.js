const fs = require('fs')

const dataBuffer = fs.readFileSync('json.json')
const dataJSON = dataBuffer.toString()
const user =JSON.parse(dataJSON)

user.name = " Aron"
user.age = 77

const userJSON = JSON.stringify(user)
fs.writeFileSync('json.json', userJSON)