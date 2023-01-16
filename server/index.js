'use strict'

const Express = require('express');
const app = Express();
const cors = require('cors');
const router = require('./router');
const session = require('express-session');

const PORT = 3000;

app.use(cors({
  origin: "http://localhost:3001",
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD","DELETE"],
  credentials: true,
}));
app.use(Express.json());

app.use(session({
  name: 'sid',
  secret: 'my secret',
  // resave: false,

  saveUninitialized: true,
  cookie: {
    secure: false,
    sameSite: 'lax',
    overwrite: false
  },
}))

app.use(router);

app.get('/', (req, res) => {
  res.send('Hi from the router!')
});

app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})