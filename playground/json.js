const fs = require('fs')
const book= {
    title : "Love is Blind",
    author: "Hopson"
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('json.json', bookJSON)

const dataBuffer = fs.readFileSync('json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.author)