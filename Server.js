require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
require('./models/Weapon');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('MongoDB')
const app = express();
//mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_MONGODB,{ useNewUrlParser: true });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});
//Para produccion
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get(`/api/hello`, async (req, res) => {
  res.send({express : "hello"});
});
//app.use(express.static(path.join(__dirname, 'Weapons.json')));
app.get(`/api/Weapons`, async (req, res) => {
  
  //res.sendFile(path.join(__dirname,'Weapons.json'));
    const Weapon = mongoose.model('Weapon');
    let fs = require('fs');
    let Weapons = JSON.parse(fs.readFileSync('Weapons.json', 'utf8'));
    res.send(Weapons);
    Weapon.create(Weapons);
  
});