'use strict'

const Recipe = require('./models/schema');

exports.getRecipe = async (req, res) => {
  try {
    const result = await Recipe.find()
    res.send(result)
    res.status(200);
  } catch (err) {
    console.log('Error ' + err);
    res.status(500);
  }
 };

 exports.postRecipe = async (req, res) => {
  try {
    const data = req.body;
    const result = await Recipe.create(data)
    res.send(result)
    res.status(201)
  } catch (err) {
    console.log('Error ' + err);
    res.status(500);
  }
 }
