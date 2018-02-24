const fs = require("fs");

var readNotesFromFile=()=>{
    var notesList=[];
    try{
        notes = fs.readFileSync("notes-data.json")
        console.log("File read successful");
        if(notes.length>0)
            notesList=JSON.parse(notes);
    }
    catch(err){
        console.log("Error reading from file");
    }
    return notesList;
};

var writeNotesToFile = (note)=>{
    try{
        fs.writeFileSync("notes-data.json",JSON.stringify(note));
        console.log("Successful write to file");                
    }
    catch(err){
        console.log("Error writing to file");
        return false;
    }
};

var createNote=(note)=>{
    var notes = readNotesFromFile();
    var duplicate = notes.filter((n)=>n.topic===note.topic)
    if(duplicate.length>0){
        console.log("Duplicate topic");
    } 
    else{
        notes.push(note);
        writeNotesToFile(notes);
    }    
};

var readNote=(topic)=>{
    var notes = readNotesFromFile();
    var notesWithTopic = notes.filter((n)=>n.topic===topic)
    if(notesWithTopic.length===0){
        console.log("Notes not found for topic : "+topic);
    } 
    else{
        console.log(notesWithTopic);        
    }    
};

var deleteNote=(topic)=>{
    var notes = readNotesFromFile();
    var uniqueNotes = notes.filter((n)=>n.topic!==topic)
    if(uniqueNotes.length===notes.length){
        console.log("Notes not found for topic : "+topic);
    } 
    else{        
        writeNotesToFile(uniqueNotes);        
    }    
};

var updateNote=(note)=>{    
    var notes = readNotesFromFile();
    var uniqueNotes = notes.filter((n)=>n.topic!==note.topic)
    console.log(uniqueNotes);
    if(uniqueNotes.length===notes.length){
        console.log("Notes not found for topic : "+note.topic);
    } 
    else{        
        uniqueNotes.push(note);
        writeNotesToFile(uniqueNotes);        
    }    
};

module.exports={
    createNote,
    readNote,
    updateNote,
    deleteNote
};