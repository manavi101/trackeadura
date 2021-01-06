const mongoose = require('mongoose');
let Weapon = require('../models/weapon.model');
const HttpError = require('../models/http-error');



const getWeapons = async (req, res, next) => {
  const { id } = req.params;
  if(id){
    try {
      let weaponById = await Weapon.findById(id);
      let weaponByName = await Weapon.find({name:id})
      if(!weaponById && !weaponByName){
        return next(
          new HttpError('No se ha encontrado ningún arma con el id especificado.',404)
        );
      }
      if(weaponById)
        res.status(200).json(weaponById)
      if(weaponByName)
        res.status(200).json(weaponByName)
    } catch (error) {
      return next(
        new HttpError('Ha ocurrido un error al obtener el arma.',400)
      );
    }
  } else {
    try {
      let weapon = await Weapon.find();
      res.status(200).json(weapon)
    } catch (error) {
      return next(
        new HttpError('Ha ocurrido un error al obtener la lista de armas.',400)
      );
    }
  }
}

module.exports = { getWeapons }