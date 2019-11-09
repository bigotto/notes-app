const chalk = require ('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
       title: {
           describe: 'Note title',
           demandOption: true,
           type: 'string'
       },
       body: {
           describe: 'Body note',
           demandOption: true,
           type: 'string'
       } 
    },
    handler(argv) {
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Removing a note')
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describer: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describer: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)