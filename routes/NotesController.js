const express = require('express')
const router = express.Router({ mergeParams: true })
const { UserModel, NoteModel } = require("../db/schema.js")

router.get("/:noteId", async(request, response) => {
    try{
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
    const newNote = new Note()
    const user = await User.findById(request.params.userId)
    user.notes.push(newNote)
    const saved = await user.save()
    resonse.json(saved)
})




module.exports = router
