'use strict'
require('dotenv').config();

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(console.log('hello from db'));

module.exports = mongoose;