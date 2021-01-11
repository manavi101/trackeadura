const mongoose = require('mongoose');
let User = require('../models/users.model');
const HttpError = require('../models/http-error');

const getUser = async (req, res, next) => {
    const { name, tag } = req.params;
    if(name&&tag){
      try {
        let user;
        user = await User.findOne({name:name},{tag:tag})
        if(user){
          res.status(200).json(user);
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