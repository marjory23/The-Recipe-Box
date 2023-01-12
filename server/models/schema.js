'use strict'

const mongoose = require('./db')

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: String,
  ingredients: [{
    food: String,
    quantity: Number,
    measure: String,
    }],
  image: String,
  duration: Number,
  preparation: String

})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;