var express = require('express');
var router = express.Router();
var Car = require('../../models/car');
var User = require('../../models/user');
var Contact = require('../../models/contact');

router.delete('/car/:id', (req, res) => {
    Car.deleteOne({_id: req.params.id}).then(car => {
        res.status(200).json(car)
    }).catch(err => res.status(400).json(err))
})

router.delete('/contact/:id', (req, res) => {
    Contact.deleteOne({_id: req.params.id}).then(contact => {
        res.status(200).json(contact)
    }).catch(err => res.status(400).json(err))
})

router.delete('/user/:id', (req, res) => {
  Contact.deleteOne({_id: req.params.id}).then(user => {
      res.status(200).json(user)
  }).catch(err => res.status(400).json(err))
})

module.exports = router;
