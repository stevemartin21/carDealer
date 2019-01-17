var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../../models/user');
var Car = require('../../models/car');
var Contact = require('../../models/contact');

router.post('/user', (req, res) => {
   User.findOne({email: req.body.email})
    .then(user => {
      if(user) {
        res.status(400).json({message: 'there is a user with that email'})
      }
      const newUser = newUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })

      bcrypt.getSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash)=> {
          newUser.password = hash
          newUser.save().then(user => {
            res.status(200).json(user)
          })
        }).catch(err => res.status(400).json(err))
      })
    })
})

let selectedUser;

router.post('/token', (req, res) => {
  User.findOne({email: req.body.email}).then(user => {

      if(!user) {
        res.status(400).json({message: 'There was not a user with that email'})
      } else {
        selectedUser = user;
        return bcrypt.compare(req.body.password, user.password)
          .then(success => {
            if(!success) {
              res.status(400).json({message: 'Passwords do not match'})
            }

            const token = jwt.sign(
              {email: selectedUser.email, userId: selectedUser._id, name: selectedUser.name},
              'thesecretisyabbadabbado',
              {expiresIn: '1h'})

              res.status(200).json({
                token: 'Bearer ' + token,
                expiresIn: 3600,
                userId: selectedUser._id
              })

          }).catch(err => res.status(400).json(err))
      }
  })
})

router.post('/car', (req, res) => {

    const newCar = new Car({

        model: req.body.model,
        year: req.body.year,
        mileage: req.body.mileage,
        color: req.body.color,
        options: req.body.options
    })

    newCar.save().then(car => {
      res.status(200).json(car)
    }).catch(err => {
        res.status(err => res.status(400).json(err))
    })
})

router.post('/contact', (req, res) => {
    const newContact = new Contact({
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    })

    newContact.save().then(contact => {
      res.status(200).json(contact)
    }).catch(err => res.status(400).json(err))
})




module.exports = router;
