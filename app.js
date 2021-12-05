const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')



//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv)=> {
        // console.log("title: "+argv.title)
        // console.log('Body: '+argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'lists the notes',
    handler() {
        notes.listnote()
    }
})
yargs.command({
    command: 'read',
    describe: 'read the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readnote(argv.title)
    }
})


yargs.parse()






// const note = getnote();
// console.log(note)

// const greet = chalk.blue.inverse.bold('Success!')
// console.log(greet)

// console.log(process.argv[2])

