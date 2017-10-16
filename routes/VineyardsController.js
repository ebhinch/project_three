const express = require('express')
const router = express.Router()
const { VineyardModel } = require('../db/schema')


  //display vineyard list
  router.get('/', async (request, response) => {
    try {
      const vineyards = await VineyardModel.find({})
      response.json(vineyards)
    } catch (error) {
      response.send(error)
    }
  })

  //display individual vineyard
  router.get("/:id", async (request, response) => {
    try {
      console.log(request.params.id)
      const vineyard = await VineyardModel.findById(request.params.id)
      response.json(vineyard)
    } catch (error) {
      response.send(error)
    }
  })

module.exports = router
