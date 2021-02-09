const express = require('express');
const mongoose = require('mongoose');
// const url = 'mongodb://localhost'
const url = 'mongodb+srv://babu:YYrnlLLBHM1CbReh@cluster0.fkl2b.mongodb.net/mydb?retryWrites=true&w=majority';

const app = express();

mongoose.connect(url, {useNewUrlParser: true});
const conn = mongoose.connection;
conn.on('open', function() {
    console.log('conncted..........');
});

app.use(express.json());

//-----------------Route to routes/aliens.js---------------------------
alienRouting = require('./routes/aliens');
app.use('/aliens', alienRouting);
//-----------------------------------------------

app.listen(3000, ()=>{
    console.log('server is running...........');
});