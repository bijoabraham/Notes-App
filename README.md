# Notes-App
CRUD opertion for noted based on native file system

Debugging for Node JS
1. inspect - in  node terminal
2. inspect-brk - chrome debugg tool

Requring arguments using "yargs" - to provide help and opttiosn description for the application
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
    .help()
    .argv;



