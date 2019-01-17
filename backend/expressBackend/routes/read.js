var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var Car = require('../../models/car');
var Contact = require('../../models/contact');

router.get('/cars', (req, res) => {

    Car.find().then(cars => {
        res.status(200).json(cars)
    }).catch(err => res.json(err))
})

router.get('/contacts', (req, res) => {
    Contact.find().then(contacts => {
        res.status(200).json(contacts);
    }).catch(err => res.status(400).json(err))
})

router.get('/users', (req, res) => {
  User.find().then(users => {
      res.status(200).json(users);
  }).catch(err => res.status(400).json(err))
})


// Get Individual Car & Contact

router.get('/contact/:id', (req, res) => {
    Contact.findOne({_id: req.params.id}).then(contact => {
        res.status(200).json(contact)
    }).catch(err => res.status(400).json(err))
})

router.get('/car/:id', (req, res) => {
  Car.findOne({_id: req.params.id}).then(car => {
    res.status(200).json(car)
  }).catch(err => res.status(400).json(err))
})

router.get('/user/:id', (req, res) => {
  User.findOne({_id: req.params.id}).then(user => {
    res.status(200).json(user)
  }).catch(err => res.status(400).json(err))
})

module.exports = router;
