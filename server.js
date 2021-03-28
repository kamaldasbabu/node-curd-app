const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const bodyParser = require('body-parser');
// const url = 'mongodb://localhost'
const url = 'mongodb+srv://babu:YYrnlLLBHM1CbReh@cluster0.fkl2b.mongodb.net/mydb?retryWrites=true&w=majority';

const app = express();

mongoose.connect(url, {useNewUrlParser: true});
const conn = mongoose.connection;
conn.on('open', function() {
    console.log('conncted..........');
});

app.use(express.json());
app.use(cors());

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

//app.use((req, res, next)=> {
 //   res.setHeader("Access-Control-Allow-Origin", "*");
   // res.setHeader(
     //   "Access-Control-Allow-Headers",
       // "Origin, X-Requested-With, Content-Type, Accept",
        //"HttpHeaders"

 //   );
//    res.setHeader("Access-Control-Allow-Methods",
//    "GET","POST", "PUT", "DELETE", "PATCH", "UPDATE"
//    );
//    next();
//});

//-----------------Route to routes/aliens.js---------------------------
alienRouting = require('./routes/aliens');
app.use('/aliens', alienRouting);
//-----------------------------------------------

app.listen(3000, ()=>{
    console.log('server is running...........');
});