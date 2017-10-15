const express = require('express')
const router = express.Router()
const { UserModel } = require('../db/schema')



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


module.exports = router

