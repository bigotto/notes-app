const fs = require('fs')
const chalk = require ('chalk')

const addNote = ( title, body) => {
    const notes = loadNotes()
    // const duplicatedNotes = notes.filter( note => note.title === title) //Continua executando até o final, desnecessário
    const duplicatedNote = notes.find(note => note.title === title) //Executa até encontrar a 1 ocorrencia

    debugger

    if(!duplicatedNote){
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter( (note) => note.title !== title)

    if(notesToKeep.length === notes.length){
        console.log(chalk.bgRed('No note found!'))
    } else{
        console.log(chalk.bgGreen('Note removed!'))
        saveNotes(notesToKeep)
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const DataJSON = dataBuffer.toString()
        return JSON.parse(DataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    console.log(chalk.yellow('Your notes'))
    const data = loadNotes()

    data.forEach(note => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find( note => note.title === title)

    if(note){
        console.log(chalk.green(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('No note found!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}