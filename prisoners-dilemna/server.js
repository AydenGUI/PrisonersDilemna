const express = require('express');
const server = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require("./models/Users");
const ItemModel = require("./models/Item");
//const userRouter = express.Router();

// Connect Database
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cors({ origin: true, credentials: true}));


// server.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

server.get('/', (req, res) => res.send('Hello world!'));

const conn_str = 'mongodb+srv://saw31815:prisoners-dilemna@prisonerdilemma.ay7xoha.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);

server.post("/api/users", async(req, res) => {

  const user = new UserModel(req.body);

  try{
      await user.save();
      res.send(user);
  }
  catch(err){
      console.log(err);
      console.log(req.body)
      res.status(500).send(error);
  }
});

server.post("/api/items/create-item", async(req, res) => {

  const item = new ItemModel(req.body);

  try{
      await item.save();
      res.send(item);
  }
  catch(err){
      console.log(err);
      console.log(req.body)
      res.status(500).send(error);
  }
});

server.get('/api/items/get-all', async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

server.get('/api/items/show-item/:title', async (req, res) => {
  try {
    const item = await ItemModel.findOne(req.params.body);
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

server.put("/api/items/update-item/:title", async(req, res) => {
  
  const item = await Item.findOne(req.params.body);
  item.title = req.body.title || item.title;
  item.description = req.body.description || item.description;
  if (req.body.updated_date == item.updated_date)
    item.updated_date = Date.now;
  item.image = req.body.image || item.image;
try {
  const updatedItem = await item.save();
  console.log(updatedItem);
  res.status(200).json(updatedItem);
} catch (err) {
  res.status(500).json({ message: err.message });
}
});
mongoose.connect(conn_str,{
  useUnifiedTopology : true,
  useNewUrlParser : true
})
.then(() => {
  server.listen(3001, 'localhost'); 
  console.log('MongoDB Connected'); 
  server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
})
.catch(err => {
  console.log(`Error in DB Connection ${err}`)
});