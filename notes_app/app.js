const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js")


//Custom  yargs version
yargs.version('1.0.0');

//create add command
yargs.command({
    command : 'add',
    describe :'Add new note',
    builder: {
        title: {
            describe :'Note title',
            demandOption: true,
            type: 'string'
    },
    body: {
        describe : "no looks",
        demandOption: true,
        type: 'string',
    }
},
    handler(argv) {
      notes.addNote(argv.title, argv.body)
    } 

});

//Remove
yargs.command({
    command : 'remove',
    describe :'Remove new note',
    builder: {
        title: {
            describe :'Note remove',
            demandOption: true,
            type: 'string'
    }
},
//ES6 Short hand function 
    handler(argv) {
      notes.removeNote(argv.title)
    } 

});

//List 
yargs.command({
    command : 'list',
    describe :'lsit new note',
   
//ES6 Short hand function 
    handler(argv) {
      notes.listNote(argv.title)
    } 

});
//read
yargs.command({
    command : 'read',
    describe :'raed new note',
    builder: {
        title:{
            describe: "read",
            demandOption:true,
            type : "string"
        }
    },
   
//ES6 Short hand function 
    handler(argv) {
      notes.readNote(argv.title)
    } 

});


yargs.parse()