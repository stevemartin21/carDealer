var express = require('express');
var router = express.Router();
var Car = require('../../models/car');
var User = require('../../models/user');
var Contact = require('../../models/contact');

router.put('/car/:id', (req, res) => {

    const carData = {

      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      mileage: req.body.mileage,
      color: req.body.color,
      options: req.body.options
    }

    Car.updateOne({_id: req.params.id}, carData).then(car => {
      res.status(200).json(car)
    }).catch(err => res.status(400).json(car))
})

router.put('/contact', (req, res) => {

    const contactData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    }
    Contact.updateOne({_id: req.params.id}, contactData)
      .then(contact => {
        res.status(200).json(contact)
      }).catch(err => res.status(400).json(err))
})

router.put('/user',  (req, res) => {

    const updateUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    User.updateOne({_id: req.param.id}, updateUser)
      .then(user => {
          res.status(200).json(user)
      }).catch(err => res.status(400).json(err))

})

module.exports = router;

/*

   name: {type: String},
  email: {type: String},
  phone: {type: String},
  address: {type: String},
  city: {type: String},
  state: {type: String},
  zip: {type: String}


*/
