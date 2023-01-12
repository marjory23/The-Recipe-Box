'use strict'

const router = require('express').Router()
const ctrl = require('./controllers')


router.get('/recipes', ctrl.getRecipe)
router.post('/recipes', ctrl.postRecipe)



module.exports = router