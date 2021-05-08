const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true,
      trim: true, 
      minlength: 5,
      maxlength: 255
    },
    email:{
        type:String,
       required: true,
       trim: true, 
       minlength: 5,
       maxlength: 255,
       unique:true
    },
    balance:{
        type:String,
        default:0,
    },
})

const User = mongoose.model('USER', userSchema);
module.exports.User=User;