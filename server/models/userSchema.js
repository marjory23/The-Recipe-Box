'use strict'

const mongoose = require('./db')

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  recipes: [{type: Schema.Types.ObjectId, ref: "Recipe"}]

})

const User = mongoose.model('User', userSchema);

module.exports = User;