const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  close_person_phone:{
    type:String,
    required:true
  },
  personal_phone:{
    type:String,
    required:true
  },
  problem:{
    type:String,
    required:true
  }
});

const Message = mongoose.model("Message",MessageSchema);

module.exports = Message;
