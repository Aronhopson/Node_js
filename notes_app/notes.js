const fs = require("fs")
const chalk = require("chalk")

//Function Responsible for adding note and load in the notes
const addNote = (title, body) =>{
      const notes =loadNotes()
      //function call only once using Arrow function
      const duplicateNote = notes.find ((note) =>  note.title===title)
      //=================================================================
      //debugging
// debugger

if(!duplicateNote){
  // and then push/chamge them
  notes.push({
    title: title, 
    body: body
})
//save them
saveNotes(notes)
console.log(chalk.green.inverse("new rey new"))
}else {
    console.log(chalk.red.inverse("nanan"))
}
    
}
 //Removing
 const removeNote = (title)=>{
    const notes = loadNotes()
    const keepNote = notes.filter((note) => note.title !== title);
    
if(notes.length > keepNote.length){
    console.log(chalk.green.inverse("note remove"))
    saveNotes(keepNote)
} else {
    console.log(chalk.red.inverse("no"))
}
    }

//list
const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("your name"))
    notes.forEach((note) =>{
        console.log(note.title)

    })
}
//read
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title===title)
if(note){
console.log(chalk.inverse(note.title))
console.log(note.body)
}else {
console.log(chalk.red.inverse("note not found!"))
}
}

const saveNotes = (notes) =>{
    const dataJSON =JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON )
}

//error checking
   const loadNotes = () =>{
     try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
      } catch (e){
     return []
   }
 }
 
 

//Exports multiple function property
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote:readNote   
}
 
 