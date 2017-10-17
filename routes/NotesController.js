const express = require('express')
const router = express.Router({ mergeParams: true })
const { UserModel, NoteModel } = require("../db/schema.js")

router.get("/:noteId", async (request, response) => {
    try {
        const user = await UserModel.findById(request.params.userId)
        console.log(user)
        const note = user.notes.id(request.params.noteId)
        console.log(note)
        response.json(note)

    } catch (error) {
        response.send(error)
    }
})

router.post("/", async (request, response) => {
    const newNote = new NoteModel()
    const user = await UserModel.findById(request.params.userId)
    user.notes.push(newNote)
    const saved = await user.save()
    response.json(saved)
})

router.patch("/:noteId", async (request, response) => {
    const updatedNote = request.body.note
    const user = await UserModel.findById(request.params.userId)
    const note = user.notes.id(request.params.noteId)
    note.title = updatedNote.title
    note.text = updatedNote.text
    const saved = await user.save()
    response.json(saved)
})

router.delete("/:noteId", async (request, response) => {
    const user = await UserModel.findById(request.params.userId)
    user.notes.id(request.params.noteId).remove()
    const saved = await user.save()
    response.json(saved)
})



module.exports = router
