const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/FoodRoutes');

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://babu:YYrnlLLBHM1CbReh@cluster0.fkl2b.mongodb.net/mydb?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(foodRouter);

app.listen(3000, () => { console.log('Server is running...') });