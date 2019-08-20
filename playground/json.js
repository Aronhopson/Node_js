const fs = require('fs')
// const book= {
//     title : "Love is Blind",
//     author: "Hopson"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('json.json', bookJSON)

// const dataBuffer = fs.readFileSync('json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.author)

const dataBuffer = fs.readFileSync('json.json')
const dataJSON = dataBuffer.toString()
const user =JSON.parse(dataJSON)

user.name = " Aron"
user.age = 77

const userJSON = JSON.stringify(user)
fs.writeFileSync('json.json', userJSON)