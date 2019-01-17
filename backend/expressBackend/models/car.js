var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
  make: {type: String},
  model: {type: String},
  year: {type: String},
  mileage: {type: Number},
  color: {type: String},
  options: {type: String}

})

module.exports = mongoose.model('Car', carSchema);
