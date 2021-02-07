const express = require('express');
const restaurantModel = require('../models/Restaurant.js');
const app = express();

// Create REST API to return all restaurant details
//http://localhost:3000/restaurants
app.get('/restaurants', async (req, res) => {
    const restaurants = await restaurantModel.find({});//Select and read all the columns
    
    try {
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }

});

//Find By ID
//http://localhost:3000/restaurant?id=5f8dfaa69e95b351addea93e
app.get('/restaurant', async (req, res) => {
    //const employees = await employeeModel.findById(req.query.id);
    const restaurants = await restaurantModel.find({_id: req.query.id}).select("cuisine name city resturant_id");

    try {
      res.send(restaurants);
    } catch (err) {
      res.status(500).send(err);
    }
  });


// Create REST API to return all restaurant details by cuisine
// http://localhost:3000/restaurants/cuisine/Bakery
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    const cuisineName = req.params.cuisine
    const restaurants = await restaurantModel.find({cuisine:cuisineName});
    
    try {
      if(restaurants.length != 0){
        res.send(restaurants);
      }else{
        res.send(JSON.stringify({status:false, message: "No data found"}))
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });

  /**
   * 6.	Create REST API to return the 
        -	The selected columns must include id, cuisines, name, city, resturant_id
        -	The sorting by the restaurant_id in Ascending or Descending Order based on parameter passed.
    http://localhost:3000/restaurants?sortBy=ASC
    http://localhost:3000/restaurants?sortBy=DESC
   */
  app.get('/restaurants', async (req, res) => {

    //const sortBy = req.query.value
    const restaurants = await restaurantModel.find({})
              .select("cuisine name city resturant_id")
              .sort({'resturant_id' : req.query.sortBy}); 
    
    try {
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }

});

//
app.get('/restaurants/Delicatessen', async (req, res) => {
    
    try {
      const restaurants = restaurantModel.
                          find({})
                          .where('cuisine').equals('Delicatessen')
                          .where('city').ne('Brooklyn')
                          .sort('-name')
                          .select('cuisine name city')
                          .exec((err, data) => {
                            if (err){
                                res.send(JSON.stringify({status:false, message: "No data found"}));
                            }else{
                                res.send(data);
                            }
                          });
      } catch (err) {
        res.status(500).send(err);
      }                  

  });


 module.exports = app