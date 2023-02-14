'use strict'

const Recipe = require('../models/recipeSchema');
const User = require('../models/userSchema');
const cloudinary = require('../cloudinary.config')

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
    console.log(req.body.image)

    const img = await cloudinary.uploader.upload(req.body.image);
    console.log(img)
    const data = req.body;
    const user = await User.findOne({ email: req.body.email})
    const result = await Recipe.create(data)
    let userRecipes = user.recipes;
    userRecipes.push(result);
    user.recipes = userRecipes
    user.save()
    res.send(result)

    res.status(201)
  } catch (err) {
    console.log('Error ' + err);
    res.status(500);
  }
 };

 exports.deleteRecipe = async (req, res) => {
  try {
    const result = await Recipe.findByIdAndDelete(req.params.id)
    const user = await User.findOne({ email: req.user.email})
    console.log('USER ' + user)
    let recipes = user.recipes
    user.recipes = recipes.filter((recipeId) => {return recipeId.toString() !== req.params.id})
    console.log(user.recipes)
    user.save()
    res.send(result)
    res.status(202)
  } catch (err) {
    console.log('Error ' + err);
    res.status(500);
    res.send();
  }
 };

