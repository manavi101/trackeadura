const axios = require('axios')
const mongoose = require('mongoose');
let User = require('../models/user.model');
const HttpError = require('../models/http-error');

const getUser = async (req, res, next) => {
  const { name, tag } = req.params;
  if(name&&tag){
    try {
      let user;
      //Search in db
      user = await User.findOne({name:name, tag:tag})
      if(user){
          res.status(200).json(user);
      }else{
        //if not then search in external api
          await axios.get(process.env.EXTERNAL_API+'player/'+name+'-'+tag)
          .then(function(response){
            //if exists is saved in db for future searches
            user = response.data
            user = User({_id: user.id,name: user.name,tag: user.tag, puuid: user.puuid})
            user.save();
            res.status(200).json(user);
          })
          .catch(function(error){
            if(error.response.status===404){
              return next(
                new HttpError('There isn´t a user with name = '+name+'#'+tag+'\n',404)
              );
            }else{
              return next(
                new HttpError('Something went wrong: '+error,500)
              );
            }
          })
      }
    } catch (error) {
      return next(
        new HttpError('An error ocurred :'+error,500)
      );
    }
  }
}
  
module.exports = {getUser}