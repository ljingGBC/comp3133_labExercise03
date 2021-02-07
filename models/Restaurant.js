const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  address: {
    type:Object,
  },

  'address.building': {
    type: String,
    required: false
  },
  'address.street':  {
    type: String,
    required: false
  },
  'address.zipcode': {
    type: String,
    required: false
  },
  

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
  },

  name: {
    type: String,
    required: true,
    trim: false,
  },

  restaurant_id: {
    type: String,
    required: [true,"Please Enter the ID"],
    unique:[true,"Duplicate ID Not Allowed"],
    //trim: true,
    /*
    maxlength: 8,
    validate: function(value) {
        var idRegex = /^[0-9]{8}$/; // only accept 8 digits
        return idRegex.test(value);
      }
    */
  },

  /*
  created: { 
    type: Date,
    default: Date.now
  },
  */
});

/*
RestaurantSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
  });
  
RestaurantSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
});
  
RestaurantSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
});
  
RestaurantSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
});  
*/

//Mongoose pluralize the collection name to 'Restaurants'. So you need to specify actual collection name
const Restaurant = mongoose.model('Restaurant', RestaurantSchema,'Restaurants');// Note: the first 'Restaurant' can be any name, but the second 'Restaurants' must be the collection name in MongoDB
module.exports = Restaurant;