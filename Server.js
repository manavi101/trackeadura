require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('MongoDB')
const app = express();
//mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_MONGODB,{ useNewUrlParser: true });
let db = mongoose.connect
app.use(bodyParser.json());

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
  try{
    let fs = require('fs'); /* Put it where other modules included */
    let Weapons = JSON.parse( await fs.readFileSync('Weapons.json', 'utf8'));
    let WeaponsDamages = JSON.parse( await fs.readFileSync('WeaponsDamage.json', 'utf8'));
    for(let i=0;Weapons.length>i; i++){
      let aux=0;
      Weapons[i].WeaponsDamage = [];
      for(let j=0;WeaponsDamages.length>j; j++){
          if(WeaponsDamages[j].weaponid===Weapons[i].id){
              Weapons[i].WeaponsDamage[aux] = Object.assign(WeaponsDamages[j])
              aux++;
          }
      }
    }
    res.send(Weapons);
  } catch(err) {
    res.status(500).send()
  }
  
});