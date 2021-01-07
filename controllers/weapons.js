const mongoose = require('mongoose');
let Weapon = require('../models/weapon.model');
const HttpError = require('../models/http-error');



const getWeapons = async (req, res, next) => {
  try {
    let weapon = await Weapon.find();
    res.status(200).json(weapon)
  } catch (error) {
    return next(
      new HttpError('Ha ocurrido un error al obtener la lista de armas.',400)
    );
  }
}
const getWeapon = async (req, res, next) => {
  const { field, value } = req.params;
  if(field&&value){
    try {
      let weapon;
      if(field==="id"){
        weapon = await Weapon.findById(value);
      }else{
        weapon = await Weapon.findOne({[field]:value})
      }
      if(weapon){
        res.status(200).json(weapon);
      }else{
        return next(
          new HttpError('No se ha encontrado ningún arma con '+field+' = '+value,404)
        );
      }
    } catch (error) {
      return next(
        new HttpError('Error al realizar la consulta :'+error,400)
      );
    }
  }
}


module.exports = { getWeapons,getWeapon }