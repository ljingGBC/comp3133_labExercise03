const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes.js');// will create RestaurantRoutes.js later

const app = express();
app.use(express.json()); // Make sure it comes back as json

//use personal Connection String here, which is from cloud.mongodb.com, personal account.
mongoose.connect('mongodb+srv://comp3123MongoDBUser:<password>@comp3123.2ui08.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(restaurantRouter);

app.listen(8081, () => { console.log('Server is running...') });