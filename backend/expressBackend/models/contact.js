var mongoose = require('mongoose');
var contactSchema = mongoose.Schema({
  name: {type: String},
  email: {type: String},
  phone: {type: String},
  address: {type: String},
  city: {type: String},
  state: {type: String},
  zip: {type: String}

})

module.exports = mongoose.model('Contact', contactSchema);
