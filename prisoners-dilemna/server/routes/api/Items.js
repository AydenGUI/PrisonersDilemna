const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

router.use(express.json());

// router.get('/', (req, res) => {res.send('testing get / item route')});
// router.get('/:id', (req, res) => {res.send('testing get /:id route')});
// router.post('/', (req, res) => {  res.send('testing post / route')});
// router.put('/:id', (req, res) => {res.send('testing get /:id route')});

router.post('/', (req, res) => {
    console.log(req.body);
    // console.log(req.body.image);
    Item.create(req.body)
    .then((item) => res.json({msg: 'Item added successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to add this item'}));
});

router.post('/:title', async (req, res) => {
    try {
        console.log(req.param.title);  
        const newItem = new Item(req.param.title);
        // console.log(newItem); 
      // const myInstance = new Item(req.body); // create a new instance of the model
      await newItem.save(); // save the instance to the database
      res.status(201).json({ message: 'Data created successfully', data: newItem }); // send a success response
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating data', error: err });
    }
  
   });
module.exports = router;