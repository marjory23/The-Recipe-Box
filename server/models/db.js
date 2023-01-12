'use strict'

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://Marcella:hytxuk-6wAxra-covkex@cluster0.kfx9o3y.mongodb.net/?retryWrites=true&w=majority')
.then(console.log('hello from db'));

module.exports = mongoose;