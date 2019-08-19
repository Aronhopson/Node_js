const chalk = require("chalk");
const yargs = require("yargs");
const validator = require("validator");
const getNotes = require("./notes.js")

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
        console.log("Title: " + argv.title)
        console.log("Body: " + argv.body)
    }

});

yargs.command({
    command : 'remove',
    describe :'remove new looks',
    handler:  function(){
        console.log("Removing new looks");
    }
});

yargs.command({
    command : 'build',
    describe :'build new looks',
    handler:  function(){
        console.log("Building new looks");
    }
});

yargs.command({
    command : 'list',
    describe :'list new looks',
    handler:  function(){
        console.log("Listing new looks");
    }
});

yargs.parse()