const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes')

//Add command
yargs.command({
    command:'add',
    describe:'add new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){ notes.addNote(argv.title,argv.body)
    }
})

//Remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        console.log('Removing a note')
        notes.removeNote(argv.title)
        
    }
})

//List command
yargs.command({
    command:'list',
    describe:'list notes',
    handler(){
        notes.listNotes()
    }
})
//Read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        console.log('Searching for note....')
        notes.readNote(argv.title)
    }
})

yargs.parse()