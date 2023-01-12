'use strict'

const Express = require('express');
const app = Express();
const cors = require('cors');
const router = require('./router')

const PORT = 3000;

app.use(cors());
app.use(Express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send('Hi from the router!')
});

app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})