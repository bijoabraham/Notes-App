console.log("Starting the Application");
const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");
const _=require("lodash");

var message = `hello ${os.userInfo().username}!`;
fs.appendFile("message.txt",message,function(err){
    if(err){
        console.log("Error writing to file");
    }else{
        console.log("File write successful");
    }    
});