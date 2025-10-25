// controllers/pets.js
const Pet = require('../models/pet.js');
const express = require('express');
const router = express.Router();
module.exports = router;



// CREATE - POST - /pets
router.post('/', async (req, res) => {
  try {
    const createdPet = await Pet.create(req.body);
    res.status(201).json(createdPet);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});


router.get('/', async (req, res) => {
    try {
 const allPets = await Pet.find()
    }catch (err) {
   res.status(200).json(allPets)

    }
   
});


router.get('/', async (req, res) => {
  try {
    const foundPets = await Pet.find();
    res.status(200).json(foundPets);  // 200 OK
  } catch (err) {
  }
});
router.get('/', async (req, res) => {
  try {
    const foundPets = await Pet.find();
    res.status(200).json(foundPets);
  } catch (err) {
    res.status(500).json({ err: err.message }); // 500 Internal Server Error
  }
});



// READ - GET - /pets/:petId
router.get('/:petId', async (req, res) => {
  try {
    const foundPet = await Pet.findById(req.params.petId);
    if (!foundPet) {
      res.status(404);
      throw new Error('Pet not found.');
    }
    res.status(200).json(foundPet);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      // Add else statement to handle all other errors
      res.status(500).json({ err: err.message });
    }
  }
});

// DELETE - DELETE - /pets/:petId
router.delete('/:petId', async (req, res) => {
  try {
    throw new Error('This is a test error'); // Add this temporary code
    // Try block
  } catch (err) {
    // Catch block
  }
});

// UPDATE - PUT - /pets/:petId
router.put('/:petId', async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.petId, req.body, {
      new: true,
    });
    if (!updatedPet) {
      res.status(404);
      throw new Error('Pet not found.');
    }
    res.status(200).json(updatedPet);
  } catch (err) {
    // Add code for errors
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
});
