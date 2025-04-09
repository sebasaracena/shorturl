const express= require('express');
const dotenv= require('dotenv');
const mongoConnection= require('./config/mongoConnection');
dotenv.config();
const app= express();
app.use(express.json());
const conn= new mongoConnection();
const Router= require('./routes');
Router(app,conn);

app.listen(3000, () => {
    console.log('||------------------------------------------||');
    console.log('  URL NODE:     http://localhost:3000');
    console.log('  URL MONGO:   ' + 'mongodb://localhost:27017');
    console.log('||------------------------------------------||');
  });