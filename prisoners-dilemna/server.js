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

server.delete("/api/items/delete-item", async(req, res) => {
  console.log(req.query);
  //const items = await ItemModel.find();
  const titleToDelete = req.query.title;

  try {
    const deleteItem = await ItemModel.findOneAndDelete({ title: titleToDelete });
    if (!deleteItem) {
      return res.status(404).send(`Item with title "${title}" not found`);
    }
    res.send('Item deleted successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
  // const index = items.findIndex(item => item.title === titleToDelete);
  // if (index !== -1) {
  //   ItemModel.splice(index, 1);
  //   res.send(`Item with title "${titleToDelete}" has been deleted`);
  // } else {
  //   res.status(404).send(`Item with title "${titleToDelete}" not found`);
  // }

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

mongoose.connect(conn_str,{
  useUnifiedTopology : true,
  useNewUrlParser : true
})
.then(() => {
  server.listen(3001, 'localhost'); 
  server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
})
.catch(err => {
  console.log(`Error in DB Connection ${err}`)
});