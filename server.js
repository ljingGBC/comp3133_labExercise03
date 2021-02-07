const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//use personal Connection String here, which is from cloud.mongodb.com, personal account.
mongoose.connect('mongodb+srv://comp3123MongoDBUser:gbc101217272@comp3123.2ui08.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  //useNewUrlParser: true,
  //useUnifiedTopology: true

  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(restaurantRouter);

app.listen(3000, () => { console.log('Server is running...') });