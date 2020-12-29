const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.filter(note => note.title === title)
    if(!duplicateNote){
        console.log(chalk.red('Note title taken'))
    } else
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added'))
    }
}



const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e){
        return []
    }
}
const removeNote = title => {
    const notes = loadNotes()
    const lessNotes = notes.filter(note => note.title !== title)
    saveNotes(lessNotes)
    if(notes.length == lessNotes.length){
        console.log(chalk.red('Note '+title+' not found'))
    }
    else{
        console.log(chalk.green('Note '+title+' removed'))
    }
}

const listNotes = () => {
    console.log(chalk.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach(note => console.log(note.title));
}


const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse(" "+note.title+" "))
        console.log(note.body)
    } else 
    {
        console.log(chalk.red.inverse('No Note found!'))
    }
}

module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}