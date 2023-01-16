'use strict'

const Recipe = require('../models/schema');
const User = require('../models/userSchema')

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
    console.log('posting recipe')

    const data = req.body;
    const user = await User.findOne({ email: req.body.email})
    // console.log(user)
    // console.log(user.email)
    const result = await Recipe.create(data)
    let userRecipes = user.recipes;
    // console.log(userRecipes)
    userRecipes.push(result);
    user.recipes = userRecipes
    user.save()
    res.send(result)

    res.status(201)
  } catch (err) {
    console.log('Error ' + err);
    res.status(500);
  }
 }

 exports.deleteRecipe = async (req, res) => {
  try {
    const result = await Recipe.findByIdAndDelete(req.params.id)
    const user = await User.findOne({ email: req.user.email})
    console.log('USER ' + user)
    let recipes = user.recipes
    // console.log('RECIPES ' + recipes)
    let index = recipes.indexOf(req.params.id)
    // console.log('INDEX' + index)
    recipes.slice(index, 1)
    // console.log('RECIPES ' + recipes)
    user.recipes = recipes
    user.save()
    res.send(result)
    res.status(202)
  } catch (err) {
    console.log('Error ' + err);
    res.status(500);
    res.send();
  }
 }
