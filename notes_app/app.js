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
    handler:  function(argv){
       notes.addNote(argv.title, argv.body)
    }

});
   yargs.parse()