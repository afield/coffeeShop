// CoffeeShop.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema.
var coffeeShopSchema = new Schema({
  name: String,
  address: { 
    type: String, 
    required: true, 
    unique: true 
  },
  rating: {
    type: Number,
    max: 5,
    min: 0
  },
  created_at: Date,
  updated_at: Date
});

// Custom Method
coffeeShopSchema.methods.summary = function() {
    // Construct and return summary.
    var summary = this.name + "\n" + this.address + "\nRating: " + this.rating; 
    console.log("Summary: \n" + summary);
    return summary;
};

// Create a model using schema.
var CoffeeShop = mongoose.model('CoffeeShop', coffeeShopSchema);

// Make this available to our Node applications.
module.exports = CoffeeShop;
