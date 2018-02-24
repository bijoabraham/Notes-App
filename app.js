console.log("Starting the Application");
const os = require("os");
const notes = require("./notes.js");
const _=require("lodash");
const yargs = require("yargs");
const notesUtility = require("./notes.js");
const message = `Hello ${os.userInfo().username}!`;
console.log(message);
var argv = yargs
    .command('create','creates a new note',{
        topic:{
            describe:"topic for the note",
            demand:true,
            alias:'t'
        },
        content:{
            describe:"content for the note",
            demand:true,
            alias:'c'
        }
    })
    .command('read','read an existing note',{
        topic:{
            describe:"topic for the note",
            demand:true,
            alias:'t'
        }
    })
    .command('update','update a existing note',{
        topic:{
            describe:"topic for the note",
            demand:true,
            alias:'t'
        },
        content:{
            describe:"content for the note",
            demand:true,
            alias:'c'
        }
    })
    .command('delete','delete an existing note',{
        topic:{
            describe:"topic for the note",
            demand:true,
            alias:'t'
        }
    })
    .help()
    .argv;
    
var command=argv._[0];
var note ={
    topic:argv.topic,
    content:argv.content
}
switch(command){
    case "create":
        notesUtility.createNote(note);        
        break;
     case "read":
        notesUtility.readNote(note.topic);
        break;
     case "update":
        notesUtility.updateNote(note);
        break;
     case "delete":
     notesUtility.deleteNote(note.topic);
        break;
    default:
        console.log("Command unrecognized");        
        break
};
