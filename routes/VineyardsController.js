const express = require('express')
const router = express.Router()
const { VineyardModel } = require('../db/schema')

  router.get('/', async (request, response) => {
    // Try catch blocks allow us to catch potential error messages
    try {
      // Find all users
      const vineyards = await VineyardModel.find({})
      // Send JSON of all users
      response.json(vineyards)
    } catch (error) {
      response.send(error)
    }
  })

module.exports = router
