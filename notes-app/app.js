const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes')

//Create add command
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
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Create remove command
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
    handler: function(argv){
        console.log('Removing a note')
        notes.removeNote(argv.title)
        
    }
})

//Create remove command
yargs.command({
    command:'list',
    describe:'list notes',
    handler: function(){
        console.log('listing notes')
    }
})
//Create remove command
yargs.command({
    command:'read',
    describe:'read a note',
    handler: function(){
        console.log('Reading note')
    }
})
yargs.parse()