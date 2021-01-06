const mongoose = require('mongoose');
const {Schema} = mongoose;

const WeaponSchema = new Schema({
    _id:            {type: String, required:true},
    name:           {type: String, required:true},
    category:       {type: String, required:false},
    firemode:       {type: String, required:false},
    firerate:       {type: String, required:false},
    altfire:        {type: Boolean, required:false},
    altfiremode:    {type: String, required:false},
    altfireratio:   {type: String, required:false},
    wallpen:        {type: String, required:false},
    magazine:       {type: Number, required:false},
    price:          {type: Number, required:false},
    img:            {type: String, required:false},
    hidden:         {type: Boolean, default:false},
    damage:         [{
                        order:Number,
                        distance:String,
                        head:Number,
                        body:Number,
                        legs:Number
                    }]
})

const Weapon = mongoose.model('Weapon', WeaponSchema);

module.exports = Weapon;