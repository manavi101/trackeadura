const mongoose = require('mongoose');
let Weapon = require('../models/weapon.model');
const HttpError = require('../models/http-error');

const getUser = async (req, res, next) => {
    const { name, tag } = req.params;
    if(name&&tag){
      try {
        let weapon;
        weapon = await Weapon.findOne({name:name},{tag:tag})
        if(weapon){
          res.status(200).json(weapon);
        }else{
          return next(
            new HttpError('There isn´t a user with name = '+name+'#'+tag,404)
          );
        }
      } catch (error) {
        return next(
          new HttpError('An error ocurred :'+error,500)
        );
      }
    }
  }