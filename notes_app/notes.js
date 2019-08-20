const fs = require("fs")

const  getNotes = function(){
    return "your notes...";
}

//Function Responsible for adding note and load in the notes
const addNote = function (title, body){
      const notes =loadNotes()
      console.log(notes)

    //   // and then push/chamge them
    //   notes.push({
    //       title: title,
    //       body: body
    //   })
    //   //save them
    //   saveNotes(notes)
// }
// const saveNotes = function(notes){
//     const dataJSON =JSON.stringify(notes)
//     fs.writeFileSync("notes.json", dataJSON )
}

//error checking
   const loadNotes = function(){
    // try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    //  } catch (e){
    // return []
   }

    // }


//Exports multiple function property
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}

