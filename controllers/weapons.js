const mongoose = require('mongoose');
let Weapon = require('../models/weapon.model');
const HttpError = require('../models/http-error');



const getWeapons = async (req, res, next) => {
  const { id } = req.params;
  if(id){
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return next(
        new HttpError('No se ha encontrado ningún arma con el id especificado.',404)
      );
    }
    try {
      let weapon = await Weapon.findById(id);
      res.status(200).json(weapon)
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