const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
const { describe, command } = require('yargs')

//customize yargs version 
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'Add new note',
    handler: function(){
        console.log('Adding a new note!')
    }
})
//create remove command
yargs,command({
    command:'remove',
    describe:'Removes note',
    handler:function(){
        console.log('Removing the note')
    }
})
yargs,command({
    command:'read',
    describe:'read note',
    handler:function(){
        console.log('reading the note')
    }
})
yargs,command({
    command:'list',
    describe:'listing notes',
    handler:function(){
        console.log('listing notes')
    }
})

//add, remove, read, list

console.log(yargs.argv)
