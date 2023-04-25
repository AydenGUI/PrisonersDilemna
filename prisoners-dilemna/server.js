const express = require('express');
const server = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require("./models/Users");
const ItemModel = require("./models/Item");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
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

server.post("/api/create-users", async(req, res) => {

  const user = new UserModel(req.body);  
//const emailToFind = req.query.email;
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });

    if (existingUser) {
      console.log("duplicate");
      return res.status(409).json({ message: 'User already exists' });
    }
    
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
    console.log(req.body)
    res.status(500).send(err);
  }
});

server.post("/api/login-users", async(req, res) => {

  console.log("LOGIN");
  try {
    const {email, password} = req.body;  
    if (!email || !password) {
      console.log("JSON FRICKED UP");
      return res.status(400).json({message: "Please enter all the fields"});
    }
    const user = await UserModel.findOne({ email });
     if (!user) {
      console.log("COULD NOT FIND USER");
        return res.status(400).json({ message: 'User with this email does not exist' });
     } 
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("PASSWORD FAILED");
      return res.status(400).send({message: "incorrect password"});
    }
    console.log("success?")
    //idk about the id
    const token = jwt.sign({id: user._id}, "passwordKey");
    res.json({token, user: {id: user._id, email: user.email}}); 

    } 
  catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
    console.log(req.body)
    res.status(500).send(err);
  }
});

server.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = jwt.verify(token, "passwordKey");
    if (!verified) return res.json(false);
    const user = await UserModel.findById(verified.id);
    if (!user) return res.json(false);
    return res.json(true);
  } catch (err) {
    res.status(500).json({err: err.message});
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

  try{
  const item = new ItemModel(req.body);
  if (req.body.title === undefined || req.body.title == '') {
    throw new Error("Error: Title is required field");
  }
  } catch(err) {
    return res.status(400).send(err.message);
  }
  try{
      await item.save();
      res.send(item);
  }
  catch(err){
      console.log(err);
      console.log(req.body)
      res.status(500).send(err);
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
    const item = await ItemModel.findOne({title: req.params.title});
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

server.put("/api/items/update-item/:title", async(req, res) => {
  console.log(req.params.title)
  const item = await Item.findOne({title: req.params.title});
  if (item) {
    item.title = req.body.title || item.title;
    item.description = req.body.description || item.description;
    item.image = req.body.image || item.image;
    if (req.body.updated_date == item.updated_date)
    item.updated_date = Date.now;
  } else {
    res.status(404).send({ message: 'Item not found' });
  }
if (item)
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