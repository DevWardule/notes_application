const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    message = 'Your notes...'
    return message
}

const addNote = (title, body) => {
    const notes = loadnote()
    const duplicateNotes = notes.filter((note) => {
        if (note.title == title) {
            return true
        }
    })

    debugger

    const duplicateNote = notes.find((note) =>{
        return note.title == title
    })


    // const duplicateNotes = notes.filter(function (note) {
    //     if (note.title == title) {
    //         return true
    //     }
    // })


    // if (duplicateNotes.length === 0) 
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note saved successfully!'))
    } else {
        console.log(chalk.red.inverse('Title already exist!'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const JSONobjarr = loadnote()
    const newArr = JSONobjarr.filter(function (obj) {
        if (obj.title != title) {
            return true
        }
    })
    if (JSONobjarr.length > newArr.length) {
        console.log(chalk.green.inverse('Note removed!!'))
    } else {
        console.log(chalk.red.inverse("No note found!!"))
    }
    saveNotes(newArr)
}


const listnote = () => {
    console.log(chalk.inverse('Notes list:'))
    const notelist = loadnote()

    notelist.forEach((note) => {
        console.log(note.title)
    })
}

const readnote = (title) => {
    const notes = loadnote()
    const note = notes.find((note) => {
        if (note.title == title) {
            return true
        }
    })
    if (note) {
        console.log(chalk.blue.inverse(note.title))
        console.log(note.body)
    }
    else {
        console.log('Note not found')
    }
}

const loadnote = () => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON) //return array of js object

    }
    catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listnote: listnote,
    readnote: readnote
}