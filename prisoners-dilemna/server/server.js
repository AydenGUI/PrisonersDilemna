const express = require('express');
const server = express();
server.get('/', (req, res) => res.send('Hello world!'));
const port = process.env.PORT || 4000;

const mongoose = require('mongoose');
const cors = require('cors');

const items = require('./routes/api/Items');
server.use('/api/items', items);

const users = require('./routes/api/Users');
server.use('/api/users', users);
// Connect Database
server.use(cors({ origin: true, credentials: true}));

server.use(express.json({extended: false}));

server.get('/', (req, res) => res.send('Hello world!'));

const conn_str = 'mongodb+srv://saw31815:prisoners-dilemna@prisonerdilemma.ay7xoha.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(conn_str,{
  useUnifiedTopology : true,
  useNewUrlParser : true
})
.then(() => {
  server.listen(port, 'localhost')
  console.log("MongoDB Connection Succeeded...")
})
.catch(err => {
  console.log(`Error in DB Connection ${err}`)
});