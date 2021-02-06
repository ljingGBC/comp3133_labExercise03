const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  city:{
    type: String,
    required: true,
    trim: true, // means remove space, for cleanup data
    lowercase: true // means convert to lowercase, NOT means only allow lowercase  
  },

  cuisine: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  name: {
    type: String,
    required: true,
    trim: false,
    lowercase: true
  },

  restaurant_id: {
    type: String,
    required: [true,"Please Enter the ID"],
    unique:[true,"Duplicate ID Not Allowed"],
    trim: true,
    maxlength: 8,
    validate: function(value) {
        var idRegex = /^[0-9]{8}$/; // only accept 8 digits
        return idRegex.test(value);
      }
  },

  created: { 
    type: Date,
    default: Date.now
  },
});



const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;