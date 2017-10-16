const express = require('express')
const router = express.Router()
const { UserModel } = require('../db/schema')


//dispay user list 
router.get('/', async (request, response) => {
  // Try catch blocks allow us to catch potential error messages
  try {
    // Find all users
    const users = await UserModel.find({})
    // Send JSON of all users
    response.json(users)
  } catch (err) {
    response.send(err)
  }
})

//disolay individual user
router.get("/:id", async(request, response) => {
  try{
    console.log(request.params.id)
    const user = await UserModel.findById(request.params.id)
    response.json(user)
  }
  catch(error) {
    response.send(error)
  }
})

//make new user
router.post("/", async (request, response) => {
  try{
    const newUser = new UserModel(request.body.user)
    const saved = await newUser.save()
    response.json(saved)
  }
  catch (error) {
    response.send(error)
  }
})

//delete user
router.delete("/:userId", async(request, response) => {
  try{
    const user = await UserModel.findById(request.params.userId).remove()
    const users = await UserModel.find({})
    response.send(users)
  } catch(error) {
    response.send(error)
  }
})


module.exports = router
